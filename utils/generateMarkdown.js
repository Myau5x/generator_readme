// function to generate markdown for README
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
${data.license}
## Questions
${data.email}
 

`;
}

module.exports = generateMarkdown;
