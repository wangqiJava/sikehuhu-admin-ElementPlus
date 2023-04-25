import { defineConfig, UserConfig, loadEnv, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";
import { wrapperEnv } from "./src/utils/getEnv";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	return {
		base: "./",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		plugins: [
			vue(),
			//unocss
			UnoCSS(),
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
		],
		server: {
			// 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
			host: "0.0.0.0",
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// 跨域代理配置
			proxy: {
				"/api": {
					target: viteEnv.VITE_API_BACK_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		}
	};
});
