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

