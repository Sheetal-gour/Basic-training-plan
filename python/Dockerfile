FROM python:3.8-alpine
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV DATABASE_URI=postgresql://postgres:sheetal@172.17.0.2/postgres
CMD ["flask", "run", "--host=0.0.0.0"]
