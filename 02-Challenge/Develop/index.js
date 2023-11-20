// TODO: Include packages needed for this application
//inquirer (this uses 8.2.4)
const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

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
        message: "What's your project title?",
        name: "projectname"
      },
      {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: [
            "option",
            "option",
            "option"
        ]
      },
      {
        type: "input",
        message: "Describe your project.",
        name: "description"
      },
      {
        type: "input",
        message: "",
        name: ""
      },
      {
        type: "input",
        message: "What is your email?",
        name: "github"
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
