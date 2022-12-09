import {Directory} from "./models/07.model";

let fs = require('fs');
let text: any[] = fs.readFileSync('./07.txt').toString().split('\r\n');

let currentPath = '';
const directories: Directory[] = [];

text.forEach((line: string) => {
    if(line === '$ ls') {
        directories.push(new Directory(currentPath));
    } else if(line === '$ cd ..'){
        currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    } else if(line === '$ cd /'){
        currentPath = '';
    } else if (line.startsWith('$ cd')){
        currentPath = `${currentPath}/${line.substring(5).replace(' \g', '')}`;
    } else {
        const matchingDirectories = directories.filter((directory) => {
            return currentPath.includes(directory.name);
        });

        const sizeString = line.split( ' ')[0];
        if(sizeString != 'dir'){
            const size = Number.parseInt(sizeString);
            matchingDirectories.forEach((directory) => {
                directory.size += size;
            });
        }
    }
});

let root = directories.find((directory) => directory.name === '');

const unusedSpace = 70000000 - root.size;
const targetSpace = 30000000 - unusedSpace;

let bestDirectory = new Directory('');
bestDirectory.size = 99999999999999999;
directories.forEach((directory) => {
    if(directory.size >= targetSpace && directory.size < bestDirectory.size){
        bestDirectory = directory;
        console.log('replaced',directory.name)
    }
});

console.log(bestDirectory);