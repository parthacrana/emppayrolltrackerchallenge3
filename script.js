// }===================================================================================================================
// // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data from user input 
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addAnotherEmployee = true;

  while(addAnotherEmployee){
    const firstName = prompt("Enter employees first name:")
    const lastName = prompt("Enter employees last name:")
    let salary = prompt("Enter employees salary:")
  
/* Convert salary to a number seperated by commas, must be a number, number format  */
    salary = isNaN(Number(salary)) ? 0 : Number(salary);

/* This is to create an employee object -- key value pairs */
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

/* Adds employees details to the array */
    employeesArray.push(employee);

/* Ask user if they want to add another employee */
    const continueAdding = confirm("Do you want to add another employee?")
    if (!continueAdding){
      addAnotherEmployee = false;
    }
}
return employeesArray;
}

// Display the average salary of all employees, depending on number of employees entered by user
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

/* Logs average employee salary to console with required message */
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${(totalSalary / employeesArray.length).toLocaleString(undefined, {maximumFractionDigits: 2})}`);
}

// Select a random employee for the random drawing contest -- math.floor to round down, math.random to pick a random value 
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

// function toTitleCase(str){                                -- was trying to convert first and last names to proper case format (personal interest)
//   return str.replace(
//     text => text.chart(0).toUpperCase() + text.substring(1).toLowerCase()
//   );
// }

/* Logs random employee to the console with the required message for acceptance criteria -- random drawing contest */
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}  , our random drawing winner!`);
  
/* Sort employees alphabetically by last name           sort ato b?? formatting question in office hours */    
// confused on this one -- feedback appreciated 

// employeesArray.sort() 
  
}


/*                DONT TOUCH CODE BELOW 
  =========================================================================================================================================================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
