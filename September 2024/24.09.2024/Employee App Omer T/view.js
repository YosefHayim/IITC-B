// Displays the list of employees and provides UI for adding, editing, and deleting employees.
const employeeListElement = document.querySelector(".employee-list");


function showAllEmployees(employeeList,createUniqueId) {
  for (let i = 0; i < employeeList.length; i++) {
    const employee = employeeList[i];

    const employeeItem = document.createElement("li");
    employeeItem.classList.add(`${createUniqueId()}`);

    employeeItem.innerHTML = `
    <div class="employee-info">
      <label>Profile Image:</label>
      <p class="profile-image">${employee.profileImage}</p>
      <label>First Name:</label>
      <p class="first-name">${employee.firstName}</p>
      <label>Last Name:</label>
      <p class="last-name">${employee.lastName}</p>
      <label>Age:</label>
      <p class="age">${employee.age}</p>
      <label>Start Date:</label>
      <p class="start-date">${employee.startDate}</p>
      <label>Department:</label>
      <p class="department">${employee.department}</p>
      <label>Salary:</label>
      <p class="salary">${employee.salary}</p>
    </div>
    <div class="action-buttons">
      <button class="delete-button">Delete</button>
      <button class="edit-button">Edit</button>
      <button class="update-button">Update</button>
    </div>
  `;

    employeeListElement.append(employeeItem);
  }
}

export { showAllEmployees };