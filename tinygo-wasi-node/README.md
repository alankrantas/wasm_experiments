## TinyGo + WASI + Node Example

Compile a simple Golang script to WASI (WebAssembly System Interface) with TinyGo and invoke it in Node.js using [@wasmer/wasi](https://www.npmjs.com/package/@wasmer/wasi).

Compared to WASM modules, WASI modules do not need a JavaScript wrapper.

Install ```@wasmer/wasi``` (which has similar interface to Node.js' own WASI API):

```bash
npm i -D @wasmer/wasi
```

On Windows you may need to install ```wasm-opt```:

```bash
npm i -g wasm-opt
```

### Compile TinyGo

```bash
cd src
tinygo build -o main.wasm -target=wasi main.go
# or to reduce the binary size and enable optimizations:
# tinygo build -scheduler=none --no-debug -opt=2 -o main.wasm -target=wasi main.go
```

See [here](https://wazero.io/languages/tinygo/#optimizations) for details of the extra build flags.

The functions to be exported do not have to be capitalize but need the comment ```//export <function name>```:

```golang
//export add
func add(x, y uint32) uint32 {
	return x + y
}
```

### Execute WASI Module

```
node index.js
```

The script loads the example WASI module, runs ```main()``` with ```wasi.start()``` but also runs the exported ```add()```.
