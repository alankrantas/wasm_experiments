import { init, WASI } from "@wasmer/wasi";
import fs from "fs";

(async () => {
  await init();

  const wasi = new WASI({
    env: {},
    args: [],
  });
  const buf = fs.readFileSync("./go/main.wasm");

  const module = await WebAssembly.compile(new Uint8Array(buf));
  const instance = wasi.instantiate(module, {});

  const exitCode = wasi.start(instance);
  const stdout = wasi.getStdoutString();
  const add = instance.exports.add;

  console.log(`add: ${add(2, 3)}`);
  console.log(`main: ${stdout}(exit code: ${exitCode})`);
})();
