// function to generate markdown for README
licenses  = {"ISC":["[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)","[License: ISC](https://opensource.org/licenses/ISC)"],
 "MIT":["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[License: MIT](https://opensource.org/licenses/MIT)" ], 
 "Apache License 2.0":["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)","[License](https://opensource.org/licenses/Apache-2.0)"],
  "BSD 3-Clause License":["[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)","[License](https://opensource.org/licenses/BSD-3-Clause)"],
  "BSD 2-Clause License":["[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)","[License](https://opensource.org/licenses/BSD-2-Clause)"],
  "Boost Software License 1.0":["[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)","[License](https://www.boost.org/LICENSE_1_0.txt)"], 
  "CC0":["[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)","[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)"],
  "Eclipse Public License 1.0":["[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)","[License](https://opensource.org/licenses/EPL-1.0)"],
  "GNU GPL v3.0":["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"],
  "GNU GPL v2":["[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)","[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"],
  "GNU AGPL v3":["[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)","[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)"],
  "GNU LGPL v3":["[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)","[License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)"],
  "Mozilla Public License 2.0":["[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)","[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)"],
  "The Unlicense":["[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)","[License: Unlicense](http://unlicense.org/)"]}

  /**
   * Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
   */
function generateMarkdown(data) {
  return `# ${data.title} ${licenses[data.license][0]}
  ${data.description}
  # Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Test](#test)
  6. [Questions](#questions)
## Installation
To install please use: 
\`${data.install}\`
## Usage
To use do next: 
\`${data.usage}\`
## License
${licenses[data.license][1]}
## Contribution Guidelines 
${data.contribute}
## Test
To test use:
\` ${data.test}\`
## Questions
For questionts please contact [me](https://github.com/${data.github}) at ${data.email}
 

`;
}

module.exports = generateMarkdown;
