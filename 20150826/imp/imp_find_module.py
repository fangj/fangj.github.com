import imp
from imp_get_suffixes import module_types

print 'Package:'
f, filename, description = imp.find_module('example')
print module_types[description[2]], filename
print

print 'Sub-module:'
f, filename, description = imp.find_module('submodule', [filename])
print module_types[description[2]], filename
if f: f.close()
