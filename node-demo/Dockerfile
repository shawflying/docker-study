# 指定我们的基础镜像，如果不写版本号默认最新版本
FROM node:8.9.3

# 指定制定该镜像的联系人信息
MAINTAINER YXXIT


RUN mkdir -p /data/code
WORKDIR /data/code

# 拷贝所有的信息到指定目录 于ADD . /data/code有什么区别
COPY . /data/code
RUN npm install

# 容器对外暴露的端口号
EXPOSE 5100

# 容器启动命令
CMD ["npm","start"]
