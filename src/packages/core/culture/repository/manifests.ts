import { UmbCultureRepository } from './culture.repository.js';
import type { ManifestRepository, ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

export const UMB_CULTURE_REPOSITORY_ALIAS = 'Umb.Repository.Culture';

const repository: ManifestRepository = {
	type: 'repository',
	alias: UMB_CULTURE_REPOSITORY_ALIAS,
	name: 'Cultures Repository',
	api: UmbCultureRepository,
};

export const manifests: Array<ManifestTypes> = [repository];
