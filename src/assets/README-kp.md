# Key Phrases Extraction demo

It employs CoreNLP to extract key phrases from a document.

Documentation:
https://docs.google.com/document/d/1k5__aibZiNpeokfnANN7zS5fubzylLiYq8x8Ieyw59U/edit#


Repository: [here](http://192.168.1.29:3000/omar/vgdocdemo)

Demo: http://192.168.1.29/kp/

API Specification: [here](http://192.168.1.29/api/kp)

## Getting Started
It uses Docker Compose to setup multiple services:

| Services         	| Usage                         	|
|------------------	|-------------------------------	|
| Flask + Gunicorn 	| Application main body         	|
| NginX            	| Serve static files            	|
| MongoDB          	| Cache previous results 	|
| Redis          	| Temporary storing tasks 	|

To start the demo:
```
$ docker-compose up --build
```

Open browser and navigate to: [http://localhost:8080/](http://localhost:8080/)


=====

### Docker Explained: Using Dockerfiles to Automate Building of Images
https://docs.docker.com/engine/reference/builder/#copybuilding-of-images

docker build -t test/myapp .

### Ubuntu 16.04 + Python 3.6
https://gist.github.com/monkut/c4c07059444fd06f3f8661e13ccac619

### Docker + Flask /w Gunicorn
http://www.patricksoftwareblog.com/how-to-use-docker-and-docker-compose-to-create-a-flask-application/
*** https://gitlab.com/patkennedy79/flask_recipe_app/tree/master

### nginx-gunicorn-flask
https://github.com/danriti/nginx-gunicorn-flask/blob/master/Dockerfile

### Python subprocess
*** https://www.pythonforbeginners.com/os/subprocess-for-system-administrators








