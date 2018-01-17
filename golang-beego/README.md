# docker

 编译docker，切换至工程目录

 docker build -t my-golang-app .

 4 运行docker

 docker run --name shushanfx-beego -p 5001:5001 -d my-golang-app

 ## 构建命令

```sh
# 根据Dockerfile 构建镜像
docker build --rm -f Dockerfile -t yxx-golang-bee-image .

# 构建完成后运行镜像
# -p 访问端口:程序运行端口
# http://127.0.0.1:5200/
# http://127.0.0.1:5201/ 
# 都可以访问该服务
docker run -d -i -t --name='yxx-golang-bee-container' --net="bridge" -p 5200:5200  yxx-golang-bee-image
docker run -d -i -t --name='yxx-golang-bee-container1' --net="bridge" -p 5201:5200  yxx-golang-bee-image

# 查看项目运行状态
docker logs -f yxx-golang-bee-container

# 删除容器
docker rm -f yxx-golang-bee-container

# 删除镜像
docker rmi -f yxx-golang-bee-image
```