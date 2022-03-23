// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license does your project have?",
    name: "license",
    choices: [
      "None",
      "Apache 2.0",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "The MIT License",
      "Mozilla Public License 2.0",
      "The Perl License",
      "SIL Open Font License 1.1",
      "The Unlicense",
      "The Do What the Fuck You Want to Public License",
      "The zlib/libpng License",
    ],
  },
  {
    type: "input",
    message: "What command should be run to install your dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run your tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What should the user need to know about using this repo?",
    name: "user",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "repo",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
    license = data.license;
    fs.writeFile(fileName, generateMarkdown(data));

}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
  .then((response) => writeToFile('newREADME.md', response))

}
// Function call to initalize app
init();
