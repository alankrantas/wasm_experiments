const go = new Go();

WebAssembly.instantiateStreaming(
    fetch("tiny.wasm"),
    go.importObject).then((result) => {
        go.run(result.instance);
    });

function runNQueens(qnum) {
    if (Number.isNaN(qnum)) {
        alert("has to be a number");
        return ""
    }

    if (qnum < 4 || qnum > 255) {
        alert("only number between 4~255 is acceptable");
        return ""
    }

    const label1 = document.getElementById("result1");
    const label2 = document.getElementById("result2");
    let start,
        result,
        duration;

    if (label1 && label2) {
        start = Date.now();
        result = nqueens(Number(qnum));
        duration = (Date.now() - start) / 1000;
        label1.innerHTML = `[TinyGo + WASM]: ${qnum}-Queens has ${result} answers (time: ${duration} s)`;

        start = Date.now();
        result = nqueenJs(Number(qnum));
        duration = (Date.now() - start) / 1000;
        label2.innerHTML = `[JavaScript]: ${qnum}-Queens has ${result} answers (time: ${duration} s)`;
    }
}