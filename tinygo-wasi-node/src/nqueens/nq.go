package nqueens

type NQ struct {
	n     uint8
	board []uint8
	count int
}

func NQueens(qNum uint8) int {
	nq := NQ{
		n:     qNum,
		board: make([]uint8, qNum),
	}

	nq.placeQueen(0)
	return nq.count
}

func (nq *NQ) placeQueen(pos uint8) {
	if pos >= nq.n {
		nq.count++
	} else {
		for i := range nq.board {
			if nq.verifyPos(pos, uint8(i)) {
				nq.board[pos] = uint8(i)
				nq.placeQueen(pos + 1)
			}
		}
	}
}

func (nq *NQ) verifyPos(checkPos uint8, newPos uint8) bool {
	for i := uint8(0); i < checkPos; i++ {
		if (nq.board[i] == newPos) || (abs(int16(checkPos)-int16(i)) == abs(int16(nq.board[i])-int16(newPos))) {
			return false
		}
	}
	return true
}

func abs(x int16) int16 {
	if x < 0 {
		return -x
	}
	return x
}
