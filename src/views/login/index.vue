<template>
	<div class="login-container flex justify-center flex-items-center">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/WMS.svg" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<h2 class="logo-text">仓储管理系统(WMS)</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";
</script>
<script lang="ts">
export default {
	name: "Login"
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
