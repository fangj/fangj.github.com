import logging
import os
logging.basicConfig(filename = os.path.join(os.getcwd(), 'log.txt'), level = logging.DEBUG)

# >>> from empolyeedb import EmployeeDB
# >>> x=EmployeeDB()
# init
# >>> x.hello()
# hello
# >>> x.hello()
# hello
# >>> quit()
# $ cat log.txt 
# DEBUG:root:init
# DEBUG:root:say hello
# DEBUG:root:say hello

class EmployeeDB:
	def __init__(self):
		print "init"
		logging.debug('init')

	def hello(self):
		print "hello"
		logging.debug('say hello')