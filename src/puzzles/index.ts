import { ExecList } from '../types';

import { dijkstraDeep } from './dijkstra-deep';
import { dijkstraWide } from './dijkstra-wide';
import { nQueens } from './n-queens';

export const Puzzles: ExecList = {
  dijkstraDeep, dijkstraWide, nQueens,
};
