package main

import (
	_ "docker/myproject/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}

