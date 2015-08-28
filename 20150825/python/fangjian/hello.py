import logging
import os
logging.basicConfig(filename = '/var/log/qqfun/log.txt', level = logging.DEBUG)

def hello():
	print 'hello from fangjian.hello'

def echo():
	logging.debug('this is a message')
	return 'echo'