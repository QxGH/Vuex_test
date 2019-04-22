<template>
	<div class="tips">
		<div class="tips-header">
			<h3 class="tips-title">提示:</h3>
		</div>
		<div class="tips-body">
			<!-- 插槽 slot -->
			<slot></slot>
		</div>
		<div class="tips-footer"></div>
	</div>
</template>

<script>

export default {
	name: 'Tips'
}
</script>
<style>
	
</style>