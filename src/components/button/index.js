import Button from './index.vue';

Button.install = (App) => {
	App.component(Button.__name, Button);
};

export default Button;
