package main

import (
	"fmt"
	"main/nqueens"
)

func main() {
	fmt.Println("Hello Golang")
}

//export nq
func nq(qNum uint8) int {
	return nqueens.NQueens(qNum)
}
