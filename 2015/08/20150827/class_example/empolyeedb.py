import logging
import os
logging.basicConfig(filename = os.path.join(os.getcwd(), 'log.txt'), level = logging.DEBUG)

class EmployeeDB:
	def hello(self):
		print "hello"
		logging.debug('say hello')