'use strict';

import * as fs from 'node:fs';
import pkg from 'yargs';
const { argv } = pkg;

(async () => {
    let trustmap = [];
    const aliases_json = JSON.parse(fs.readFileSync(argv.infile, 'utf-8').toString());
    for (let alias_key in aliases_json) {
        trustmap.push({
            level: '#TOP',
            id: aliases_json[alias_key]
        });
    }

    const outfile = argv.outfile;
    fs.writeFile(outfile, JSON.stringify(trustmap), x => console.log(x));
})();
