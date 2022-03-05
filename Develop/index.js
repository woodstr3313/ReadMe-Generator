// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub",
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email",
}, {
    type: "input",
    message: "Please write a short description of your project",
    name: "Description",
}, {
    type: "input",
    message: "What kind of license does your project have?",
    name: "License",
}, {
    type: "input",
    message: "What command should be run to install your dependencies?",
    name: "Dependencies",
}, {
    type: "input",
    message: "What command should be run to run your tests?",
    name: "Tests",
}, {
    type: "input",
    message: "What should the user need to know about using this repo?",
    name: "User",
}, {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "Repo",
},


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

const userName = questions.userName

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
  console.log(questions.data);
});