// packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateProfile = require('../output/generatProfile');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
    },
    {
        type: 'input',
        num: 'managerId',
        message: 'What is the manager ID number?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'what is the manager email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager office number?',
    },
    {
        type: 'list',
        name: 'Employee',
        message: 'Which personnel role would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the Engineer?'
    },
    {
        type: 'input',
        num: 'engineerId',
        message: 'What is the Engineer ID number?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is the manager email address?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Provide the github username for the Engineer.',
    },
    {
        type: 'list',
        name: 'Employee',
        message: 'Which personnel role would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'None']
    },
    {
        type: 'input',
        name: 'InternName',
        message: 'What is the name of the Intern?'
    },
    {
        type: 'input',
        num: 'internId',
        message: 'What is the Intern ID number?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'what is the intern email address?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Provide the school attended by the Intern.',
    },
];

// writes to index.html file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};
   
// initializes app
function init() {

    inquirer.prompt(questions).then((userAnswers) => {
        console.log('userAnswers', userAnswers)

        writeToFile('index.html', generatProfile({...userAnswers}) )
    })
}

// Function call to initialize app
init();
