const Employee = require('../library/Employee');

class Engineer extends Employee {
  
    // `github`&mdash;GitHub username

    // * `getGithub()`
    
    // * `getRole()`&mdash;overridden to return `'Engineer'`

    constructor(name, id, email, github){
       super(name, id, email, github)

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