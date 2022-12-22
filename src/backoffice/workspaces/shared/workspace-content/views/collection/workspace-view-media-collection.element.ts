import { css, html, LitElement, nothing } from 'lit';
import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { customElement, state } from 'lit/decorators.js';
import { distinctUntilChanged } from 'rxjs';
import type { UmbWorkspaceNodeContext } from '../../../workspace-context/workspace-node.context';
import { UmbContextConsumerMixin, UmbContextProviderMixin } from '@umbraco-cms/context-api';
import { UmbObserverMixin } from '@umbraco-cms/observable-api';
import type { DocumentDetails, MediaDetails } from '@umbraco-cms/models';

import 'src/backoffice/components/content-property/content-property.element';
import 'src/backoffice/dashboards/media-management/dashboard-media-management.element';
import { UmbCollectionContext } from '@umbraco-cms/components/collection/collection.context';
import { UmbMediaStore, UmbMediaStoreItemType } from '@umbraco-cms/stores/media/media.store';

@customElement('umb-workspace-view-collection-media')
export class UmbWorkspaceViewCollectionMediaElement extends UmbContextProviderMixin(UmbContextConsumerMixin(UmbObserverMixin(LitElement))) {
	static styles = [
		UUITextStyles,
		css`
			:host {
				display: block;
				height: 100%;
			}
		`,
	];

	@state()
	private _entityKey = '';

	private _workspaceContext?: UmbWorkspaceNodeContext;

	private _collectionContext?:UmbCollectionContext<UmbMediaStoreItemType, UmbMediaStore>;

	constructor() {
		super();

		this.consumeContext('umbWorkspaceContext', (nodeContext) => {
			this._workspaceContext = nodeContext;
			this._observeContent();
		});
	}

	connectedCallback(): void {
		super.connectedCallback();
		// TODO: avoid this connection, our own approach on Lit-Controller could be handling this case.
		this._collectionContext?.connectedCallback();
	}
	disconnectedCallback(): void {
		super.connectedCallback()
		// TODO: avoid this connection, our own approach on Lit-Controller could be handling this case.
		this._collectionContext?.disconnectedCallback();
	}

	private _observeContent() {
		if (!this._workspaceContext) return;

		this.observe<DocumentDetails | MediaDetails>(this._workspaceContext.data.pipe(distinctUntilChanged()), (content) => {
			this._entityKey = content.key;
			this._provideWorkspace();
		});
	}

	protected _provideWorkspace() {
		// Notice this should accept an empty string, when we want to get root nodes.
		if(this._entityKey != null) {
			this._collectionContext = new UmbCollectionContext(this, this._entityKey, 'umbMediaStore');
			this._collectionContext.connectedCallback();
			this.provideContext('umbCollectionContext', this._collectionContext);
		}
	}

	

	render() {
		return html`<umb-collection entityType="media"></umb-collection>`;
	}
}

export default UmbWorkspaceViewCollectionMediaElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-workspace-view-collection-media': UmbWorkspaceViewCollectionMediaElement;
	}
}
