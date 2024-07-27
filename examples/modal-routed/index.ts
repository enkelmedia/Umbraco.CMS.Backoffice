import { ManifestDashboard, ManifestModal, ManifestSection } from '@umbraco-cms/backoffice/extension-registry';

// const section : ManifestSection = {
// 	type: "section",
// 	alias: 'demo.section',
// 	name: "Demo Section",
// 	meta: {
// 		label: "Demo",
// 		pathname: "demo"
// 	}
// }

let dashboard : ManifestDashboard = {
	type: 'dashboard',
	name: 'Example Modal Dashboard',
	alias: 'example.dashboard.dataset',
	element: () => import('./dashboard.element.js'),
	weight: 15000,
	meta: {
		label: 'Modal Dashboard',
		pathname: 'example',
	},
};

let dashboard2 : ManifestDashboard = {
	type: 'dashboard',
	name: 'Example Modal Dashboard2',
	alias: 'example.dashboard.dataset2',
	element: () => import('./dashboard2.element.js'),
	weight: 15001,
	meta: {
		label: 'Link Dashboard',
		pathname: 'example-2',
	},
};

const modal : ManifestModal = {
  type: 'modal',
  name: 'Example Modal',
  alias: 'example.routed.modal',
  element : () => import('./modal/example-modal.element.js'),
};

export const manifests = [
	dashboard,
	dashboard2,
	modal
];