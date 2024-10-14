import type { UmbMemberGroupItemStore } from './member-group-item.store.js';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';

export const UMB_MEMBER_GROUP_ITEM_STORE_CONTEXT = new UmbContextToken<UmbMemberGroupItemStore>(
	'UmbMemberGroupItemStore',
);
