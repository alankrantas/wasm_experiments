package main

import (
	"fmt"
	"syscall/js"

	"go-wasm/src/covid"
)

func jsFuncWrapper() js.Func {

	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {

		alert := js.Global().Get("alert")
		doc := js.Global().Get("document")
		label := doc.Call("getElementById", "result")

		if !label.Truthy() {
			alert.Invoke("label id='result' does not exist")
			return nil
		}
		label.Set("innerHTML", "")

		if len(args) != 1 {
			alert.Invoke("wasm function only allows 1 argument")
			return nil
		}

		go func() {

			result, err := covid.QueryCovidCase(args[0].String())
			if err != nil {
				alert.Invoke("wasm function error: " + err.Error())
				return
			}

			label.Set("innerHTML", fmt.Sprintf("%v case(s)", result))
		}()

		return nil
	})
}

func main() {

	jsFunc := jsFuncWrapper()
	js.Global().Set("queryCovidCase", jsFunc)
	defer jsFunc.Release()

	select {}
}
