import Ember from 'ember';

export default Ember.Service.extend({
	purecloud: Ember.inject.service(),
	deployments: [],
	deploymentCount: 0,

	init() {
		this._super(...arguments);
		this.loadDeployments();
	},
	loadDeployments() {
		return new Promise((resolve, reject) => {
			const webChatApi = this.get('purecloud').webChatApi();
			webChatApi.getWebchatDeployments()
				.then((deployments) => {
					// Sort a-z
					deployments.entities.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
					
					// Reset list
					deployments.entities.forEach((deployment) => {
						if (deployment.authenticationRequired === true) {
							console.warn(`Deployment "${deployment.name}" requires authentication and cannot be used from dev tools`);
							deployment.name += ' (Requires Authentication, not supported with dev tools)';
						}
					});
					this.deployments.clear();
					this.deployments.addObjects(deployments.entities);
					this.set('deploymentCount', deployments.entities.length);

					// Done
					resolve();
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	createDeployment() {
		return new Promise((resolve, reject) => {
			const webChatApi = this.get('purecloud').webChatApi();
			let deploymentId = '';

			const body = {
				'name': 'Developer Tools',
				'description': 'Created by the PureCloud Developer Tools',
				'authenticationRequired': false,
				'disabled': false,
				'webChatConfig': {
					'webChatSkin': 'basic'
				}
			};
			webChatApi.postWebchatDeployments(body)
				.then((deployment) => {
					console.log(`Created web chat deployment "${deployment.name}" (${deployment.id})`);
					deploymentId = deployment.id;

					// Reload list after creating new one
					return this.loadDeployments();
				})
				.then(() => {
					resolve(deploymentId);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
});
