import StarrySky from './sky/index.js';
import Button from './button/index.js'

//按需引入
export { StarrySky, Button };

const components = [StarrySky, Button];

const install = (App) => {
	if (install.installed) return;
  	install.installed = true;
	components.forEach((item) => {
		console.log(item);
		App.component(item.name, item);
	});
};

export default {
	install,
};
