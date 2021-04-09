
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown")
const fs = require("fs");

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
        name: 'installation',
    },
    {
        type: 'input',
        message: 'what command should be given to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'what does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'what does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
  ])
  .then((response) => {
      const filename = "generatedREADME.md"
      fs.writeFile(filename, markdown(response)
      , function(err) {
        if (err) {
        console.log(err);
        } else {
          console.log("Success!")
        }
      })
    });
    


