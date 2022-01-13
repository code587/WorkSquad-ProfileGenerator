const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');

const teamArray = [];

const DIST_DIRECTORY = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIRECTORY, "index.html")

const render = require("./source/generateProfile");

function mainMenu(){
// Questions for user input
const managerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
    },
    {
        type: 'input',
        name: 'managerId',
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
]).then((answers)=>{
    const manager = new Manager(
        answers.name,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
    )
    teamArray.push(manager);
    createTeam();
  //  console.log("new instance of manager", manager)
   // console.log("this is whats in our team array", teamArray)
})
}
const engineerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Engineer?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the Engineer ID number?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is the email address for the Engineer?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Provide the github username for the Engineer.',
    },
]).then((answers)=>{
    const engineer = new Engineer(
        answers.name,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
    )
    teamArray.push(engineer);
    createTeam();
  //  console.log("new instance of manager", manager)
   // console.log("this is whats in our team array", teamArray)
})
}
const internQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Intern?'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the Intern ID number?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'what is the email address of the Intern?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Provide the school attended by the Intern.',
    },
]).then((answers)=>{
    const intern = new Intern(
        answers.name,
        answers.internId,
        answers.internEmail,
        answers.internSchool
    )
    teamArray.push(intern);
    createTeam();
  //  console.log("new instance of manager", manager)
   // console.log("this is whats in our team array", teamArray)
})
}
    function createTeam(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'Employee',
                message: 'What employee type are you inquiring about?',
                choices: ['Manager', 'Engineer', 'Intern', "I dont want to add anymore team members"] 
            },
        ]).then((answer)=>{

            switch(answer.Employee){
                case "Manager":
                    managerQuestions();
                    break;
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                default:
                buildTeam();                
            }
        })
    }

    function buildTeam(){
        if(!fs.existsSync(DIST_DIRECTORY)){
            fs.mkdirSync(DIST_DIRECTORY)
        }
        fs.writeFileSync(distPath, render(teamArray), 'utf-8')
    }

 managerQuestions();
}

mainMenu();



// const init = () => {
//     managerQuestions()
// //       // Use writeFileSync method to use promises instead of a callback function
//       .then((userAnswers) => fs.writeFileSync('index.html', generateProfile(userAnswers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };