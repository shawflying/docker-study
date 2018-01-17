# template-node-express Express 项目模板

1. 简单的node.js 项目
2. 不包含pm2,崩溃后无法重启

## 注意事项：
1. `.dockerignore` 务必要添加，特别`node.js`项目 `node_modules`
2. Dockerfile 要和项目在一个目录下
3. node.js 项目中的端口号要与Dockerfile中的端口号保持一致

## 构建命令

```sh
# 根据Dockerfile 构建镜像
docker build --rm -f Dockerfile -t template-node-express .

# 构建完成后运行镜像
# -p 访问端口:程序运行端口
# http://127.0.0.1:8600/
# 都可以访问该服务
docker run -d --name='node-express-container' --net="bridge" -p 8600:8600  template-node-express

# 查看项目运行状态
docker logs -f node-express-container

# 删除容器
docker rm -f node-express-container

# 删除镜像
docker rmi -f template-node-express
```

## 参考
- [keymetrics/pm2](https://hub.docker.com/r/keymetrics/pm2/)