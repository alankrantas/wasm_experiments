## AssemblyScript (TypeScript) Example

This WASM example can calculate N-Queen problems. The wasm file is compiled by [AssemblyScript](https://www.assemblyscript.org/) 0.20.12. The website is served from root and the wasm source code is in ```/build```. The core function is provided in ```/assembly```.

### Build wasm

```
npm run asbuild
```

### Test wasm

```
npm run test
```

Modify ```/test/index.js``` according to your wasm function.

### Run server

```
npm start
```

And open ```http://localhost:3000``` in your browser.
