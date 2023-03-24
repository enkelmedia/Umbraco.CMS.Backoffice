import { EntityTreeItemResponseModel } from '@umbraco-cms/backoffice/backend-api';
import { ArrayState, partialUpdateFrozenArray } from '@umbraco-cms/backoffice/observable-api';
import { UmbStoreBase } from '@umbraco-cms/backoffice/store';

/**
 * @export
 * @class UmbTreeStoreBase
 * @extends {UmbStoreBase}
 * @description - General Tree Data Store
 */
// TODO: consider if tree store could be turned into a general EntityTreeStore class?
export class UmbTreeStoreBase<
	T extends EntityTreeItemResponseModel = EntityTreeItemResponseModel
> extends UmbStoreBase {
	#data = new ArrayState<T>([], (x) => x.key);

	/**
	 * Appends items to the store
	 * @param {Array<EntityTreeItemResponseModel>} items
	 * @memberof UmbTreeStoreBase
	 */
	appendItems(items: Array<T>) {
		this.#data.append(items);
	}

	/**
	 * Updates an item in the store
	 * @param {string} key
	 * @param {Partial<EntityTreeItemResponseModel>} data
	 * @memberof UmbTreeStoreBase
	 */
	updateItem(key: string, data: Partial<T>) {
		this.#data.next(partialUpdateFrozenArray(this.#data.getValue(), data, (entry) => entry.key === key));
	}

	/**
	 * Removes an item from the store
	 * @param {string} key
	 * @memberof UmbTreeStoreBase
	 */
	removeItem(key: string) {
		this.#data.removeOne(key);
	}

	/**
	 * An observable to observe the root items
	 * @memberof UmbTreeStoreBase
	 */
	rootItems = this.#data.getObservablePart((items) => items.filter((item) => item.parentKey === null));

	/**
	 * Returns an observable to observe the children of a given parent
	 * @param {(string | null)} parentKey
	 * @return {*}
	 * @memberof UmbTreeStoreBase
	 */
	childrenOf(parentKey: string | null) {
		return this.#data.getObservablePart((items) => items.filter((item) => item.parentKey === parentKey));
	}

	/**
	 * Returns an observable to observe the items with the given keys
	 * @param {Array<string>} keys
	 * @return {*}
	 * @memberof UmbTreeStoreBase
	 */
	items(keys: Array<string>) {
		return this.#data.getObservablePart((items) => items.filter((item) => keys.includes(item.key ?? '')));
	}
}
