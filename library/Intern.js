const Employee = require('../library/Employee');

class Intern extends Employee {
   
    // * `school`

    // * `getSchool()`
    
    // * `getRole()`&mdash;overridden to return `'Intern'`

    constructor(name, id, email, School){
        super(name, id, email)
 
        this.School = School;
    }
    
    getSchool(){
        return this.School;
    }
 
     getRole(){
         return "Intern";
    }
}
 
 module.exports = Intern;