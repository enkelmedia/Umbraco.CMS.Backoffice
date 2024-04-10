import { UmbDataTypeMoveServerDataSource } from './data-type-move.server.data-source.js';
import { UMB_NOTIFICATION_CONTEXT } from '@umbraco-cms/backoffice/notification';
import type { UmbMoveToRepository, UmbMoveToRequestArgs } from '@umbraco-cms/backoffice/repository';
import { UmbRepositoryBase } from '@umbraco-cms/backoffice/repository';

export class UmbMoveDataTypeRepository extends UmbRepositoryBase implements UmbMoveToRepository {
	#moveSource = new UmbDataTypeMoveServerDataSource(this);

	async requestMove(args: UmbMoveToRequestArgs) {
		const { error } = await this.#moveSource.move(args);

		if (!error) {
			const notificationContext = await this.getContext(UMB_NOTIFICATION_CONTEXT);
			const notification = { data: { message: `Moved` } };
			notificationContext.peek('positive', notification);
		}

		return { error };
	}
}
