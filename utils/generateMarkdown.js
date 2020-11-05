// function to generate markdown for README
licenses  = {"ISC":"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
 "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
 "Apache License 2.0":"",
  "BSD 3-Clause License":"",
  "BSD 2-Clause License":"",
  "Boost Software License 1.0":"", 
  "CC0":"",
  "Eclipse Public License 1.0":"",
  "GNU GPL v3.0":"",
  "GNU GPL v2":"",
  "GNU AGPL v3":"",
  "GNU LGPL v3":"",
  "Mozilla Public License 2.0":"",
  "The Unlicense":""}

function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  # Table of Contents
  1. [Installation](#installation)
  2. [Contribution Guidelines](#contribution-guidelines)
  3. [Test](#test)
  4. [License](#license)
  5. [Questions](#questions)
## Installation
## Contribution Guidelines 
## Test
## License
${licenses[data.license]}
## Questions
${data.email}
 

`;
}

module.exports = generateMarkdown;
