/** return the output array and ignore all non-op characters */
export const nQueens = (size = 8, drawBoard = false, verbose = false): unknown[] => {

  if (size < 4) return [];

  const OCCUPIED = 1; // A current field is under attack
  const FREE = 0; // A current field is safe
  const IS_HERE = -1; // Placed to current field

  const n = size;
  const diagsCount = 2 * n - 1; // Diags count
  const diagsL = [...Array(diagsCount)]; // All the left diags on the board
  const diagsR = [...Array(diagsCount)]; // All the right diag on the board
  const cols = [...Array(n)]; // All the board columns
  const solutions: unknown[] = []; // Solutions list

  for (let i = 0; i < diagsCount; ++i) {
    if (i < n) cols[i] = IS_HERE;
    diagsL[i] = FREE;
    diagsR[i] = FREE;
  }

  const calculate = (row = 0) => { // Solutions search method
    for (let col = 0; col < n; ++col) {
      if (cols[col] >= 0) continue; // Current col is under attack, leave it

      const thisDiag1 = row + col;
      if (diagsL[thisDiag1] === OCCUPIED) continue; // Left '\' diag is under attack for the current cell, leave it

      const thisDiag2 = n - 1 - row + col;
      if (diagsR[thisDiag2] === OCCUPIED) continue; // Right '/' diag is under attack for the current cell, leave it

      cols[col] = row;
      diagsL[thisDiag1] = OCCUPIED; // Mark the current Left '\' diag as occupied
      diagsR[thisDiag2] = OCCUPIED; // Mark the current Right '/' diag as occupied

      if (row === n - 1) { // The last row is reached - solution found
        solutions.push(cols.slice());
      } else { // Else repeat recursively
        calculate(row + 1);
      }

      cols[col] = IS_HERE;
      diagsL[thisDiag1] = FREE;
      diagsR[thisDiag2] = FREE;
    }
  }

  calculate();

  let output: unknown[];

  if (drawBoard) { // @TODO: Implement Board generation for the React showcase page
    output = [...Array(n)].map(row => {
      return [...Array(n)].map(col => '[]');
    });
  } else {
    output = solutions.map((item) => {
      return (item as number[]).reduce((acc: string, cur: number, idx: number) => {
        return `${acc}(${idx + 1},${(item as number[])[idx] + 1})`;
      }, '');
    });
  }

  if (verbose) console.log(output);

  return output;
};
