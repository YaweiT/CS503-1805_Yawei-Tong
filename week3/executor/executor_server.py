import json
from flask import Flask
app = Flask(__name__)

from flask import jsonify
from flask import request

import executor_utils as eu

@app.route('/build_and_run', methods=['POST'])
def build_and_run():
	print("Python server received_good")
	# problems here !! data did not get anything
	data = request.get_json()

	print ("Python Server Got %s" % (data))

	if 'code' not in data or 'lang' not in data:
		return 'You should provide "code" and "lang"'

	

	code = data['code']
	lang = data['lang']

	print("executor API got called with code: %s in %s" % (code, lang))

	result = eu.build_and_run(code, lang)

	return jsonify(result)

if __name__ == '__main__':

	import sys
	port = int(sys.argv[1])
	eu.load_image()
	app.run(port = port )