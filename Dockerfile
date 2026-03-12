FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /exp

RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

ENV VITE_CACHE_DIR=/tmp/.vite
ENV HOME=/tmp

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]