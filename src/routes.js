import VueRouter from 'vue-router';

let routes = [
	{
		path : '/',
		component: require('./components/Login.vue').default
	},
	{
		path: '/tasks',
		component: require('./components/Task.vue').default
	}
];

export default new VueRouter({
	routes,
	linkActiveClass : "is-active"
});