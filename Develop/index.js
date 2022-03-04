// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?", "What is your GitHub username?",
    "What is your email address?", "Please write a short description of your project",
    "What kind of license does your project have?", "What command should be run to install your dependencies?",
    "What command should be run to run your tests?", "What should the user need to know about using this repo?",
    "What does the user need to know about conrtibuting to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'username',
    },
    {
      type: 'password',
      message: questions[1],
      name: 'password',
    },
    {
      type: 'password',
      message: questions[2],
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

}

// Function call to initialize app
init();
