import {build} from 'esbuild';
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=dirname(fileURLToPath(import.meta.url));
const outfile=process.argv[2] ? resolve(process.argv[2]) : resolve(root,'eli.bundle.js');
await build({entryPoints:[resolve(root,'source/boot.js')],outfile,bundle:true,
    format:'iife',platform:'browser',target:'es2020',minify:true,legalComments:'external'});
writeFileSync(outfile,readFileSync(outfile,'utf8').replace(/[ \t]+$/gm,''));
