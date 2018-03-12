export interface Spell {
  id:string;
  name:string;
  memo:string;
  info:string[];
  desc:string[];
}

export interface Section {
  id:string;
  heading:string;
  spells:Spell[];
}

export interface Sheet {
  title:string;
  sections:Section[];
}

export interface Store {
  version:string;
  sheet:Sheet;
}
