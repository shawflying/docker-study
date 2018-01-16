FROM node

RUN mkdir -p /data/code
WORKDIR /data/code

COPY . /data/code
RUN npm install
RUN npm install -g pm2

CMD [ "pm2","start","index.js" ]