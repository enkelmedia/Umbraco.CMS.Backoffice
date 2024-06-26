import { manifests as renameModalManifests } from './modal/manifests.js';
import { manifest as renameKindManifest } from './rename-server-file.action.kind.js';
import type { ManifestTypes, UmbBackofficeManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes | UmbBackofficeManifestKind> = [
	...renameModalManifests,
	renameKindManifest,
];
