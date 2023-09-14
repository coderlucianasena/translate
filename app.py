from flask import Flask, render_template, request, jsonify
from translate import Translator

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['GET'])
def translate():
    text = request.args.get('text', '')
    
    # Realize a tradução usando a biblioteca "Translate" para Python
    try:
        translator = Translator(to_lang='en')  # Traduzir para o inglês neste exemplo
        translation = translator.translate(text)
        return jsonify({"translatedText": translation})
    except Exception as e:
        print("Erro na tradução:", str(e))
        return jsonify({"error": "Ocorreu um erro na tradução."})

if __name__ == '__main__':
    app.run(debug=True)
