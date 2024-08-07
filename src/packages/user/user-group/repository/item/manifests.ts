import { UMB_USER_GROUP_ITEM_REPOSITORY_ALIAS, UMB_USER_GROUP_STORE_ALIAS } from './constants.js';
import type { ManifestRepository, ManifestItemStore, ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

const itemRepository: ManifestRepository = {
	type: 'repository',
	alias: UMB_USER_GROUP_ITEM_REPOSITORY_ALIAS,
	name: 'User Group Item Repository',
	api: () => import('./user-group-item.repository.js'),
};

const itemStore: ManifestItemStore = {
	type: 'itemStore',
	alias: UMB_USER_GROUP_STORE_ALIAS,
	name: 'User Group Item Store',
	api: () => import('./user-group-item.store.js'),
};

export const manifests: Array<ManifestTypes> = [itemRepository, itemStore];
