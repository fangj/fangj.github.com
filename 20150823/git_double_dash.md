# git命令中的`--`是什么意思？

看到个命令 `git checkout -- files`

不知道`--`代表什么。查了一下，`--`是linux的东西，用来标志命令项的结束。有点escape的意思。

举例：

	git checkout master
上面这条命令中，master可能是一个分支也可能是一个文件.优先会作为分支来理解。如果想取出一个和分支同名的文件，就必须用下面的形式：

	git checkout -- master


### 参考：

http://marklodato.github.io/visual-git-guide/index-zh-cn.html  
http://stackoverflow.com/questions/13321458/meaning-of-git-checkout-double-dashes  
http://unix.stackexchange.com/questions/11376/what-does-double-dash-mean-also-known-as-bare-double-dash
[Git简明手册](../extra/git/Git简明手册.pdf)