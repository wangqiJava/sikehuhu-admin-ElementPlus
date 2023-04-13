import fs from "fs";
import path from "path";
import dotenv from "dotenv";

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 判断当前环境是否为开发环境
 */
export function isDevFn(mode: string): boolean {
	return mode === "development";
}

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 判断当前环境是否为生产环境
 */
export function isProdFn(mode: string): boolean {
	return mode === "production";
}

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 是否生成包预览
 */
export function isReportMode(): boolean {
	return process.env.VITE_REPORT === "true";
}

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 读取所有环境变量配置文件到process.env
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, "\n");
		realName = realName === "true" ? true : realName === "false" ? false : realName;

		if (envName === "VITE_PORT") {
			realName = Number(realName);
		}
		if (envName === "VITE_PROXY") {
			try {
				realName = JSON.parse(realName);
			} catch (error) {}
		}
		ret[envName] = realName;
		process.env[envName] = realName;
	}
	return ret;
}

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 获取以指定前缀开头的环境变量
 * @param match prefix
 * @param confFiles ext
 */
export function getEnvConfig(match = "VITE_GLOB_", confFiles = [".env", ".env.production"]) {
	let envConfig = {};
	confFiles.forEach(item => {
		try {
			const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
			envConfig = { ...envConfig, ...env };
		} catch (error) {
			console.error(`Error in parsing ${item}`, error);
		}
	});

	Object.keys(envConfig).forEach(key => {
		const reg = new RegExp(`^(${match})`);
		if (!reg.test(key)) {
			Reflect.deleteProperty(envConfig, key);
		}
	});
	return envConfig;
}

/*
 * Author: WangQi
 * Date: 2023-04-13
 * Description: 获取用户根目录
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
	return path.resolve(process.cwd(), ...dir);
}
