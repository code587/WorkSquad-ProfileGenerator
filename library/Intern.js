const Employee = require('./Employee');

class Intern extends Employee {
//constructor function for intern and its individual property as well as the ones shared with the employee
    constructor(name, id, email, school){
        super(name, id, email)
 
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }
 
     getRole(){
         return "Intern";
    }
}
 
 module.exports = Intern;