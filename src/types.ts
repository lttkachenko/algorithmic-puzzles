export type ObjectLiteral = { [key: string]: unknown };
export type Executable = (...args: any[]) => unknown | unknown[];
export type ExecList = { [key: string]: Executable };

export interface ITreeNode<T> {
  value: T;
  left?: ITreeNode<T>;
  right?: ITreeNode<T>;
}

export interface ITree<T> {
  root?: ITreeNode<T>;
}
