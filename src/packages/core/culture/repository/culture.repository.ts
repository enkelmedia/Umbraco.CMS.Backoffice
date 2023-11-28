import { UmbCultureServerDataSource } from './sources/culture.server.data.js';
import { UmbBaseController } from '@umbraco-cms/backoffice/class-api';
import { type UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { type UmbApi } from '@umbraco-cms/backoffice/extension-api';

export class UmbCultureRepository extends UmbBaseController implements UmbApi {
	#dataSource: UmbCultureServerDataSource;

	constructor(host: UmbControllerHost) {
		super(host);

		this.#dataSource = new UmbCultureServerDataSource(this);
	}

	requestCultures({ skip, take } = { skip: 0, take: 1000 }) {
		return this.#dataSource.getCollection({ skip, take });
	}

	destroy() {}
}
