## TinyGo + WebAssembly Example

This WASM example can calculate N-Queen problems. In fact the webpage would call both wasm and JavaScript version and display the results/calculation time.

The wasm file is compiled by TinyGo 0.19.0. The website is served from ```/assets``` and the wasm source code is in ```/src```. The core function is provided in ```nq.go``` in the ```src/nqueens``` package, which is written as normal Golang code.

### Run unit test on nqueens package

```
go test -v ./src/nqueens
```

### Run "test" on nqueens JavaScript version

You'll need to install Node.js.

```
node ./assets/nqueens_test.js
```

### Build wasm

```
tinygo build -o ./assets/tiny.wasm -target wasm ./src
```

Make sure the project is using the correct version of ```wasm_exec.js``` copied from ```tinygo/target``` in your system.

The generated wasm size is only 5% of the standard Golang version, however the compilation time is also a bit longer.

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

### Why wasm runs slower?

if you use Chrome or Edge browser, you may notice that the JavaScript version of N-QUeens usually runs a bit faster. This is probably because Chrome's V8 engine does a lot of JavaScript runtime optimization.

In my test JavaScript runs much slower in Firefox (and thus slower than wasm).
