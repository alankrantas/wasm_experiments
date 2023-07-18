package nqueens

import (
	"testing"
	"time"
)

func TestNQueens(t *testing.T) {
	n := []uint8{10, 12, 14}
	ans := []int{724, 14200, 365596}

	for i := 0; i < 3; i++ {
		start := time.Now()
		count := NQueens(n[i])
		duration := time.Since(start).Seconds()
		if count != ans[i] {
			t.Errorf("Test %d-Queens fail", n[i])
		} else {
			t.Logf("Test %d-Queens = %d... (%.4f s)\n", n[i], ans[i], duration)
		}
	}
}
