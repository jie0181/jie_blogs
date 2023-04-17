---
title: 学习前端计划🔥
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 3
---

## JavaScript

# Map和Set的区别，Map和Object的区别map的定义：Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者原始值）都可以作为一个键或一个值。
map使用：
let defaultMap = new Map([['name', '张三'], ['age', 20]]);
set的定义：Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
set使用：defaultSet = new Set(['张三', 12, true]);
set  数组去重
let arr = [1, 2, 3, 4, 5, 6, 3, 2, 5, 3, 2];
console.log([...new Set(arr)]); // [1, 2, 3, 4, 5, 6]

# map和set的区别：

Map对象初始化的值为一个二维数组，Set对象初始化的值为一维数组。
Map对象和Set对象都不允许键重复（可以将Set对象的键想象成值）。

# map和object的区别：

Map 对象存储的数据是有序的，而我们平常使用的对象是无序的，所以通常当我们需要使用对象形式            （键值对）存储数据且需要有序时，采用 Map 对象进行存储。
Object的键是string、number和Symbol，而 Map 可以是任何值，包括函数、对象和任何原始值

# 相关链接：

- <a href="https://juejin.cn/post/7104828155340750885">一文搞懂Map与Set的用法和区别！</a> 
<br/>
- <a href="https://juejin.cn/post/7064479924757168165">js 中 Map 和 Set 的用法以及区别！</a> 

# 数组的filter、every、flat的作用是什么
```js 
filter 会过滤掉数组中不满足条件的元素, 把满足条件的元素放到一个新数组中, 不改变原数组

let array = [1, 2, 3, 4];
let temp = array.filter((item, index, array) => {
  return item >  3;
});
console.log(temp);　　// [4]
console.log(array);　　// [1, 2, 3, 4]

every遍历数组, 每一项都是true, 则返回true, 只要有一个是false, 就返回false

let array = [1, 2, 3, 4];
let bo = array.every((item, index, array) => {
  return item > 2;
});
console.log(bo);　　　　// false;


flat 用于将多维数组拉平（扁平化），不影响原数组，返回新的数组

[1, 2, [3, [4]]].flat(2) // [1, 2, 3, 4]
[1, 2, [3, [4]]].flat(0) // [1, 2, [3, [4]]]
[1, 2, [3, [4]]].flat(Infinity) // [1, 2, 3, 4]

forEach：遍历数组  不会返回一个新的数组   和for循环类似  就是简化了写法
let array = [1, 2, 3, 4];
array.forEach((item, index, array) => {
    console.log(item)
});
依次返回1 2 3 4 5

map通过指定函数处理数组的每个元素，并返回处理后新的数组，map 不会改变原始数组。
forEach和map的区别在于，forEach没有返回值。map需要返回值，如果不给return，默认返回undefined

let array = [1, 2, 3, 4];
let temp = array.map((item, index, array) => {
  return item*2;
});
console.log(temp);　　// [2,4,6,8]
console.log(array);　　// [1, 2, 3, 4]
```

# es6有哪些新特性 或者 常用的es6属性

- <a href="https://link.juejin.cn?target=http%3A%2F%2Fwww.alloyteam.com%2F2016%2F03%2Fes6-front-end-developers-will-have-to-know-the-top-ten-properties%2F">前端开发者不得不知的 ES6 十大特性</a> 

- <a href="https://juejin.cn/post/6844903959283367950">1.5万字概括ES6全部特性(已更新ES2020)</a> 

-  <a href="https://juejin.cn/post/6844903959283367950">ES6、ES7、ES8、ES9、ES10新特性一览</a> 

-  <a href="https://juejin.cn/post/6844903811622912014">近一万字的ES6语法知识点补充</a> 

-  <a href="https://juejin.cn/post/6844903679976275976">ES6、ES7、ES8特性一锅炖(ES6、ES7、ES8学习指南)</a> 


# 说一下对Promise的了解

-  <a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000013396601"> Promise实现原理</a>
- <a href="https://juejin.cn/post/7033395086696136711">你说你会Promise？那你解决一下项目中的这五个难题？</a>
- <a href="https://juejin.cn/post/6945319439772434469#comment">从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节</a>
- <a href="https://juejin.cn/post/6844904077537574919">【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理)</a>
- <a href="https://juejin.cn/post/6844903625609707534"> 面试精选之Promise</a>


# Promise的all和race有什么区别

