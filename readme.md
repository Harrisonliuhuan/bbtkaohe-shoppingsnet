## jquery踩的一个大坑:

一开始引入jQuery的方式是用引用在线jQuery：

![1556863899945](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1556863899945.png)

后来加了一个jOuery的toggle(function(){},function(){},function(){})的函数,就出现了这样的报错：

![1556864304385](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1556864304385.png)

一开始以为会是在线引入jQuery的问题，所以修改了引入jQuery的方式，引用本地的jQuery，还导入了jQuery ui:

![1556864685496](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1556864685496.png)

结果还是没用，最后终于在网上找到解答了，我用的jq版本是3.4.1, 而toggle函数自jq 1.9开始就已经被移除了, 所以你调用toggle方法的时候, 会报方法不存在。

![1556863781695](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1556863781695.png)

所以只能用其他方式来代替toggle函数了。

------

给购物车里动态添加div:形成的div样式难以掌控。

可以尝试采用从jquery的load（）方法。

购物车的写法有点繁琐，可以采用ajax

------

响应式布局时遇到的一个小问题的解决办法（全局css变量）：

使用bootstrap可以简化我们开发的流程和代码，但是虽然bootstrap的代码很方便，也面临着css的样式很单调的情况。我们可以通过覆盖css样式解决。有时候自己覆盖的代码无法改变bootstrap本来的代码。其实这个问题很简单，因为html渲染的时候是自上而下的，后面的样式会覆盖前面的样式。所以如果你的css样式不能覆盖ootstrap的样式，检查一下是不是自己的样式的引入放在了bootstrap的引入前面。正确的是把自己的样式引入放在bootstrap的引入后面。

比如：

```
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="index.css"> 
```

------

js获取当前时间，利用Date对象来实现。首先创建一个表示当前系统时间的Date()对象，然后通过Date对象的getXxx()方法获得当前系统时间的小时、分和秒的值，接下来将获得的这些值组合成一个日期时间字符串，并将日期时间字符串设置成为<div>标签的内容，最后通过window对象的setTimeout()函数每隔1秒调用一个实时显示系统时间的函数

显示当前时间与浏览网站时长的问题：实时时间改变稳定，但是浏览时间在进行了其它click操作之后就会进行跳变。

------

Cannot read property 'innerHTML' of null：#addcostnum的值一直无法读取。



两个待解决还没有完全理解的大坑：

- 关于script中关于DOM部分放在body标签前的问题
- onload：show(),hide()对setInterval()影响



div的位置。