import { NQ } from "./nqueens"

export function nqueens(qnum: i32): i64 {
  const nq = new NQ(qnum);
  return nq.count;
}
