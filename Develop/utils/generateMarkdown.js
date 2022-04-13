// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch (license){
   case 'None':
    return '';
   
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';

    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';

    case 'BSD 3-Clause License':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';

    case 'BSD 2-Clause License':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';

    case 'Eclipse Public License 1.0':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';

    case 'GNU GPL v3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';

    case 'IBM Public License Version 1.0':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';

    case 'ISC License (ISC)':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';

    case 'The MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';

    case 'The Perl License':
      return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
  
    case 'SIL Open Font License 1.1':
      return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)';

    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';

    case 'The Do What the Fuck You Want to Public License':
      return '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)';

    case 'The zlib/libpng License':
      return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)';

}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 switch (license){
  case 'None':
    return '';
    
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
 
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
 
    case 'BSD 3-Clause License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
 
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
 
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';
 
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
 
    case 'IBM Public License Version 1.0':
      return 'https://opensource.org/licenses/IPL-1.0';
 
    case 'ISC License (ISC)':
      return 'https://opensource.org/licenses/ISC';
 
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
 
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
 
    case 'The Perl License':
      return 'https://opensource.org/licenses/Artistic-2.0';
   
    case 'SIL Open Font License 1.1':
      return 'https://opensource.org/licenses/OFL-1.1';
 
    case 'The Unlicense':
      return 'http://unlicense.org/';
 
    case 'The Do What the Fuck You Want to Public License':
      return 'http://www.wtfpl.net/about/';
 
    case 'The zlib/libpng License':
      return 'https://opensource.org/licenses/Zlib';
 
 
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  ${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#repo)
- [Credits](#credits)
- [Tests](#test)

## Installation
  ${data.dependencies}

## Usage
  ${data.user}
Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.
[My GitHub: ${data.gitHub}](https://github.com/${data.gitHub})

[My email: ${data.email}](email:${data.email})

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License
[${renderLicenseBadge(data.license)}]
(${renderLicenseLink(data.license)})

## How to Contribute
  ${data.repo}

## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
