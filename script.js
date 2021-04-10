// Making sure my console is working correctly: logging cities
var cities= ["boston, philadelphia, new york"]
console.log(cities)

//I want to grab that value and store it
var formEl = $('#city-form');
var CityEl = $('input[name="city-name"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();
  console.log(CityEl.val());

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://http://api.openweathermap.org/data/2.5/weather?q=london&appid=2837134d6be430b022aba1c0c2a00433';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // //Loop over the data to generate a table, each table row will have a link to the repo url
      // for (var i = 0; i < data.length; i++) {
      //   // Creating elements, tablerow, tabledata, and anchor
      //   var createTableRow = document.createElement('tr');
      //   var tableData = document.createElement('td');
      //   var link = document.createElement('a');

      //   // Setting the text of link and the href of the link
      //   link.textContent = data[i].html_url;
      //   link.href = data[i].html_url;

      //   // Appending the link to the tabledata and then appending the tabledata to the tablerow
      //   // The tablerow then gets appended to the tablebody
      //   tableData.appendChild(link);
      //   createTableRow.appendChild(tableData);
      //   tableBody.appendChild(createTableRow);

        getApi()
      }
    );
    
}
}




formEl.on('submit', handleFormSubmit);


