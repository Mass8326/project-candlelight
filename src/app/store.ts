import { Sheet } from './sheet/sheet';
import { Section } from './section/section';
import { Spell } from './spell/spell';

export class Store {
  // Declarations
  public sheet:Sheet;
  public sectionDict:Map<string, Section>;
  public spellDict:Map<string, Spell>;
  // Initialization
  constructor (data) {
    this.sheet = {
      'title': data.title as string,
      'sections': [],
    }
    this.sectionDict = new Map();
    this.spellDict = new Map();
    // Normalization of sections
    for (let nestedSection of data.sections) {
      let id:string = this.genHash(8);
      let normalizedSection:Section = {
        'heading': nestedSection.heading as string,
        'spells': [] as string[],
      };
      // Normalization of spells
      for (let nestedSpell of nestedSection.spells) {
        let id:string = this.genHash(8);
        let normalizedSpell:Spell = {
          'name': nestedSpell.name as string,
          'memo': nestedSpell.memo as string,
          'info': nestedSpell.info as string[],
          'desc': nestedSpell.desc as string[],
        };
        // Add spell to section and dictionary
        normalizedSection.spells.push(id);
        this.spellDict.set(id, normalizedSpell);
      }
      // Add section to sheet and dictionary
      this.sheet.sections.push(id)
      this.sectionDict.set(id, normalizedSection);
    }
  }
  // Utility
  private genHash (length:number) : string {
    let temp = '';
    for (let i = 0; i <= length / 8; i++) {
      temp += Math.random().toString(36).padStart(8,'0').substr(-8);
    }
    return temp.substr(-length);
  }
}
