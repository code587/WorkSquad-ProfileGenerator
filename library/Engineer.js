

class Engineer extends Employee{
  
    // `github`&mdash;GitHub username

    // * `getGithub()`
    
    // * `getRole()`&mdash;overridden to return `'Engineer'`

    constructor(name, id, email, githubUsername){
       super(name, id, email)

       this.githubUsername = githubUsername;

    }

    getGithub(){
        return this.Github;
    }

    getRole(){
        return "Engineer";
    }
}