// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch (license){
   case 'None':
    return '';
   
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';

    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';

    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';

    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';

    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';

    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';

    case 'ISC License (ISC)':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';

    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';

    case 'The Perl License':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
  
    case 'SIL Open Font License 1.1':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]';

    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';

    case 'The Do What the Fuck You Want to Public License':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';

    case 'The zlib/libpng License':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]';

}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 switch (license){
  case 'None':
    return '';
    
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
 
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
 
    case 'BSD 3-Clause License':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
 
    case 'BSD 2-Clause License':
      return '(https://opensource.org/licenses/BSD-2-Clause)';
 
    case 'Eclipse Public License 1.0':
      return '(https://opensource.org/licenses/EPL-1.0)';
 
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
 
    case 'IBM Public License Version 1.0':
      return '(https://opensource.org/licenses/IPL-1.0)';
 
    case 'ISC License (ISC)':
      return '(https://opensource.org/licenses/ISC)';
 
    case 'The MIT License':
      return '(https://opensource.org/licenses/MIT)';
 
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
 
    case 'The Perl License':
      return '(https://opensource.org/licenses/Artistic-2.0)';
   
    case 'SIL Open Font License 1.1':
      return '(https://opensource.org/licenses/OFL-1.1)';
 
    case 'The Unlicense':
      return '(http://unlicense.org/)';
 
    case 'The Do What the Fuck You Want to Public License':
      return '(http://www.wtfpl.net/about/)';
 
    case 'The zlib/libpng License':
      return '(https://opensource.org/licenses/Zlib)';
 
 
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
