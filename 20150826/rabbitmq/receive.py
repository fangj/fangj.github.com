#coding=utf-8
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(
        host='localhost')) #建立连接
channel = connection.channel() #建立通道
channel.queue_declare(queue='hello') #声明队列(不确定队列是否存在时可重复调用)
print ' [*] Waiting for messages. To exit press CTRL+C'
def callback(ch, method, properties, body):
    print " [x] Received %r" % (body,) #定义回调
channel.basic_consume(callback,
                      queue='hello',
                      no_ack=True) #准备接受消息
channel.start_consuming() #开始接受消息
