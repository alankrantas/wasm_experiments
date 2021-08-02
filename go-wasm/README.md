## Go + WebAssembly Example

This WASM example can query latest COVID cases of certain country from Johns Hopkins University's Github datasheet. The wasm file here is compiled by Golang 1.16.6.

The core function is provided in ```covid.go``` in the ```src/covid``` package, which is written as normal Golang code. Be noted that in the JavaScript wrapper function in ```main.go```, an additional Goroutine is used because otherwise covid.go would [cause deadlock](https://pkg.go.dev/syscall/js#FuncOf) by calling ```http.Get()```.

The website is served from ```/assets``` and the source code of wasm is in ```/src```

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

Make sure the project is using the correct version of ```wasm_exec.js``` copied from ```Go/misc/wasm``` in your system.

### Run server

```
go run server.go
```

or if you have Python installed:

```
(on Linux)> python3 -m http.server 8080 --directory ./assets
(on Windows)> python -m http.server 8080 --directory ./assets
```

And open ```http://localhost:8080``` in your browser.
