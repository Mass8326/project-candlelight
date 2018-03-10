import { Spell } from '../spell/spell';

export interface Section {
  id:string;
  heading:string;
  spells:Spell[];
}
