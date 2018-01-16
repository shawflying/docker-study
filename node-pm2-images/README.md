# 一个简单的node.js docker

1. 简单的node.js 项目
2. 不包含pm2,崩溃后无法重启

## 注意事项：
1. `.dockerignore` 务必要添加，特别`node.js`项目 `node_modules`
2. Dockerfile 要和项目在一个目录下
3. node.js 项目中的端口号要与Dockerfile中的端口号保持一致

## 构建命令

```sh
# 根据Dockerfile 构建镜像
docker build --rm -f Dockerfile -t yxx-keymetrics-image .

# 构建完成后运行镜像
# -p 访问端口:程序运行端口
# http://127.0.0.1:5121/ 
# http://127.0.0.1:5120/
# 都可以访问该服务
docker run -d -i -t --name='yxx-keymetrics-container' --net="bridge" -p 5120:5120  yxx-keymetrics-image
docker run -d -i -t --name='yxx-keymetrics-container1' --net="bridge" -p 5121:5120  yxx-keymetrics-image

# 查看项目运行状态
docker logs -f yxx-keymetrics-container
docker logs -f yxx-keymetrics-container1

# 删除容器
docker rm -f yxx-keymetrics-container

# 删除镜像
docker rmi -f a4a01566a785
```