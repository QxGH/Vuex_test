<template>
	<div class="tips">
		<!-- 插槽 slot -->
		<p>tips 内容:</p>
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'Tips',
	data() {
		return {
			message: ""
		}
	}
}
</script>
<style>
	
</style>