#pandoc转换markdown为slides

源文件: [habits.txt](pandoc_slides/habits.txt)  

* 生成独立html文件：

		pandoc -t slidy --self-contained habits.txt -o habits.html
输出:[habits.html](pandoc_slides/habits.html)

* 生成有引用的html文件：

	 	pandoc -t revealjs -s habits.txt -o habits_reveal.html
输出:[habits_reveal.html](pandoc_slides/habits_reveal.html)  
需要有reveal.js目录,来自 <https://github.com/hakimel/reveal.js> 



----------
### 参考： 

<http://pandoc.org/README.html#producing-slide-shows-with-pandoc>  

Here’s the markdown source for a simple slide show, `habits.txt`:

    % Habits
    % John Doe
    % March 22, 2005

    # In the morning

    ## Getting up

    - Turn off alarm
    - Get out of bed

    ## Breakfast

    - Eat eggs
    - Drink coffee

    # In the evening

    ## Dinner

    - Eat spaghetti
    - Drink wine

    ------------------

    ![picture of spaghetti](images/spaghetti.jpg)

    ## Going to sleep

    - Get in bed
    - Count sheep

To produce an HTML/javascript slide show, simply type

    pandoc -t FORMAT -s habits.txt -o habits.html

where `FORMAT` is either `s5`, `slidy`, `slideous`, `dzslides`, or
`revealjs`.