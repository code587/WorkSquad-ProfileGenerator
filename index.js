const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateProfile = require('./src/generateProfile');

// Questions for user input
const questions = () => {
    return inquirer.prompt([

    {
        type: 'list',
        name: 'Employee',
        message: 'Which employee are inquiring about?',
        choices: ['Manager', "Engineer", 'Intern'] 
    },
    {
        type: 'input',
        name: 'name',
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
        num: 'officeNumber',
        message: 'What is the manager office number?',
    },
// //     {
// //         type: 'list',
// //         name: 'Employee',
// //         message: 'Which personnel role would you like to add?',
// //         choices: ['Manager', 'Engineer', 'Intern']
// //     },
// //     {
// //         type: 'input',
// //         name: 'engineerName',
// //         message: 'What is the name of the Engineer?'
// //     },
// //     {
// //         type: 'input',
// //         num: 'engineerId',
// //         message: 'What is the Engineer ID number?',
// //     },
// //     {
// //         type: 'input',
// //         name: 'engineerEmail',
// //         message: 'what is the email address for the Engineer?',
// //     },
// //     {
// //         type: 'input',
// //         name: 'engineerGithub',
// //         message: 'Provide the github username for the Engineer.',
// //     },
// //     {
// //         type: 'list',
// //         name: 'Intern',
// //         message: 'Which personnel role would you like to add?',
// //         choices: ['Manager', 'Engineer', 'Intern']
// //     },
// //     {
// //         type: 'input',
// //         name: 'InternName',
// //         message: 'What is the name of the Intern?'
// //     },
// //     {
// //         type: 'input',
// //         num: 'internId',
// //         message: 'What is the Intern ID number?',
// //     },
// //     {
// //         type: 'input',
// //         name: 'internEmail',
// //         message: 'what is the email address of the Intern?',
// //     },
// //     {
// //         type: 'input',
// //         name: 'internSchool',
// //         message: 'Provide the school attended by the Intern.',
// //     },
]);
};

// const generateProfile = ({name, Id, Email, officeNumber, github, school}) =>

// writes to index.html file
// function writeToFile(fileName, data) {
//    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// };
   

const init = () => {
    questions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((userAnswers) => fs.writeFileSync('index.html', generateProfile(userAnswers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  // Function call to initialize app
  init();