import { UMB_RELATION_TYPE_COLLECTION_REPOSITORY_ALIAS } from './constants.js';
import type { ManifestRepository, ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

const repository: ManifestRepository = {
	type: 'repository',
	alias: UMB_RELATION_TYPE_COLLECTION_REPOSITORY_ALIAS,
	name: 'Relation Type Collection Repository',
	api: () => import('./relation-type-collection.repository.js'),
};

export const manifests: Array<ManifestTypes> = [repository];
