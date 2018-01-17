FROM node:8.9.3

RUN mkdir -p /data/code
WORKDIR /data/code

COPY . /data/code
RUN npm install -g pm2
RUN npm install

# 容器对外暴露的端口号
EXPOSE 5120


# CMD [ "pm2","start","index.js" ]
CMD [ "pm2-runtime", "start", "pm2.json" ]