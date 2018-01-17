FROM golang

RUN mkdir -p /go/src/wap
WORKDIR /go/src/wap

COPY . /go/src/wap

RUN go version

EXPOSE 5211

CMD ["go","run","main.go"]