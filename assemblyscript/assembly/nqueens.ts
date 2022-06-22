export class NQ {
    n: i32;
    count: i64;
    board: i32[];

    constructor(qnum: i32) {
        this.n = qnum;
        this.count = 0;
        this.board = [];
        for (let i: i32 = 0; i < this.n; i++) {
            this.board.push(0);
        }
    }

    placeQueen(pos: i32): void {
        if (pos >= this.n) {
            this.count++;
        } else {
            for (let i: i32 = 0; i < this.n; i++) {
                if (this.verifyPos(pos, i)) {
                    this.board[pos] = i;
                    this.placeQueen(pos + 1);
                }
            }
        }
    }

    verifyPos(checkPos: i32, newPos: i32): bool {
        for (let i: i32 = 0; i < checkPos; i++) {
            if ((this.board[i] == newPos) ||
                (Math.abs(checkPos - i) == Math.abs(this.board[i] - newPos))) {
                return false
            }
        }
        return true
    }
}