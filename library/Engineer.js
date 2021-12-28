const Employee = require('../library/Employee');

class Engineer extends Employee {
  
    // `github`&mdash;GitHub username

    // * `getGithub()`
    
    // * `getRole()`&mdash;overridden to return `'Engineer'`

    constructor(name, id, email, Github){
       super(name, id, email)

       this.Github = Github;

    }

    getGithub(){
        return this.Github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;