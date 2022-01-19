const Employee = require("./Employee")

class Manager extends Employee {
//constructor function for manager and its individual property as well as the ones shared with the employee
    constructor(name, id, email, officeNumber){
        super(name, id, email)
 
        this.officeNumber = officeNumber;
       
     }

     getOfficeNumber(){
         return this.officeNumber;
     }
 
     getRole(){
         return "Manager";
     }
 }
 
 module.exports = Manager;