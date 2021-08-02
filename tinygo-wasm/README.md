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

The generated wasm size is only 5% of the standard Golang version, however the compile time is also a bit longer.

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

If you run this example in Firefox, the JavaScript version of N-Queens does run slower than wasm. But if you run this in Chrome, you would notice that JS runs a great deal faster. This is because Chrome's V8 engine improves a lot of JS performance.
