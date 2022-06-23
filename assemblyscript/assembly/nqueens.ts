export class NQ {
    count: i64 = 0;
    board: i32[];

    constructor(public n: i32) {
        this.board = new Array(this.n);
    }

    placeQueen(pos: i32): void {
        let n = this.n;
        if (pos >= n) {
            this.count++;
        } else {
            for (let i = 0; i < n; i++) {
                if (this.verifyPos(pos, i)) {
                    unchecked(this.board[pos] = i);
                    this.placeQueen(pos + 1);
                }
            }
        }
    }

    verifyPos(checkPos: i32, newPos: i32): bool {
        for (let i = 0; i < checkPos; i++) {
            let pos = unchecked(this.board[i]);
            if (pos == newPos || abs(checkPos - i) == abs(pos - newPos)) {
                return false
            }
        }
        return true
    }
}
