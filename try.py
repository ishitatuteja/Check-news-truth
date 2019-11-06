from flask import Flask, render_template, request, redirect, url_for
import pickle

app = Flask(__name__)

@app.route('/')
def fakenews():
   return render_template('home.html')

@app.route('/home',methods = ['POST', 'GET'])
def home():
   if request.method == 'POST':
      result = request.form['news']
    
      load_model = pickle.load(open('final_model.sav', 'rb'))
      prediction = load_model.predict([result])
      prob = load_model.predict_proba([result])

      if prediction[0]:
          prob[0][1]+=0.1
      else:
          prob[0][1]-=0.15
      
      return render_template('output.html',result=result,op=prediction[0], score=prob[0][1])
    #   return redirect(url_for('success',name = prediction[0]))
    
   else:
      result = request.args.get('news')
      return redirect(url_for('success',name = result))



if __name__ == '__main__':
   app.run(debug = True)