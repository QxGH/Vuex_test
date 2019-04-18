/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {    // Vuex 存放数据
        currterPage: 2,
        pageCount: 5,
        pageData: [
            {
                'title': "第一页标题",
                'content': '第一页内容：Start',
                'tips': ['tip-1-1','tip-1-2']
            },{
                'title': "第二页标题",
                'content': '第二页内容',
                'tips': ['tip-2-1']
            },{
                'title': "第三页标题",
                'content': '第三页内容',
                'tips': ['tip-3-1','tip-3-2']

            },{
                'title': "第四页标题",
                'content': '第四页内容',
                'tips': ['tip-4-1']
            },{
                'title': "最后一页标题",
                'content': '最后一页内容：End',
                'tips': ['tip-5-1']
            }
        ]
    },
    getters: {  // Vuex 过滤数据的一些方法
        currterPage(state) {
            return state.currterPage;
        }
    },
    mutations: {    // Vuex 同步改变数据方法的集合
        CURRTER_PAGE_UPDATA(state, val) {
            state.currterPage = val;
        },
        CURRTER_PAGE_ADD(state) {
            state.currterPage++;
        },
        CURRTER_PAGE_REDUCE(state) {
            state.currterPage--;
        }
    },
    actions: {  // Vuex 异步改变数据方法的集合，如包含 ajax()、setTimeout()的方法
        
    }
});
 
export default store;