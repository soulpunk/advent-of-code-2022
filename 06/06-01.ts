let fs = require('fs');
let text: any[] = fs.readFileSync('./06-01-input.txt').toString().split('');
let found = false;
console.log(text.length)
for(let i = 0; i < text.length-3 && !found; i++){
    const currentToSearch = text.slice(i, i+4);
    currentToSearch.sort((a,b) => a.localeCompare(b))
    let hasDuplicateLetter = false;
    currentToSearch.forEach((letter, index) => {
        hasDuplicateLetter = hasDuplicateLetter || currentToSearch.lastIndexOf(letter) !== index;
    });
    if(!hasDuplicateLetter){
        found = true;
        console.log(text.slice(i,i+4), i+4);
    }
}