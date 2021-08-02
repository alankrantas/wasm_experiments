package main

import (
	"syscall/js"

	"tinygo-wasm/src/nqueens"
)

func jsFuncWrapper() js.Func {

	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {

		return nqueens.NQueens(uint8(args[0].Int()))
	})
}

func main() {

	jsFunc := jsFuncWrapper()
	js.Global().Set("nqueens", jsFunc)
	defer jsFunc.Release()

	select {}
}
