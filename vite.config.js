import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import path from 'path'

export default defineConfig({
	plugins: [
		vue(),
		vueSetupExtend(),
	],
	build: {
		// outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, "./src/components/index.js"), //指定组件编译入口文件
			name: "muk-ui",
			fileName: "muk-ui",
		},//库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				exports: "named",
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},// rollup打包配置
	},
});
