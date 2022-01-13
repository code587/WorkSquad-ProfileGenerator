const generateTeamProfile = team => {

console.log("TEAM FROM INDEX.js", team)
// break each type of employee into bootstrap cards and use back ticks ` and ${engineer.getGitHub()}`
const generateManager = (manager)=>{
  return `
  <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h2 class="card-title">Manager</h2>
      <ul>Contact Info</ul>
        <li class="contactDetails">Name: ${manager.getName()}</li>
        <li class="contactDetails">ID: ${manager.getId()}</li>
        <li class="contactDetails">Email: ${manager.getEmail()}</li>
        <li class="contactDetails">OfficeNumber: ${manager.getOfficeNumber()}</li>
    </div>
</div>
  `
}
const generateEngineer = (engineer)=>{
  return `
  <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Engineer</h2>
            <ul>Contact Info</ul>
              <li class="contactDetails">Name: ${engineer.getName()}</li>
              <li class="contactDetails">ID: ${engineer.getId()}</li>
              <li class="contactDetails">Email: ${engineer.getEmail()}</li>
              <li class="contactDetails">Github address: ${engineer.getGithub()}</li></div>
        </div>
  </div>
    `
}
const generateIntern = (intern)=>{
  return `
  <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">Intern</h2>
            <ul>Contact Info</ul>
              <li class="contactDetails">Name: ${intern.getName()}</li>
              <li class="contactDetails">ID: ${intern.getId()}</li>
              <li class="contactDetails">Email: ${intern.getEmail()}</li>
              <li class="contactDetails">Education: ${intern.getSchool()}</li>
         </div>
  </div>
  `
}
}

module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${generateTeamProfile(team)};
</body>
</html>
  `
}
