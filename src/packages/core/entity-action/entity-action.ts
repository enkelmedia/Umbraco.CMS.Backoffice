import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

/**
 * Interface for an entity action.
 * @export
 * @interface UmbEntityAction
 */
export interface UmbEntityAction<ArgsMetaType> {
	args: UmbEntityActionArgs<ArgsMetaType>;

	/**
	 * The href location, the action will act as a link.
	 * @returns {Promise<string | null | undefined>}
	 */
	getHref(): Promise<string | null | undefined>;

	/**
	 * The `execute` method, the action will act as a button.
	 * @returns {Promise<void>}
	 */
	execute(): Promise<void>;
}

/**
 * Base class for an entity action.
 * @export
 * @abstract
 * @class UmbEntityActionBase
 * @extends {UmbActionBase}
 * @implements {UmbEntityAction}
 * @template RepositoryType
 */
export abstract class UmbEntityActionBase<ArgsMetaType> implements UmbEntityAction<ArgsMetaType> {
	public args: UmbEntityActionArgs<ArgsMetaType>;
	protected _host: UmbControllerHost;

	constructor(host: UmbControllerHost, args: UmbEntityActionArgs<ArgsMetaType>) {
		this._host = host;
		this.args = args;
	}

	/**
	 * By specifying the href, the action will act as a link.
	 * The `execute` method will not be called.
	 * @abstract
	 * @returns {string | null | undefined}
	 */
	public getHref(): Promise<string | null | undefined> {
		return Promise.resolve(undefined);
	}

	/**
	 * By specifying the `execute` method, the action will act as a button.
	 * @abstract
	 * @returns {Promise<void>}
	 */
	public execute(): Promise<void> {
		return Promise.resolve();
	}
}
