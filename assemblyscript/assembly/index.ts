import { NQ } from "./nqueens"

export function nqueens(qnum: i32): i64 {
  const nq = new NQ(qnum);
  nq.placeQueen(0);
  return nq.count;
}
