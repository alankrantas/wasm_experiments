const nqueenJs = require("./nqueens.js");

let testN = [10, 12, 14];

for (let i = 0; i < 3; i++) {
    let start = Date.now();
    let count = nqueenJs(testN[i]);
    let duration = (Date.now() - start) / 1000;
    console.log(`Test: ${testN[i]}-Queens = ${count}... (${duration} s)`);
}