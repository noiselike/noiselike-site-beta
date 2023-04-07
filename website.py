from flask import Flask, render_template, request

app = Flask(__name__, template_folder='sites', static_folder='assets')

@app.context_processor
def inject_variables():
    def get_current_route():
        return request.path
    return dict(current_route=get_current_route)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/mint')
def mint():
    return render_template('mint.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/venue')
def venue():
    return render_template('venue.html')

if __name__ == '__main__':
    app.run(debug=True)
