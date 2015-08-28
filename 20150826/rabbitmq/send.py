#coding=utf-8
import pika

connection = pika.BlockingConnection(
	pika.ConnectionParameters('localhost')) #建立连接
channel = connection.channel()	#建立通道
channel.queue_declare(queue='hello') #声明队列(不确定队列是否存在时可重复调用)
channel.basic_publish(exchange='',
                      routing_key='hello',
                      body='Hello World!') #发布消息
print " [x] Sent 'Hello World!'"
connection.close() #关闭连接