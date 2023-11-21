// TODO: Include packages needed for this application
//inquirer (this uses 8.2.4)
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// readme has list
const questions = [
    {
        type: "input",
        message: "What's your github username?",
        name: "username"
      },
    {
        type: "input",
        message: "What's your project's title?",
        name: "title"
      },
      {
        type: "list",
        message: "Choose a license:",
        name: "license",
        choices: [
            "MIT License",
            "Mozilla Public License",
            "3-Clause BSD License",
            "2-Clause BSD License"
            //want to include creative commons but can't decide which option
        ]
      },
      {
        type: "input",
        message: "Describe your project.",
        name: "description"
      },
      {
        type: "input",
        message: "Describe how to install your project",
        name: "installation"
      },
      {
        type: "input",
        message: "Describe how to use your project",
        name: "usage"
      },
      {
        type: "input",
        message: "Explain the contribution guidelines for your project",
        name: "contribution"
      },
      {
        type: "input",
        message: "How can you (general) test your project?",
        name: "testing"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var filing = `./output/${fileName}`;
  fs.writeFile(filing, generateMarkdown(data), "utf-8", (err) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("File written successfully\n");  
    }
    })
  console.log("writing to file")
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions).then((response) =>(
    writeToFile('README.md', response),
    console.log("done!")    
  ));
  
  
  
}

// Function call to initialize app
init();
