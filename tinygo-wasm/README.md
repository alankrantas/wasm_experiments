## TinyGo + WebAssembly Example

This WASM example can calculate N-Queen problems. In fact the webpage would call both wasm and JavaScript version and display the time duration.

The wasm file is compiled by TinyGo 0.19.0. The website is served from ```assets```.

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

The wasm size is only 5% of the standard Golang version, however the compile time is also a bit longer.

### Run server

```
go run server.go
```

And open ```http://localhost:8080``` in your browser.

### Why wasm is slower?

If you run this example in Firefox, JavaScript does run slower than wasm. But if you run this in Chrome, you would notice that JS runs a great deal faster. This is because Chrome's V8 engine improves a lot of JS performance.
