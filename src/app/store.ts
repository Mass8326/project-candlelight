import { Sheet } from './sheet/sheet';

export interface Store {
  version:string;
  sheet:Sheet;
}