- <a href="https://juejin.cn/post/6998891444312211492"> Promise.all和promise.race的应用场景举例</a>
- <a href="https://juejin.cn/post/6844904087767482381"> 必考：Promise、Promise.all、Promise.race 分别怎么用？</a>
- <a href="https://juejin.cn/post/6844903912592375821"> Promise 中的三兄弟 .all(), .race(), .allSettled()</a>


# 箭头函数和普通函数的区别

- <a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000021380336">箭头函数和普通函数的区别</a>
- <a href="https://juejin.cn/post/7069943937577779214">2022年了你还不了解箭头函数与普通函数的区别吗？</a>
- <a href="https://juejin.cn/post/6844903805960585224">ES6 - 箭头函数、箭头函数与普通函数的区别</a>

# <h3>let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？</h3>

- <a href="https://juejin.cn/post/6844903752139276301">var和let/const的区别</a>
- <a href="https://juejin.cn/post/6844903752139276301">面试官：说说 var、let、const 的区别</a>
- <a href="https://blog.csdn.net/Liberty_yes/article/details/125486505">js如何使对象的属性不能被修改？const+Object.ferrze()</a>


# 堆和栈的区别
- <a href="https://blog.csdn.net/K346K346/article/details/80849966/">一文读懂堆与栈的区别</a>
- <a href="https://blog.csdn.net/TABE_/article/details/124024426">堆和栈的区别</a>
- <a href="https://blog.csdn.net/ljlinjiu/article/details/89396774">堆和栈的区别详解</a>


# 闭包的原理
- <a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000039042550">我将【闭包】讲给你听！</a>
- <a href="https://juejin.cn/post/6844903858636849159">我从来不理解JavaScript闭包，直到有人这样向我解释它</a>
- <a href="https://juejin.cn/post/6844903815041253390">为了前端的深度-闭包概念与应用</a>
- <a href="https://juejin.cn/post/6937469222251560990">JS 闭包经典使用场景和含闭包必刷题</a>
- <a href="https://juejin.cn/post/7088216038063472670">我从来不理解闭包，直到我要去面试</a>


# instanceof的实现原理

- <a href= "https://juejin.cn/post/6844903613584654344">浅谈 instanceof 和 typeof 的实现原理</a>
- <a href= "https://juejin.cn/post/7006100899265249311">菜鸟也能搞懂的typeof 与 instanceof 区别</a>
- <a href= "https://juejin.cn/post/7075852383250546718">被要求实现instanceof，面试官到底在考我什么？</a>
- <a href= "https://juejin.cn/post/6844903664214081543">【前端面试】instanceof原理</a>
- <a href= "https://juejin.cn/post/7071579684093296676">面试官：说说 typeof 和 instanceof 的区别</a>

# new的实现原理
- <a href="https://juejin.cn/post/6844903613584654344">浅谈 instanceof 和 typeof 的实现原理</a>
- <a href="https://juejin.cn/post/6844903704663949325">面试官问：能否模拟实现JS的new操作符</a>
- <a href="https://juejin.cn/post/6844903782803832845"># call,apply,bind,new实现原理</a>

# 数据类型有哪些？
- <a href="https://juejin.cn/post/6844903870712283149">经常被面试官问道的JavaScript数据类型知识你真的懂吗？</a>
- <a href="https://juejin.cn/post/6844903752332214280">玩转 JavaScript 之数据类型</a>


# 如何判断一个数据是否是数组

- <a href="https://juejin.cn/post/6844903710766661640">判断是否是数组的几种方法</a>
- <a href="https://juejin.cn/post/6999276491276025893">判断是否为数组的 JavaScript 方法总结</a>


# JQuery实现链式调用的原理是什么

- <a href="https://juejin.cn/post/6999276491276025893">jQuery的链式调用</a>
- <a href="https://blog.csdn.net/zhangyizuishuai/article/details/109460701">jQuery链式调用的原理</a>


# 分别介绍一下原型、原型链的含义和使用场景

- <a href="https://juejin.cn/post/6844903604575272974">用小猪佩奇说明Javascript的原型和原型链</a>
- <a href="https://juejin.cn/post/6914827188025950216">通俗易懂的理解Javacsript原型和原型链</a>
- <a href="https://juejin.cn/post/6844903837623386126">用自己的方式（图）理解constructor、prototype、__proto__和原型链</a>
- <a href="https://juejin.cn/post/6844903924307230727">JS基础-函数、对象和原型、原型链的关系</a>
- <a href="https://juejin.cn/post/6934498361475072014">面不面试的，你都得懂原型和原型链</a>


# 分别介绍一下作用域、作用域链的含义和使用场景

