const Employee = require('./Employee');

class Engineer extends Employee {
//constructor function for engineer and its individual property as well as the ones shared with the employee
    constructor(name, id, email, github){
       super(name, id, email)

       this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;