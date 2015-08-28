#!/usr/bin/python
# -*- coding: UTF-8 -*-

#mysql> create database testdb;
#mysql> CREATE USER 'spiderman'@'localhost' IDENTIFIED BY 'spiderman';
#mysql> grant all privileges on testdb.* to spiderman@localhost;

import mysql.connector as MySQLdb

# 打开数据库连接
db = MySQLdb.connect(user="spiderman", password="spiderman",database='testdb',
	host="localhost", port=3306, autocommit=True )


def create_table(cursor):
    cursor.execute('''CREATE TABLE IF NOT EXISTS `employee`(
        `FIRST_NAME` varchar(64) PRIMARY KEY,
        `LAST_NAME` varchar(1024),
        `AGE` int(16),
        `SEX` char(4),
        `INCOME` int(16)
        ) ENGINE=InnoDB CHARSET=utf8''' )

# 使用cursor()方法获取操作游标 
cursor = db.cursor()
# SQL 插入语句
sql = """INSERT INTO EMPLOYEE(FIRST_NAME,
         LAST_NAME, AGE, SEX, INCOME)
         VALUES ('Mac', 'Mohan', 20, 'M', 2000)"""
try:
   create_table(cursor)
   # 执行sql语句
   cursor.execute(sql)
   # 提交到数据库执行
   db.commit()
except  Exception as e:
   print e
   # Rollback in case there is any error
   db.rollback()

# 关闭数据库连接
db.close()

#-----result
# $ mysql testdb -uspiderman -pspiderman
# mysql> show tables;
# +------------------+
# | Tables_in_testdb |
# +------------------+
# | employee         |
# +------------------+
# 1 row in set (0.00 sec)

# mysql> select * from employee;
# +------------+-----------+------+------+--------+
# | FIRST_NAME | LAST_NAME | AGE  | SEX  | INCOME |
# +------------+-----------+------+------+--------+
# | Mac        | Mohan     |   20 | M    |   2000 |
# +------------+-----------+------+------+--------+
# 1 row in set (0.00 sec)