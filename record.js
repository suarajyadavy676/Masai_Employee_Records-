// fill in javascript code here
const employeeForm = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');

employeeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const employeeID = document.getElementById('employeeID').value;
  const department = document.getElementById('department').value;
  const exp = document.getElementById('exp').value;
  const email = document.getElementById('email').value;
  const mbl = document.getElementById('mbl').value;
  let role = 'Trainee';

  if (exp > 5) {
    role = 'Senior';
  } else if (exp >= 2) {
    role = 'Junior';
  }

  if (name && employeeID && department && exp && email && mbl) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${employeeID}</td>
      <td>${department}</td>
      <td>${exp}</td>
      <td>${email}</td>
      <td>${mbl}</td>
      <td>${role}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    employeeList.appendChild(newRow);

    // Clear form inputs
    employeeForm.reset();
  } else {
    alert('Please fill in all the fields.');
  }
});

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
