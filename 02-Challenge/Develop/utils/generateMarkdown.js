// render badge according to user choice
function renderLicenseBadge(answers) {
  var licensePicked = answers.license;
  var licenseBadgeCode; //backticks, markdown img link

  if (licensePicked === "MIT License"){
    licenseBadgeCode = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licensePicked === "Mozilla Public License"){
    licenseBadgeCode = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (licensePicked === "3-Clause BSD License"){
    licenseBadgeCode = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (licensePicked === "2-Clause BSD License"){
    licenseBadgeCode = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else {
    licenseBadgeCode = ""
  }

  return licenseBadgeCode;
}

// render link according to user choice
function renderLicenseLink(answers) {
  var licensePicked = answers.license;
  var licenseLink;

  if (licensePicked === "MIT License"){
    licenseLink = `https://opensource.org/licenses/MIT`
  } else if (licensePicked === "Mozilla Public License"){
    licenseLink = `https://opensource.org/licenses/MPL-2.0`
  } else if (licensePicked === "3-Clause BSD License"){
    licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
  } else if (licensePicked === "2-Clause BSD License"){
    licenseLink = `https://opensource.org/licenses/BSD-2-Clause`
  } else {
    licenseLink = ""
  }

  return licenseLink;
  // this goes in license SECTION
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
  //license badge

  ## Description

  ## Table of Contents


  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Testing

  ## Questions
  // if you have questions reach out to etc

`;
}

module.exports = generateMarkdown;
