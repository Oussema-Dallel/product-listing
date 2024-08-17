const enableMocking = async (): Promise<ServiceWorkerRegistration | undefined> => {
	if (!import.meta.env.DEV) {
		return;
	}
	const { worker } = await import('./browser');

	return await worker.start();
};

export { enableMocking };