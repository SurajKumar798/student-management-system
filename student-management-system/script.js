let filterStudents = [...studentList];

window.onload = () => {
    renderTable(filterStudents);
};

function renderTable(data){
     const tableBody = document.getElementById('body-element');
     tableBody.innerHTML = '';

     data.forEach((studentList) => {
        const table = document.createElement('tr');

        table.innerHTML = `
         <td>${studentList.id}</td>
         <td>${studentList.first_name} ${studentList.last_name}</td>
         <td>${studentList.gender}</td>
         <td>${studentList.class}</td>
         <td>${studentList.marks}</td>
         <td>${studentList.passing? "Passing" : "Failed"}</td>
         <td>${studentList.email}</td>
        `;
        tableBody.appendChild(table);
     });
}
function searchStudents(){
    const value = document.getElementById('search-box').value.toLowerCase();
    filterStudents = studentList.filter((student) => 
        `${student.first_name} ${student.last_name} ${student.email}`.toLowerCase().includes(value)
    );
    renderTable(filterStudents);
}
function sortAZ(){
    filterStudents.sort((a, b) => 
     `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`)
    );
    renderTable(filterStudents)
}
function sortZA(){
    filterStudents.sort((a, b) => 
     `${b.first_name} ${b.last_name}`.localeCompare(`${a.first_name} ${a.last_name}`)
    );
    renderTable(filterStudents)
}
function sortByMarks(){
    filterStudents.sort((a, b) => a.marks - b.marks);
    renderTable(filterStudents)
}
function sortByPassing(){
    filterStudents = studentList.filter((student) => student.passing);
    renderTable(filterStudents);
}
function sortByClass(){
    filterStudents.sort((a, b) => a.class - b.class);
    renderTable(filterStudents);
}
function sortByGender(){
    const males = studentList.filter((student => student.gender === "Male"));
    const females = studentList.filter((student => student.gender === "Female"));

    const tabelContainer = document.getElementById('studentTable');
    tabelContainer.innerHTML = `
     <h2>Male Students</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Marks</th>
          <th>Passing</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody id="maleBody"></tbody>
    </table>
    <h2>Female Students</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Marks</th>
          <th>Passing</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody id="femaleBody"></tbody>
    </table>
    `;
    renderGenderTable("maleBody", males);
    renderGenderTable("femaleBody", females);
}
function renderGenderTable(id, data){
    const body = document.getElementById(id);
    body.innerHTML = "";
    data.forEach((studentList) => {
        const table = document.createElement("tr");
        table.innerHTML = `
         <td>${studentList.id}</td>
         <td>${studentList.first_name} ${studentList.last_name}</td>
         <td>${studentList.gender}</td>
         <td>${studentList.class}</td>
         <td>${studentList.marks}</td>
         <td>${studentList.passing ? "Passing" : "Failed"}</td>
         <td>${studentList.email}</td>
        `;
        body.appendChild(table);
    });
}