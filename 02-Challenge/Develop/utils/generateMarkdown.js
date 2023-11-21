// render badge according to user choice
function renderLicenseBadge(license) {
  var licenseBadgeCode; //backticks, markdown img link

  if (license === "MIT License"){
    licenseBadgeCode = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Mozilla Public License"){
    licenseBadgeCode = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "3-Clause BSD License"){
    licenseBadgeCode = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "2-Clause BSD License"){
    licenseBadgeCode = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else {
    licenseBadgeCode = ""
  }
  console.log("badge rendering")
  return licenseBadgeCode;
}

// render link according to user choice
function renderLicenseLink(license) {
  var licenseLink;

  if (license === "MIT License"){
    licenseLink = `https://opensource.org/licenses/MIT`
  } else if (license === "Mozilla Public License"){
    licenseLink = `https://opensource.org/licenses/MPL-2.0`
  } else if (license === "3-Clause BSD License"){
    licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license === "2-Clause BSD License"){
    licenseLink = `https://opensource.org/licenses/BSD-2-Clause`
  } else {
    licenseLink = ""
  }
  console.log("link rendering!")
  return licenseLink;
  // this goes in license SECTION
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var aBadge = renderLicenseBadge(license);
  var aLink = renderLicenseLink(license);
  console.log("rendering license section");
  return `

  This project uses the ${license} ${aBadge} license. You can see this license at ${aLink}.

  `
}

// TODO: Create a function to generate markdown for README
// sections: title, Description, Table of Contents, Installation, Usage (how to), License, Contributing (contribution guideline list), Tests (instructions), and Questions (email and github username go here)
function generateMarkdown(data) {
  var licenseSection = renderLicenseSection(data.license);
  console.log("generating markdown")
  return `# ${data.title}
  //license badge
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  
    [Description](#description)

    [Installation](#installation)

    [Usage](#usage)

    [License](#license)
    
    [Contributing](#contributing)

    [Testing](#testing)

    [Questions](#questions)


  ## Installation
  
    ${data.installation}


  ## Usage
  
    ${data.usage}


  ## License
  
    ${licenseSection}


  ## Contributing
  
    ${data.contributing}


  ## Testing

    ${data.testing}


  ## Questions

    Direct questions to ${data.github} on github, or emailed to ${data.email}.

`;
}

module.exports = generateMarkdown;
