import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const crmAppPath = path.resolve(__dirname, '../../crm/frontend');
const overrideSrcPath = path.resolve(__dirname, 'src');
const overrideFilesPath = path.resolve(__dirname, './src_override');

console.log('Starting: Copying original src.');
fs.copySync(path.join(crmAppPath, 'src'), overrideSrcPath);
console.log('Completed: Copying original src.');

console.log('Starting: Overriding src.');
fs.copySync(overrideFilesPath, overrideSrcPath);
console.log('Completed: Overriding src.');

execSync('yarn install', { stdio: 'inherit' });