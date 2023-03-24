const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/result.txt", `the result is ==> ${first}, ${second}`, {
  flag: "a",
});


//flag: a to append text to file content not delete the oldest content


readFile('./content/first.txt', 'utf8', ((err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
}))

writeFile('./content/result.txt', 'this text from callback function',{flag: 'a'}, ((err, result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
}))