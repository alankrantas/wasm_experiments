import { init, WASI } from "@wasmer/wasi";
import fs from "fs";

(async () => {
  await init();
  const wasi = new WASI({
    env: {},
    args: [],
  });
  
  const buf = fs.readFileSync("./src/main.wasm");
  const module = await WebAssembly.compile(new Uint8Array(buf));

  // or:
  // const res = fetch("http://github.com/alankrantas/wasm_experiments/raw/main/tinygo-wasi-node/src/main.wasm");
  // const module = await WebAssembly.compileStreaming(res);
  // or:
  // const module = await WebAssembly.compile(await res.arrayBuffer());
  
  const instance = wasi.instantiate(module, {});

  const exitCode = wasi.start(instance);  // invoke main()
  const stdout = wasi.getStdoutString();  // read the stdout from main()
  console.log(`main: ${stdout}(exit code: ${exitCode})`);
  
  const add = instance.exports.add;
  console.log(`add: ${add(40, 2)}`);  // invoke add()
})();
