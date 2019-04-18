<template>
	<div class="tips">
		<!-- 插槽 slot -->
		<div class="tips-header">
			<h3 class="tips-title">提示:</h3>
		</div>
		<div class="tips-body">
			<slot></slot>
		</div>
		<div class="tips-footer"></div>
	</div>
</template>

<script>

export default {
	name: 'Tips',
	data() {
		return {
			
		}
	}
}
</script>
<style>
	
</style>