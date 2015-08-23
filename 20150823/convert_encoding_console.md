# 命令行转换文件编码

转换：

	iconv -f UTF-8 -t ISO-8859-15 in.txt > out.txt


	-f ENCODING  the encoding of the input
	-t ENCODING  the encoding of the output

原文转换:

	recode UTF8..ISO-8859-15 in.txt


参考：

http://stackoverflow.com/questions/2722477/charset-conversion-from-xxx-to-utf-8-command-line
http://stackoverflow.com/questions/64860/best-way-to-convert-text-files-between-character-sets

