// Run me in node to convert spells-raw.yaml!
// (yamljs needs to be installed globally)

const YAML = require('yamljs');
let data = YAML.load('spells-raw.yaml');

data.forEach((element) => {
  element.info = [];
  element.info.push(element.type);
  delete element.level;
  delete element.school;
  delete element.ritual;
  delete element.type;
  element.info.push('Casting Time: ' + element.casting_time);
  delete element.casting_time;
  element.info.push('Range: ' + element.range);
  delete element.range;
  element.info.push('Components: ' + element.components.raw);
  delete element.components;
  element.info.push('Duration: ' + element.duration);
  delete element.duration;
  
  element.desc = element.description;
  delete element.description;
  if (element.higher_levels) {
    element.desc.push(element.higher_levels);
    delete element.higher_levels;
  }
  
  delete element.classes;
  delete element.tags;
});

const fs = require('fs');
const content = YAML.stringify(data, 5, 2);
fs.writeFile("./spells.yaml", content, 'utf8', function (e) {
    if (e) { return console.log(e); }
    console.log("File saved");
}); 