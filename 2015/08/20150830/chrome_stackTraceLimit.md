# 增加chrome Javascript Stack Trace

* 方法一：在JS调用之前执行下句    

	 	Error.stackTraceLimit = 100;
* 方法二：用下句启动chrome  

		$ google-chrome --js-flags="--stack-trace-limit 10000"

### 解决的问题

javascript出错的时候，chrome dev tool里可以看到出错点调用栈（如下）。有时候发现错误的点只是个替罪羊，真正错误的原因在调用它的祖爷爷辈函数。于是就要溯源而上，找到始作俑者。像angular之类的js调用栈很深，可能要往前回溯十几层。但是chrome默认只看10层。那怎么办？就要打开chrome的底线啊。这个底线就是Error.stackTraceLimit。

	ReferenceError: FAIL is not defined
	   at Constraint.execute (deltablue.js:525:2)
	   at Constraint.recalculate (deltablue.js:424:21)
	   at Planner.addPropagate (deltablue.js:701:6)
	   at Constraint.satisfy (deltablue.js:184:15)
	   at Planner.incrementalAdd (deltablue.js:591:21)
	   at Constraint.addConstraint (deltablue.js:162:10)
	   at Constraint.BinaryConstraint (deltablue.js:346:7)
	   at Constraint.EqualityConstraint (deltablue.js:515:38)
	   at chainTest (deltablue.js:807:6)
	   at deltaBlue (deltablue.js:879:2)

### 参考
* <http://stackoverflow.com/questions/9931444/how-to-increase-number-of-call-stack-entries-in-google-chrome-developer-tools-o> 
* <https://code.google.com/p/v8-wiki/wiki/JavaScriptStackTraceApi>