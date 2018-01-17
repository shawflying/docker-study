# 原生程序 打包

## 程序打包
```
go build -o wap main.go
```

## 构建命令

```sh
# 根据Dockerfile 构建镜像
docker build --rm -f Dockerfile -t yxx-golang-wap-image .

# 构建完成后运行镜像
# -p 访问端口:程序运行端口
# http://127.0.0.1:5211/
# 都可以访问该服务
docker run -itd --name='yxx-golang-wap-container' --net="bridge" -p 5211:5211  yxx-golang-wap-image

# 查看项目运行状态
docker logs -f yxx-golang-wap-container

# 删除容器
docker rm -f yxx-golang-wap-container

# 删除镜像
docker rmi -f yxx-golang-wap-image
```