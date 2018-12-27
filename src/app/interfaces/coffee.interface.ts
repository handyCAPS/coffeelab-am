import { Pot } from './pot.interface';
export class Coffee {
  id?: string;
  name: string;
  store: string;
  rating: number;
  dateAdded: string;
  dateAltered?: string;
  order: number;
  pot?: Pot;
}
