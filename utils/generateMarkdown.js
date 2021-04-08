

// TODO: create a function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
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
    
## ${data.description}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;