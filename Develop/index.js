const fs = require('fs');
const inquirer = require('inquirer');
const { renderLicenseBadge } = require('./utils/generateLicense')

// generates the README content
function generateREADME(data) {
    return `# ${data.title}
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)


${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via the following:

GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

// Prompts the user for information
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the necessary requirements?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license?',
            choices: ['MIT', 'NONE']
        },
    ])
    .then((answers) => {

        // Generates README content with the provided data
        const readmeContent = generateREADME(answers);

        // Writes the generated content to a README.md file
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md has been successfully generated!');
            }
        });
    })
    .catch((error) => {
        console.error(error);
    });
