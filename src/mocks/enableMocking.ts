/**
 * A utility function to register and enable a service worker to intercept all requests registered
 * through the handlers. It only works in the development environment.
 * @returns the registered and activated worker
 */
const enableMocking = async (): Promise<ServiceWorkerRegistration | undefined> => {
	if (!import.meta.env.DEV) {
		return;
	}
	const { worker } = await import('./browser');

	return await worker.start();
};

export { enableMocking };