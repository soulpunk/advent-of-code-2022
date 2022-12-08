import {Directory} from "./models/folders-model";

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

let totalSize = 0;
directories.forEach((directory) => {
    if(directory.size <= 100000){
        totalSize += directory.size;
    }
});

console.log(totalSize);