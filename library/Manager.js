const Employee = require('../library/Employee');

class Manager extends Employee {
   
// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

    constructor(name, id, email, officeNumber){
        super(name, id, email)
 
        this.officeNumber = officeNumber;
       
     }
 
     getRole(){
         return "Manager";
     }
 }
 
 module.exports = Manager;