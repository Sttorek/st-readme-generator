function renderLicenseBadge(license) {
    return `![license badge](https://img.shields.io/badge/license-${license}-blue)`

}


// TODO: Create a function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: create a funstion that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: create a function to generate markdown for README
function generateMarkdown(data) {
console.log("data", data)
return `# ${data.title}

## License
${renderLicenseBadge(data.license)}


## Description
${data.description}

## Table of Contents
* [License](#License)
* [Installation](#Installation)
* [Tests](#Tests)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Questions](#Questions)



## Contributing
${data.contributing}


## Installation
To install dependencies, you must run ${data.installation} in your terminal.

## Tests
To test run ${data.tests}



## Usage
In order use ths app, you must run ${data.usage} in your terminal.


## Questions
[Github Profile](https://github.com/${data.username})

${data.email}



`;}

module.exports = generateMarkdown;