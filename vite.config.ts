import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
	return {
		plugins: [
			vue(),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * gzip compress
			viteCompression({
				verbose: true,
				disable: false,
				threshold: 10240,
				algorithm: "gzip",
				ext: ".gz"
			})
		]
	};
});
