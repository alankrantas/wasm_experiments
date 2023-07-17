package main

import "fmt"

//export add
func add(x, y uint32) uint32 {
	return x + y
}

func main() {
	fmt.Println("Hello Golang")
}
