<template>
	<div class="progress-bar">
		<el-progress :text-inside="true" :stroke-width="12" :percentage="percentage"></el-progress>
	</div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from "vuex";

export default {
	name: 'Progress',
	data() {
		return {
			percentage: 0
		}
	},
	created() {
		this.percentage = (parseFloat(this.currterPage)-1) / (this.pageCount-1) *100;	// 进度百分比 - 从 0% 开始
	},
	computed: {	// 计算属性,类似于 methods，定义一些方法，完成各种数据运算并缓存，只要其中任意数据变化，则重新执行运算
		...mapState(['currterPage', 'pageCount'])	// mapState 是 Vuex state 的辅助函数，mapState通过扩展运算符(...)将 store.state.currterPage 映射到 this.currterPage，this指向的是当前 Vue 实例；在页面里可以直接使用 {{currterPage}}。
	},
	watch: {	// 观察属性，跟踪实例中特定值的变化，并做出反应
		currterPage(newVal, oldVal){	// 监听vuex数据 currterPage
			this.percentage = (newVal - 1) / (this.pageCount-1) *100
		}
	}
}
</script>

<!-- 当一个style标签拥有 scoped 属性时，它的 CSS 样式就只能作用于当前的组件 -->
<style scoped>
	.progress-bar {
		font-size: 0;
	}
	.el-progress-bar__innerText {
		vertical-align: top;
		font-size: 12px;
	}
</style>