// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'please enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'please choose the license',
        choices: ['MIT', 'none']
    },
    {
        type: 'input',
        name: 'features',
        message: "enter your project's features"
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'please enter guidelines for how others can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'enter any tests for the app and provide examples'
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
            questions
        )
        .then(answers => {
            writeToFile('generatedreadme.md', generateMarkdown({...answers }));
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README