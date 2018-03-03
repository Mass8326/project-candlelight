/*
  Although this file is never called from the entry point (main.ts), the
    TypeScript compiler will read every .ts file not excluded in its configs.
  https://stackoverflow.com/questions/30640844/
  If all root level definitions use the declare keyword, then all definitions
    are ambient declarations because of the above. The purpose of this file is
    not at runtime, but to help describe things at compilation.
  https://basarat.gitbooks.io/typescript/docs/types/ambient/d.ts.html
  As TypeScript recognizes .ts files only, it conflicts with Node's ability
    to import/require all file types. For example, require('data.json') would
    be interpreted as needing 'data.json.ts' and is likely to throw error.
    Wildcard module declarations can reconcile this.
  https://www.typescriptlang.org/docs/handbook/modules.html
    #wildcard-module-declarations
*/

declare module 'raw-loader!*';
