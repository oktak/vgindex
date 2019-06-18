# Part-of-Speech-Tagging-web-app

  

A simple interface for using NLTK or spaCy's pre-trained POS tagger combined with Jieba to tag and display plain texts can be in either English, Chinese or a mixture of both.

  

## Setup

  

To run the server, set up virtual environment with the requirements from requirements.txt.

  

Then also download the spaCy model.

```

python -m spacy download en_core_web_sm

```

If you need to use the nltk tagger (currently disabled) also download their data:

```

import nltk

nltk.download()

```

In case there are no SQLite3 database file in the instance folder, initialize the database with the command:

```

flask init-db

```

You may also build a docker image for the server using the provided DOCKERFILE

  

### Redis

The server uses Redis (with RQ) to manage background text processing tasks. To for this to work, install and run the server in localhost with the default port (6379). If no Redis server is running, text processing still works but will be slower.

  

## Running the server

### Basic

You may either use  **run_server.bat** or **run_server.sh** after entering your virtual environment. The server will be hosted on port 5000.

### GUnicorn

You may also use wsgi.py with GUnicorn to start the server using the following command.
The server will be hosted on port 8001.
```

gunicorn -w 8 -b :8001 wsgi:app

```
### Background Workers
To utilize the background workers, make sure that a Redis server is running, by default, the worker will attempt to connect to `redis://redis:6379` if you are hosting the redis server on localhost (or other location), please edit it to `redis://` (or other location) in the **instance/config.py** file

Afterwards, start a worker which will preload the processing pipeline and model, in order to perform the text processing. 

```
flask run-worker

```

you may also run `supervisord -n` at the base directory to start multiple workers at once (default = 3)


If no Redis server is running, text processing still works, but will be slower.
  

### Docker-compose

To directly start the whole server arrangement using docker, you may directly use `docker-compose up` on the base directory. The server will be hosted on port 8001.

the **docker-compose.yaml** file provided are for independent running of the pos tagger web app. To integrate this into the full demo, you may need to copy some of it into the full docker-compose.yaml.  I am unable to test the full setup as of yet.
