const generateTeamProfile = team => {

console.log("TEAM FROM INDEX.js", team)
//bootstrap card layout for the manager, engineer and intern role
const generateManager = (manager)=>{
  return `
  <div class="jumbotron jumbotron-fluid">Software Engineering Team</div>
    <div class="column">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Manager  📋</h2>
            <ul></ul>
              <li class="nameDetail">Name: ${manager.getName()}</li>
              <li class="contactDetails">ID: ${manager.getId()}</li>
              <li class="contactDetails">Email:  <a href="mailto:${manager.getEmail()}">  ${manager.getEmail()}</a></li>
              <li class="contactDetails">OfficeNumber: ${manager.getOfficeNumber()}</li>
        </div>
      </div>
    </div>
  </div>
  `
}
const generateEngineer = (engineer)=>{
  return `
  <div class="row row-cols-1 row-cols-md-2 g-4">  
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Engineer</h2>
            <ul></ul>
              <li class="contactDetails">Name: ${engineer.getName()}</li>
              <li class="contactDetails">ID: ${engineer.getId()}</li>
              <li class="contactDetails">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
              <li class="contactDetails">Github address: <a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></li>
        </div>
      </div>
    </div>
  </div>
  `
}
const generateIntern = (intern)=>{
  return `
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Intern</h2>
            <ul></ul>
              <li class="nameDetail">Name: ${intern.getName()}</li>
              <li class="contactDetails">ID: ${intern.getId()}</li>
              <li class="contactDetails">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
              <li class="contactDetails">Education: ${intern.getSchool()}</li>
        </div>
      </div>
    </div>
  </div>
  `
}

  const html = [];
//filters the role to prompt questions for the appropriate role and push it to the html
  html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));

  html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));

  html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""));

  return html.join("");
}

module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"
</head>
<body>
${generateTeamProfile(team)};
</body>
</html>
  `;
}
