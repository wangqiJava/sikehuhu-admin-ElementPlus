<template>
	<div class="w-full h-full flex flex-col">
		<img src="@/assets/images/404.png" class="m-r-120px" alt="404" />
		<div class="not-detail flex flex-col flex-items-center">
			<h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
			<el-button plain type="primary" @click="router.push(HOME_URL)">返回首页</el-button>
		</div>
	</div>
</template>

<script setup lang="ts" name="404">
import { useRouter } from "vue-router";
import { HOME_URL } from "@/config/config";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
