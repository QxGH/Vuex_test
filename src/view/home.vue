<template>
	<div class="home" ref="home">
		<div class="main">
			<!-- 进度条组件 -->
			<myProgress></myProgress>
			<div class="view" ref="view" @click="toggle($event)">
				<!-- 容器 -->
				<div class="unit" v-for="(item, index) in pageData" v-show="index == currterPage">
					<!-- Tips组件 -->
					<myTips>
						<div v-for="(tipsItem, tipsIndex) in item.tips" v-show="show_tips_index == tipsIndex">{{tipsItem}}</div>
					</myTips>
					<!-- 内容 -->
					<div class="content">
						<h2 class="title">
							<span class="inline-block animated flipInX">{{currterPage | indexFilter}}. {{item.title}}</span>
						</h2>
						<div class="animated bounceInLeft" v-html="item.content"></div>
						<img class="img" v-if="item.img" :src="item.img" >
						<video v-if="currterPage == pageData.length-1" controls="controls" autoplay width="500" src="http://ykugc.cp31.ott.cibntv.net/67731068B964371B341DA2CEA/03000801005A5363DACB5F514325B374AA7AD2-A907-FA33-56CC-816DF163E3B6.mp4?ccode=0512&duration=344&expire=18000&psid=3c8fad2464932356872cb3403684d677&ups_client_netip=242fa021&ups_ts=1555910098&ups_userid=&utid=gQpEFXWQAzECAXGM%2BBDGfcRL&vid=XMzMwMTYyODMyNA&vkey=A2f5adb185bb3a2c99fbe95bef6159dd7&sp="></video>
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
			show_tips_index: 0,
			logoSrc: require('../assets/img/logo.png')
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
		currterPageUpdata(val) {	// 赋值修改当前页
			this.CURRTER_PAGE_UPDATA(val);
		},
		currterPageNext() {	// 下一页
			let tips_length = this.pageData[this.currterPage].tips.length;	// 获取当前 tips 数量
			if(this.show_tips_index < tips_length-1) {	// 如果还有 tips 则显示下一个 tips
				this.show_tips_index++;
			} else {									// 如果后续没有 tips 则显示下一页 并重置 tips_index
				this.CURRTER_PAGE_ADD();
				this.show_tips_index = 0;	// 重置 tips_index
			}
		},
		currterPagePrev() {	// 上一页
			this.CURRTER_PAGE_REDUCE();
			this.show_tips_index = 0;	// 重置 tips_index
		},
		toggle(e) {	// 点击事件
			// const self = this;
			let pageX = e.pageX;	// 鼠标指针在X轴的位置
			let left = this.$refs.home.offsetLeft - 840/2 + 73; 	// view界面距离浏览器左侧距离; .home width:840px;padding-left:73px;
			let flag = this.$refs.view.offsetWidth / 2;				// view界面中心分割线位置
			if(pageX - left >= flag && this.currterPage < this.pageData.length-1) {	// 判断点击的是左侧还是右侧，并且 currterPage 大于1小于 pageData.length 时才执行
				this.currterPageNext();		//点击右侧，currterPage + 1
			} else if(pageX - left < flag && this.currterPage > 0) {
				this.currterPagePrev();		// 点击左侧，currterPage - 1
			} else {
				this.$message({	// Element-UI 提示框
					message: '已经到尽头了！',
					type: 'warning'
				});
			}
		}
	},
	components: {	// 组件-局部注册
		myTips
  	},
	computed: {	// 计算属性,类似于 methods，定义一些方法，完成各种数据运算并缓存，只要其中任意数据变化，则重新执行运算
		...mapState(['currterPage', 'pageData']),	// mapState 是 Vuex state 的辅助函数，mapState通过扩展运算符(...)将 store.state.currterPage 映射到当前实例的 data，在页面里可以直接使用 {{currterPage}}。
		// ...mapGetters(['onlyOneTip'])				// mapGetters 是 Vuex getters 的辅助函数，也映射到 data
	},
	watch: {	// 观察属性，跟踪实例中特定值的变化，并做出反应
		currterPage(newVal, oldVal){	// 监听vuex数据 currterPage
			localStorage.setItem("currterPage", newVal);	// 设置到本地储存 localStorage
		}
	},
	filters: {	// 过滤器 - 本质是一个有参数，有返回值的方法
		indexFilter(val) {
			return parseFloat(val) + 1;
		}
	}
}
</script>

<style>

</style>
