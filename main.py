from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = "secret-key"

@app.route("/")
def Sign_up():
    return render_template("Sign-up.html")

@app.route("/Sign-in")
def Sign_in():
    return render_template("Sign-in.html")

@app.route("/task")
def taks():
    return render_template("task.html")

if __name__ == "__main__":
    app.run(debug=True)

