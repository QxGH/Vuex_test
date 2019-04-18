<template>
	<div class="home" ref="home">
		<div class="main">
			<!-- 进度条组件 -->
			<myProgress></myProgress>
			<div class="view" ref="view" @click="jump">
				<!-- 容器 -->
				<div class="unit" v-for="(item, index) in pageData" v-show="index+1 == currterPage">
					<!-- Tips组件 -->
					<myTips>
						<h3 v-for="(tipsItem, tipsIndex) in item.tips">
							{{tipsItem}}	 
						</h3>
					</myTips>
					<div >
						<h2>{{item.title}}</h2>
						<p>{{item.content}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* 组件引入 */
import myTips from '@/components/Tips';
/* Vuex 辅助函数 */
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
	name: 'Home',
	data () {
		return {
			
		}
	},
	created () {	// 实例创建完成，DOM还未生成时执行
		if(localStorage.currterPage) {					// 判断是否有本地储存 localStorage
			this.currterPageUpdata(localStorage.currterPage);	// 有，则将本地存储的值赋值给 Vuex
			console.log(`localStorage.currterPage: ${localStorage.currterPage}`)
		} else {
			localStorage.setItem("currterPage", this.$store.state.currterPage);	// 没有，则添加本地储存
		};
	},
	methods: {	// function
		// mapMutations 是 Vuex mutations 的辅助函数, mapMutations 通过扩展运算符 ... 将 $store.commit 映射到 methods,可以在当前实例中调用
		...mapMutations(['CURRTER_PAGE_UPDATA', 'CURRTER_PAGE_ADD', "CURRTER_PAGE_REDUCE"]),	
		currterPageUpdata(val) {
			this.CURRTER_PAGE_UPDATA(val);
		},
		currterPageAdd() {
			this.CURRTER_PAGE_ADD();
		},
		currterPageReduce() {
			this.CURRTER_PAGE_REDUCE();
		},
		jump(e) {	// 点击事件
			// var self = this;
			let pageX = e.pageX;	// 鼠标指针在X轴的位置
			let left = this.$refs.home.offsetLeft - 840/2 + 73; 	// view界面距离浏览器左侧距离
			let flag = this.$refs.view.offsetWidth / 2;				// view界面中心分割线位置
			if(pageX - left >= flag && this.currterPage < this.pageCount) {	// 判断点击的是左侧还是右侧，并且 currterPage 大于1小于 pageCount 时才执行
				this.currterPageAdd();		//点击右侧，currterPage + 1
			} else if(pageX - left < flag && this.currterPage > 1) {
				this.currterPageReduce();		// 点击左侧，currterPage - 1
			} else {
				this.$message({
					message: '到尽头了！',
					type: 'warning'
				});
			}
		}
	},
	components: {	// 组件-局部注册
		myTips
  	},
	computed: {	// 计算属性,类似于 methods，定义一些方法，完成各种数据运算并缓存，只要其中任意数据变化，则重新执行运算
		...mapState(['currterPage', 'pageCount', 'pageData'])	// mapState 是 Vuex state 的辅助函数，mapState通过扩展运算符(...)将 store.state.currterPage 映射到当前实例的 data，在页面里可以直接使用 {{currterPage}}。
	},
	watch: {	// 观察属性，跟踪实例中特定值的变化，并做出反应
		currterPage(newVal, oldVal){	// 监听vuex数据 currterPage
			localStorage.setItem("currterPage", newVal);	// 设置到本地储存 localStorage
		}
	}
}
</script>

<style>

</style>
