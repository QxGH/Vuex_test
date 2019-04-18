/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {    // Vuex 存放全局数据
        currterPage: 0,
        pageData: [
            {
                'title': 'Vue.js 起步',
                'content': `<p>Vue (读音 /vjuː/，类似于 <strong>view</strong>) 是一套用于构建用户界面的<strong>渐进式框架</strong>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<a href="javascript:;">现代化的工具链</a>以及各种<a href="javascript:;" target="_blank" rel="noopener">支持类库</a>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p><p>如果你想在深入学习Vue之前对它有更多了解，我们<a id="modal-player"href="javascript:;">制作了一个视频</a>，带您了解其核心概念和一个示例工程。</p><p>如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看<a href="javascript:;">对比其它框架</a>。</p>`,
                'tips': [
                    '官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。'
                ]
            },{
                'title': '声明式渲染',
                'content': `<p>我们已经成功创建了第一个Vue应用！看起来这跟渲染一个字符串模板非常类似，但是Vue在背后做了大量工作。现在数据和DOM已经被建立了关联，所有东西都是<strong>响应式的</strong>。我们要怎么确认呢？打开你的浏览器的JavaScript控制台(就在这个页面打开)，并修改<code>app.message</code>的值，你将看到上例相应地更新。</p><p>这里我们遇到了一点新东西。你看到的<code>v-bind</code>特性被称为<strong>指令</strong>。指令带有前缀<code>v-</code>，以表示它们是Vue提供的特殊特性。可能你已经猜到了，它们会在渲染的DOM上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的<code>title</code>特性和Vue实例的<code>message</code>属性保持一致”。</p><p>如果你再次打开浏览器的JavaScript控制台，输入<code>app2.message='新消息'</code>，就会再一次看到这个绑定了<code>title</code>特性的HTML已经进行了更新。</p>`,
                'tips': [
                    '声明式渲染 ： 我们只需要告诉程序我们想要什么效果，其他的交给程序来做。',
                    '命令式渲染 ： 命令我们的程序去做什么，程序就会跟着你的命令去一步一步执行。'
                ]
            },{
                'title': '条件与循环',
                'content': `<p>控制切换一个元素是否显示也相当简单：</p><p>继续在控制台输入 <code>app3.seen = false</code>，你会发现之前显示的消息消失了。</p><p>这个例子演示了我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM <strong>结构</strong>。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用<a href="transitions.html">过渡效果</a>。</p><p>还有其它很多指令，每个都有特殊的功能。例如，<code>v-for</code> 指令可以绑定数组的数据来渲染一个项目列表</p>`,
                'tips': [
                    'v-else-if 在 2.1.0 新增，顾名思义，用作 v-if 的 else-if 块。可以链式的多次使用',
                    'v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。'
                ]

            },{
                'title': '处理用户输入',
                'content': `<p>为了让用户和你的应用进行交互，我们可以用 <code>v-on</code> 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法：</p><p>注意在 <code>reverseMessage</code> 方法中，我们更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。</p><p>Vue 还提供了 <code>v-model</code> 指令，它能轻松实现表单输入和应用状态之间的双向绑定。</p>`,
                'tips': [
                    'Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。',
                    'Vue.js通过由点(.)表示的指令后缀来调用修饰符，如：<a v-on:click.stop="doThis"></a>;（阻止单击事件冒泡）',
                    'Vue 允许为 v-on 在监听键盘事件时添加按键修饰符，如：<input v-on:keyup.13="submit">;',
                ]
            },{
                'title': '组件化应用构建',
                'content': `<p>组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：</p><p>在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。在 Vue 中注册组件很简单：</p><p>但是这样会为每个待办项渲染同样的文本，这看起来并不炫酷。我们应该能从父作用域将数据传到子组件才对。让我们来修改一下组件的定义，使之能够接受一个 <a href="javascript:void(0);">prop</a>：</p><p>尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。我们现在可以进一步改进 <code>&lt;todo-item&gt;</code> 组件，提供更为复杂的模板和逻辑，而不会影响到父单元。</p>`,
                'tips': [
                    '组件（Component）是 Vue.js 最强大的功能之一。',
                    '组件可以扩展 HTML 元素，封装可重用的代码。',
                    '组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树。',
                ]
            },{
                'title': "Vue Devtools",
                'content': `<p>在使用 Vue 时，我们推荐在你的浏览器上安装 <a href="javascript:;" target="_blank" rel="noopener">Vue Devtools</a>。它允许你在一个更友好的界面中审查和调试 Vue 应用。</p>`,
                'tips': [
                    '在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!'
                ]
            }
        ]
    },
    getters: {  // Vuex 过滤数据的一些方法
        
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