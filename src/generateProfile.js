// generates information for the TeamProfile

// function renderEmployeeType(employee) {
//   let chosenEE = employee
//   if (chosenEE === 'Manager') {
//     for (let i = 0; i < questions.length; i [1, 2, 3, 4]);
//   }
//   else {
//     for (let i = 0; i < questions.length; i [0]);
//   }
  
//   console.log(employee);
//   return chosenEE;
// }

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
