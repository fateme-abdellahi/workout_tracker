From python:3.12-slim

ENV DJANGO_SECRET_KEY=zHAcCtaagdCPi20MYzlrHqtXQyOZw0aUTg_vSlLLJzVescAx86SMrHEUJTEM806IdnzwlTgLQ9Snr2pXkPlpaQ

WORKDIR /backend

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    gettext \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000