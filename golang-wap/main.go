package main

import (
	"fmt"
	"log"
	"net/http"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()                         //解析参数，默认是不会解析的
	fmt.Println(r.Form)                   //这些信息是输出到服务器端的打印信息
	fmt.Fprintf(w, "Hello a simple wap!") //这个写入到w的是输出到客户端的
}
func main() {
	fmt.Println("http://127.0.0.1:5211")
	http.HandleFunc("/", sayhelloName)       //设置访问的路由
	err := http.ListenAndServe(":5211", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
