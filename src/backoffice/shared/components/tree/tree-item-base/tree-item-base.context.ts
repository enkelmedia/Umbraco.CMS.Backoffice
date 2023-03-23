import { map } from 'rxjs';
import {
	UmbSectionSidebarContext,
	UMB_SECTION_SIDEBAR_CONTEXT_TOKEN,
} from '../../section/section-sidebar/section-sidebar.context';
import { UmbSectionContext, UMB_SECTION_CONTEXT_TOKEN } from '../../section/section.context';
import { UmbTreeContextBase } from '../tree.context';
import { BooleanState, StringState, UmbObserverController } from '@umbraco-cms/backoffice/observable-api';
import { UmbControllerHostInterface } from '@umbraco-cms/backoffice/controller';
import {
	UmbContextConsumerController,
	UmbContextProviderController,
	UmbContextToken,
} from '@umbraco-cms/backoffice/context-api';
import { umbExtensionsRegistry } from '@umbraco-cms/backoffice/extensions-api';
import type { TreeItemPresentationModel } from '@umbraco-cms/backoffice/backend-api';

export class UmbTreeItemContextBase<T extends TreeItemPresentationModel = TreeItemPresentationModel> {
	public host: UmbControllerHostInterface;
	public treeItem: T;
	public unique: string;
	public type: string;

	#isLoading = new BooleanState(false);
	isLoading = this.#isLoading.asObservable();

	#isSelectable = new BooleanState(false);
	isSelectable = this.#isSelectable.asObservable();

	#isSelected = new BooleanState(false);
	isSelected = this.#isSelected.asObservable();

	#isActive = new BooleanState(false);
	isActive = this.#isActive.asObservable();

	#hasActions = new BooleanState(false);
	hasActions = this.#hasActions.asObservable();

	#path = new StringState('');
	path = this.#path.asObservable();

	treeContext?: UmbTreeContextBase;
	#sectionContext?: UmbSectionContext;
	#sectionSidebarContext?: UmbSectionSidebarContext;

	constructor(host: UmbControllerHostInterface, treeItem: T, getUnique: (x: T) => string | null | undefined) {
		this.host = host;
		this.treeItem = treeItem;

		const unique = getUnique(this.treeItem);
		if (!unique) throw new Error('Could not create tree item context, unique key is missing');
		this.unique = unique;

		if (!this.treeItem.type) throw new Error('Could not create tree item context, tree item type is missing');

		this.type = this.treeItem.type;

		new UmbContextConsumerController(host, UMB_SECTION_CONTEXT_TOKEN, (instance) => {
			this.#sectionContext = instance;
			this.#observeSectionPath();
		});

		new UmbContextConsumerController(host, UMB_SECTION_SIDEBAR_CONTEXT_TOKEN, (instance) => {
			this.#sectionSidebarContext = instance;
		});

		new UmbContextConsumerController(host, 'umbTreeContext', (treeContext: UmbTreeContextBase) => {
			this.treeContext = treeContext;
			this.#observeIsSelectable();
			this.#observeIsSelected();
		});

		new UmbContextProviderController(host, UMB_TREE_ITEM_CONTEXT_TOKEN, this);

		this.#observeTreeItemActions();
	}

	public async requestChildren() {
		// TODO: wait for tree context to be ready
		this.#isLoading.next(true);
		const response = await this.treeContext!.repository.requestTreeItemsOf(this.unique);
		this.#isLoading.next(false);
		return response;
	}

	public toggleContextMenu() {
		this.#sectionSidebarContext?.toggleContextMenu(this.type, this.unique, this.treeItem.name || '');
	}

	public select() {
		this.treeContext?.select(this.unique);
	}

	public deselect() {
		this.treeContext?.deselect(this.unique);
	}

	#observeIsSelectable() {
		if (!this.treeContext) return;
		new UmbObserverController(this.host, this.treeContext.selectable, (value) => this.#isSelectable.next(value));
	}

	#observeIsSelected() {
		if (!this.treeContext) return;

		new UmbObserverController(
			this.host,
			this.treeContext.selection.pipe(map((selection) => selection.includes(this.unique))),
			(isSelected) => {
				this.#isSelected.next(isSelected);
			}
		);
	}

	#observeSectionPath() {
		if (!this.#sectionContext) return;

		new UmbObserverController(this.host, this.#sectionContext.pathname, (pathname) => {
			if (!pathname) return;
			const path = this.#constructPath(pathname, this.type, this.unique);
			this.#path.next(path);
		});
	}

	#observeTreeItemActions() {
		new UmbObserverController(
			this.host,
			umbExtensionsRegistry
				.extensionsOfType('entityAction')
				.pipe(map((actions) => actions.filter((action) => action.conditions.entityType === this.type))),
			(actions) => {
				this.#hasActions.next(actions.length > 0);
			}
		);
	}

	#constructPath(pathname: string, entityType: string, key: string) {
		return `section/${pathname}/${entityType}/edit/${key}`;
	}
}

export const UMB_TREE_ITEM_CONTEXT_TOKEN = new UmbContextToken<UmbTreeItemContextBase>('UmbTreeItemContext');
