from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure Gemini API (you'll need to set this up with your own API key)
genai.configure(api_key='AIzaSyCpQY5HzE0CyHIPGFfu-kdWu6BlO8xqbuc')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    
    # Use Gemini API to generate response
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(user_message)
    
    return jsonify({'response': response.text})

if __name__ == '__main__':
    app.run(debug=True)