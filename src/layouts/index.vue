<template>
	<!-- 异步加载组件 -->
	<suspense>
		<template #default>
			<component :is="LayoutComponents['vertical']" />
		</template>
		<template #fallback>
			<Loading />
		</template>
	</suspense>
	<ThemeDrawer />
</template>

<script setup lang="ts">
import { defineAsyncComponent, type Component } from "vue";
const LayoutComponents: { [key: string]: Component } = {
	vertical: defineAsyncComponent(() => import("./LayoutVertical/index.vue"))
};
</script>
<style lang="scss" scoped></style>
