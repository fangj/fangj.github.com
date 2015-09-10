# overflow:hidden在table上不起作用

###示例：  

	<html><body>
	  <table><tbody><tr>
	   <td style="border: solid green 1px; width:200px; overflow:hidden;">
	    This_is_a_terrible_example_of_thinking_outside_the_box.
	   </td>
	  </tr></tbody></table>
	</body></html>


###解决：

You need to set style with `table-layout:fixed;` along with `overflow:hidden;` `white-space: nowrap;` on the table element.


###参考：
<http://stackoverflow.com/questions/509711/why-does-overflowhidden-not-work-in-a-td>