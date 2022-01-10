// generates information for the TeamProfile

function renderEmployeeType(employee) {
  let chosenEE = employee
  if (chosenEE === 'Manager') {
    for (let i = 0; i < questions.length; i [1, 2, 3]);
  }
  else {
    for (let i = 0; i < questions.length; i [0]);
  }
  // else if (chosenLicense === "MIT") {
  //   licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet)"
  // }
  // else if(chosenLicense === "BSD") {
  //   licenseBadge = "![License: BSD](https://img.shields.io/badge/License-BSD-blue)"
  // }
  // // else if(chosenLicense === "None") {
  // // licenseBadge = " "
  // // }
  
  console.log(employee);
  return chosenEE;
}

function generateProfile(data) {
  console.log("USER ANSWERS FROM INDEX.js", data)

  return ` 

    Employee
  ${data.employee}

    ManagerName
  ${data.managerName}

    ManagerID
  ${data.managerId}

    ManagerEmail
  ${data.managerEmail}

    OfficeNumber
  ${data.officeNumber}

  EngineerName
  ${data.engineerName}

    EngineerID
  ${data.engineerId}

    EngineerEmail
  ${data.engineerEmail}

    EngineerGithub
  ${data.engineerGithub}

    InternName
  ${data.internName}

    InternID
  ${data.internId}

    InternEmail
  ${data.internEmail}

    InternSchool
  ${data.internSchool}

`;
}

module.exports = generateProfile;
