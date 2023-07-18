const fileName = "./src/main.wasm";
const url =
  "http://github.com/alankrantas/wasm_experiments/raw/main/tinygo-wasi-node/src/main.wasm";

import { init, WASI } from "@wasmer/wasi";
import fs from "fs";

(async () => {
  await init();

  const wasi = new WASI({
    env: {},
    args: [],
  });

  /*
  const module = await WebAssembly.compile(
    await (await fetch(url)).arrayBuffer()
  );
  */
  const module = await WebAssembly.compile(fs.readFileSync(fileName));
  const instance = wasi.instantiate(module, {});
  
  // console.log(instance.exports);  // list of exports
  const { add } = instance.exports;
  console.log(`add: ${add(2, 3)}`);  // invoke add()

  const exitCode = wasi.start(instance);  // invoke main()
  const stdout = wasi.getStdoutString();  // stdout of main()
  console.log(`main: ${stdout}(exit code: ${exitCode})`);
})();
