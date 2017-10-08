// Partial copy from stentor-core
/**
 * App represents a set of publishing data and configuration data
 * for running the app.
 *
 * @export
 * @interface App
 */
export interface App {
    /**
     * The name of the app
     *
     * @type {string}
     * @memberof App
     */
    name: string;
    /**
     * The invocation name
     *
     * @type {string}
     * @memberof App
     */
    invocationName?: string | string[];
    /**
     * The summary of the app.
     *
     * Shorter then description.
     *
     * @type {string}
     * @memberof App
     */
    summary?: string;
    /**
     * The description for the app
     *
     * @type {string}
     * @memberof App
     */
    description?: string;
    /**
     * A large icon for the app, 512x512 PNG
     *
     * @type {string}
     * @memberof App
     */
    largeIcon?: string;
    /**
     * A small icon for the app, 108x108 PNG
     *
     * @type {string}
     * @memberof App
     */
    smallIcon?: string;
}

