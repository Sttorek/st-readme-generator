// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown")
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what kind of license should your project have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'what what command should be run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'what command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'what does the user need to know about using the repo?',
        name: 'know',
    },
    {
        type: 'input',
        message: 'what does the user need to know about contributing to the repo?',
        name: 'contribute',
    },
  ])
  .then((response) => {
      const filename = "README.md"
      fs.writeFile(filename, markdown(response)
      , function(err) {
        console.log(err);
      })
    });
    // !!!!!!! json.stringify not working!!!!!!!!!!!!!!
    // do i need the other questions in the screenshot?????????????????
    // getting a null


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
