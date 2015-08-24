# 把七牛作为静态服务器

* 去七牛上开一个bucket
* 写一个 [conf.json](../qiniu/conf.json) 文件

		{
		    "src":          "/home/your/gitbook_dir/_book",
		    "dest":         "qiniu:access_key=<AccessKey>&secret_key=<SecretKey>&bucket=<Bucket>",
		    "debug_level":  1
		}
* 下载 [qrsync](http://developer.qiniu.com/docs/v6/tools/qrsync.html) 
* 把文件同步到服务器 `./qrsync conf.json`
* 可以访问了，如 http://7xlabe.com1.z0.glb.clouddn.com/index.html 
* 开启 七牛后台->基本设置->IndexPage ，可以这么访问了 http://7xlabe.com1.z0.glb.clouddn.com
* 开启 七牛后台->域名设置->独立域名。 待审核：http://fangjian.treenote.net