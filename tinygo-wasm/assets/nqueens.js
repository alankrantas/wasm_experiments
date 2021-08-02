class NQ {
    constructor(qnum) {
        this.n = qnum;
        this.count = 0;
        this.board = [];
        for (let i = 0; i < this.n; i++) {
            this.board.push(0);
        }
    }

    placeQueen(pos) {
        if (pos >= this.n) {
            this.count++;
        } else {
            for (let i = 0; i < this.n; i++) {
                if (this.verifyPos(pos, i)) {
                    this.board[pos] = i;
                    this.placeQueen(pos + 1);
                }
            }
        }
    }

    verifyPos(checkPos, newPos) {
        for (let i = 0; i < checkPos; i++) {
            if ((this.board[i] == newPos) || (Math.abs(checkPos - i) == Math.abs(this.board[i] - newPos))) {
                return false
            }
        }
        return true
    }
}

function nqueenJs(qnum) {
    let nq = new NQ(qnum);
    nq.placeQueen(0);
    return nq.count;
}

module.exports = nqueenJs;

