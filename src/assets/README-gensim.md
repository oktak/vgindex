# Gensim demo

A simple interface for using Gensim to build dictionary and analyze document using TF-IDF, LSI model.

Repository: [here](http://192.168.1.29:3000/omar/docker_gensim)

API Specification: [here](http://192.168.1.29/api/gensim)

## Getting Started
It uses Docker Compose to setup multiple services:

| Services         	| Usage                         	|
|------------------	|-------------------------------	|
| Flask + Gunicorn 	| Application main body         	|
| NginX            	| Serve static files            	|
| MongoDB          	| Record dictionary information 	|

To start the demo:
```
$ docker-compose up --build
```

Open browser and navigate to: [http://localhost:8080/](http://localhost:8080/)

# Features

## Elementary Tools
- generate corpous(Bag-of-word)
- generate TF-TDF
- generate LSI
- (WIP) generate similarity

## Build dictionary
Manage dictionary binary

- Dictionary Mangement
    - Create new dictionary
    - Add new document to dictionary by upload file
    - by plain text

## Uses of result
Query a "word phrase", get some idea
- (WIP) search by concept (from out "all Passages"), not only meaning of a word
- (WIP) similarity matrix
