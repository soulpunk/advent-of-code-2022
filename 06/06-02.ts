let fs = require('fs');
let text: any[] = fs.readFileSync('./06-01-input.txt').toString().split('');
let found = false;
for(let i = 0; i < text.length-13 && !found; i++){
    const currentToSearch = text.slice(i, i+14);
    currentToSearch.sort((a,b) => a.localeCompare(b))
    let hasDuplicateLetter = false;
    currentToSearch.forEach((letter, index) => {
        hasDuplicateLetter = hasDuplicateLetter || currentToSearch.lastIndexOf(letter) !== index;
    });
    if(!hasDuplicateLetter){
        found = true;
        console.log(text.slice(i,i+14), i+14);
    }
}