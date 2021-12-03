// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
            type: 'input',
            name: 'project title',
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
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. <br> If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. <br> If you followed tutorials, include links to those here as well.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'please list the license'
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





        // TODO: Create a function to write README file
        function writeToFile(fileName, data) {}

        // TODO: Create a function to initialize app
        function init() {}

        // Function call to initialize app
        init();