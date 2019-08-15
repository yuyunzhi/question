## 1.1 可继承的样式与不可继承的样式？
- 可继承的样式:font-size font-family color ul li dl dd dt
- 不可继承的样式:border padding margin width height

## 1.2 CSS3新特性
- 圆角 （border-radius:8px）  
- 阴影和反射 （Shadow\Reflect） 
- 文字特效 （text-shadow） 
- 文字渲染 （Text-decoration） 
- 线性渐变 （gradient）
- 旋转 （transform）

## 1.3 创建一个三角形
```
border:10px splid transparent
border-left-color:red
```

## 1.4为什么要初始化CSS样式
- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

## 1.5 清除浮动方式
```
overflow: hidden （方方反对）
.clearfix 清除浮动写在爸爸身上 
.clearfix::after{
     content: ''; display: block; clear:both;
}
.clearfix{
     zoom: 1; /* IE 兼容 */
}
```

## 1.6 :before 和 ::before 区别?
- 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
- 对于CSS2之前已有的伪元素，比如:before，单冒号和双冒号的写法::before作用是一样的

## 1.7 animation对应的属性
- 写法：animation: name duration timing-function delay iteration-count direction; 

- 下面是对应的属性的介绍 
    animation-name 规定需要绑定到选择器的 keyframe 名称。
    animation-duration 规定完成动画所花费的时间，以秒或毫秒计。 
    animation-timing-function 规定动画的速度曲线。 
    animation-delay 规定在动画开始之前的延迟。 
    animation-iteration-count 规定动画应该播放的次数。 
    animation-direction 规定是否应该轮流反向播放动画。

## 1.8 BFC 是什么？
- 举例：overflow:hidden 清除浮动。
- overflow:hidden 取消父子 margin 合并。http://jsbin.com/conulod/1/edit?html,css,js,output （方方用 padding-top: 1px;）

## 1.9 如何居中？
- 水平居中：
    - 内联：爸爸身上写 text-align:center;
    - 块级：margin-left: auto; margin-right: auto;
- 垂直居中： 
    - position:absolute;top:50%，transiform:translateY(-50%)
- flex
- 如果没写高度，直接写上下padding值进行居中

## 1.10 选择器优先级
- 选择器越具体，优先级越高。 #xxx 大于 .yyy
- 同样优先级，写在后面的覆盖前面的。
- color: red !important; 优先级最高。

## 1.11 说说盒模型。举例：
- content-box: width == 内容区宽度
- border-box: width == 内容区宽度 + padding 宽度 + border 宽度
