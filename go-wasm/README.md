## Go + WebAssembly Example

This WASM example can query latest COVID cases of certain country from Johns Hopkins University's Github datasheet. The wasm file is compiled by Golang 1.16.6.

The core function is provided in ```covid.go``` in the ```src/covid``` package, which is a standard Golang library. Be noted that in the JavaScript wrapper function in ```main.go```, an additional Goroutine is used because ```http.Get()``` in the covid package would [cause deadlock](https://pkg.go.dev/syscall/js#FuncOf).

The website is served from ```assets```.

### Run unit test on covid package

```
go test -v ./src/covid
```

The covid package cannot be compiled into TinyGo wasm since http-related packages are not yet supported by TinyGo 0.19.0.

### Build wasm

For Linux:

```
GOOS=js GOARCH=wasm go build -o ./assets/main.wasm ./src/
```

For Windows: (for example, Windows on x64)

```
go env -w GOOS=js GOARCH=wasm
go build -o ./assets/main.wasm ./src/
go env -w GOOS=windows GOARCH=amd64\
```

### Run server

```
go run server.go
```

And open ```http://localhost:8080``` in your browser.