- <a href="https://juejin.cn/post/6844903875456008199">深入理解 JavaScript, 从作用域与作用域链开始</a>
- <a href="https://juejin.cn/post/6844903797135769614">深入理解JavaScript作用域和作用域链</a>


## CSS

# css和js两种方式实现div右移1000px动画

- <a href="https://blog.csdn.net/weixin_39166851/article/details/121102229">CSS相关知识1</a>
- <a href="https://blog.csdn.net/weixin_39166851/article/details/121102229">CSS相关知识2</a>

# visibility、display、opacity的区别

- <a href="https://juejin.cn/post/7124933763959619620">display、visibility、opacity三种隐藏元素的区别</a>
- <a href="https://juejin.cn/post/6844904200401502215">display:none visibility:hidden opacity:0 区别</a>


# 单行截断css

- <a href="https://juejin.cn/post/6844903988081475591">可能是最全的 “文本溢出截断省略” 方案合集</a>

# flex布局

- <a href="https://juejin.cn/post/7063823914136256543">为什么要使用flex布局?</a>
- <a href="https://juejin.cn/post/7117073020237119502">你不能只会flex居中布局，精制动画讲解所有flex布局方式！通俗易懂纯干货教程！</a>
- <a href="https://juejin.cn/post/7033420158685151262">原来flex布局还能那么细？</a>

# flex：1

- <a href="https://juejin.cn/post/6967177565458923557">flex: 1 flex: auto flex: none flex: 0到底有什么 区别 ？使用场景？</a>
- <a href="https://juejin.cn/post/7061196914741477383">一文搞懂flex:0,1,auto,none</a>
- <a href="https://juejin.cn/post/7061196914741477383">flex:1什么意思</a>


# transition、transform、translate的区别

- <a href="https://juejin.cn/post/6844903615920898056">CSS动画：animation、transition、transform、translate傻傻分不清</a>
- <a href="https://juejin.cn/post/6844903478284779533">transform，transition，animation的混合使用——进阶</a>


# 如何画一条 0.5px 的边框

- <a href="https://juejin.cn/post/7118029219698835470">如何实现字体小于 12px 以及边框 0.5 px？</a>
- <a href="https://juejin.cn/post/6844903582370643975">怎么画一条0.5px的边（更新）</a>


# 说一下BFC

- <a href="https://juejin.cn/post/6950082193632788493">面试官：请说说什么是BFC？大白话讲清楚</a>
- <a href="https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2FDFF1993%2Farticle%2Fdetails%2F80394150">浅析BFC原理及作用</a>


# CSS垂直居中的方案

- <a href="https://juejin.cn/post/6844903679242305544">CSS实现水平垂直居中的10种方式</a>
- <a href="https://juejin.cn/post/6844903799446831117">一起搞懂 CSS 水平居中与垂直居中的16个方法</a>


# 伪元素和伪类的区别

- <a href="https://link.juejin.cn?target=http%3A%2F%2Fwww.alloyteam.com%2F2016%2F05%2Fsummary-of-pseudo-classes-and-pseudo-elements%2F">总结伪类与伪元素 | AlloyTeam</a>
- <a href="https://juejin.cn/post/6844903810951806989">伪类与伪元素的区别</a>

# position的几个属性和含义

- <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fcssref%2Fpr-class-position.html">CSS position 属性</a>
- <a href="https://blog.csdn.net/weixin_48956280/article/details/118674763">position的几个属性</a>

# 说一下盒模型

- <a href="https://blog.csdn.net/langmanboy/article/details/124022601">盒模型详解</a>
- <a href="https://blog.csdn.net/wenqianqian1/article/details/104463813">什么是盒模型</a>

# 响应式布局方案

- <a href="https://juejin.cn/post/6844903814332432397">前端响应式布局原理与方案（详细版）</a>
- <a href="https://blog.csdn.net/m0_66051368/article/details/124137136">响应式布局的实现方式（5种）</a>
- <a href="https://juejin.cn/post/6844903630655471624">响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）</a>


# 三栏式布局方案

- <a href="https://juejin.cn/post/7002049748295221285">面试官：三栏布局你会几种？</a>
- <a href="https://juejin.cn/post/7099326366516477966">实现css两栏布局、右侧自适应、三栏布局中间自适应</a>

# 如何提高动画的渲染性能

- <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.w3cplus.com%2Fanimation%2Fgpu-animation-doing-it-right.html">这样使用GPU动画</a>
- <a href="https://juejin.cn/post/6844903702172532744">CSS动画的性能分析和浏览器GPU加速</a>
- <a href="https://juejin.cn/post/6844904165462769678"># 深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调（动图演示）</a>
