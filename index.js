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
      message: 'What is your project name?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'What is your name',
      name: 'name',
    },
    {
      type: 'input',
      message: 'how old are you',
      name: 'age',
    },
  ])
  .then((response) => {
      const filename = "README.md"
      fs.writeFile(filename, JSON.stringify(response)
      , function(err) {
        console.log(err);
      })
    });
    // !!!!!!! json.stringify not working!!!!!!!!!!!!!!


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
