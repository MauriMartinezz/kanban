import { Column } from './column.model';

export interface Board {
  bid: string;
  boardName: string;
  boardBackground: string;
  columns?: Column[];
}
