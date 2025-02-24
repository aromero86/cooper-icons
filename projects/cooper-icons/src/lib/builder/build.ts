import { mkdir, readdir } from 'fs/promises';
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
import path from 'path';

async function listFiles(folderPath: string): Promise<string[]> {
    const result: string [] = [];
    try {
        const files = await readdir(folderPath);
        files.filter(file => !file.startsWith('.'))
            .forEach(file => result.push(file.replace('.svg', '')));
    } catch (err) {
        console.error(`Error reading folder: ${ (<any>err).message }`);
    }
    return result;
};

async function readFileContent(filePath: string) {
    let result: string = '';
    try {
        result = await readFile(filePath, 'utf-8');
    } catch (err) {
        console.error(`Error al leer el archivo ${ filePath }: ${ (<any>err).message }`);
    }
    return result;
};

async function saveFile(fileName: string, content: string) {
    const outputDir = path.resolve('..');
    const filePath = path.join(outputDir, fileName);
    try {
        await writeFile(filePath, content, 'utf-8');
    } catch (err) {
        console.error(`Error al guardar el archivo: ${ (<any>err).message }`);
    }
};


function iconClassName(fileName: string): string {
    return fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const icons = await listFiles(path.join(__dirname, 'phosphor'));
const template = await readFileContent(path.join(__dirname, 'template.txt'));
let value: string = '';

icons.forEach(async icon => {
    value = template.replace('FILENAME', icon);
    value = value.replace('CLASSNAME', iconClassName(icon));
    value = value.replace('CONTENT', await readFileContent(path.join(__dirname, 'phosphor', `${ icon }.svg`)));
    await saveFile(`${ icon }.ts`, value);
});
