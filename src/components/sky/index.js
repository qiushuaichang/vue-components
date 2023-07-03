import StarrySky from './index.vue';

StarrySky.install = (App) => {
	App.component(StarrySky.__name, StarrySky);
};

export default StarrySky;
