const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = function () {

  const employees = [];

  let keepGoing = true;


  while (keepGoing) {

    const firstName = prompt("Enter the employees first name:");
    const lastName = prompt("Enter the employees last name:");
    let salary = prompt("Enter the employees salary:");


    if (isNaN(salary)) {
      salary = 1;
    }


    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };


    employees.push(employee);


    keepGoing = confirm("Are there any more employees?");
  }


  return employees;
}


const displayAverageSalary = function (employeesArray) {
  let grossSalary = 0;
  const numEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    grossSalary += employee.salary;
  }


  const averageSalary = grossSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`)
}

const getRandomEmployee = function (employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}



const displayEmployees = function (employeesArray) {
  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';


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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

addEmployeesBtn.addEventListener('click', trackEmployeeData);
