// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if statements per option
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //if statements per option
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // write/style/place license+badge
  // return license section code, so generate function can use it
}

// TODO: Create a function to generate markdown for README
// sections: title, Description, Table of Contents, Installation, Usage (how to), License, Contributing (contribution guideline list), Tests (instructions), and Questions (email and github username go here)
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
