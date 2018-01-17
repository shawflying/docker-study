FROM golang
RUN mkdir -p /go/src/beego_server
WORKDIR /go/src/beego_server
COPY . /go/src/beego_server
RUN go get github.com/astaxie/beego
RUN go get -d -v
RUN go install -v
# 容器对外暴露的端口号
EXPOSE 5200

# CMD ["go-wrapper", "run"]
# ONBUILD COPY . /go/src/beego_server
# ONBUILD RUN go-wrapper download
# ONBUILD RUN go-wrapper install
CMD [ "go","run","main.go" ]

