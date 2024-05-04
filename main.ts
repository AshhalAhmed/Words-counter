#! /usr/bin/env node
import inquirer from "inquirer";
let wordcounter=await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence"
    }
])

const words=wordcounter.sentence.trim().split(" ")

console.log(words)
console.log(`your sentence words is: `+ `${words.length}`);
                                