# project-candlelight

> Project Candlelight is a compact spell sheet for quick and easy reference, tailored for D&D 5e

## Usage

In-app editing is currently in development. To edit your spell sheet, you must export it and use a text editor such as Notepad. Once done editing, you may import it back in.

### Save File Structure

```yaml
version: "0.0.0"
sheet:
  title: "Example Character"
  sections:
    - heading: "Cantrips"
      spells:
        - name: "Prestidigitation"
          memo: "Note to self here" # optional, leave empty quotes if none
          info:
            - "Conjuration  Cantrip"
            - "Casting Time: 1 action"
            - "..."
          desc:
            - "Each entry is a separate paragraph."
            - "To line break,<br>use the br html tag."
```

## Development

### Build instructions

Optionally, install Angular CLI as a global module with `npm install -g @angular/cli`

```bash
# install dependencies
npm install

# serve files for development at localhost:4200
npm run dev

# build for production
npm run build

# lint typescript files
npm run lint
```

### Angular CLI

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
