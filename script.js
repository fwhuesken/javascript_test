from flask import Flask, render_template, request # Import Flask and RenderTemplate and Request
app = Flask(__name__) #Create an Instance

@app.route('/', methods=['GET', 'POST']) # Route the Function and allow Requests
def main(): # Run the function
	if request.method == 'POST': # Identify Request Method
		value = request.form['input'] # Gather the Post Request
		return value
	if request.method == 'GET': # Identify Request Method
		return render_template('index.html')

app.run(host='0.0.0.0', port=5000, debug=True) # Run the Application (in debug mode)