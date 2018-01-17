# 指定我们的基础镜像，如果不写版本号默认最新版本
FROM keymetrics/pm2:8-alpine

RUN mkdir -p /data/code
WORKDIR /data/code

# 拷贝所有的信息到指定目录 于ADD . /data/code有什么区别
COPY . /data/code
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN pm2 -v
RUN ls -al -R

# 容器对外暴露的端口号
EXPOSE 8600

# 容器启动命令
# CMD ["npm","start"]
CMD [ "pm2-runtime", "start", "pm2.json" ]
RUN pm2 list
