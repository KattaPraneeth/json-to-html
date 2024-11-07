export default function json2html(data) {
  const tableHeader = `<table data-user="kattapraneeth288@gmail.com">
  <thead>
    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
  </thead>
  <tbody>`;
  
  const tableRows = data.map(item => 
    `<tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender}</td></tr>`
  ).join('');
  
  const tableFooter = `</tbody></table>`;
  
  return tableHeader + tableRows + tableFooter;
}
