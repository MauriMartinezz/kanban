import { Column } from './column.model';

// export class Board{
//     constructor(public name: string, public columns: Column[]){
//     }
// }

export interface Board {
  boardName: string;
  columns?: Column[];
  boardBackground: string;
  bid: string;
}
