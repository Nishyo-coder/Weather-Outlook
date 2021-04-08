// api.openweathermap.org/data/2.5/weather?q=london&appid=2837134d6be430b022aba1c0c2a00433

// http://api.openweathermap.org/data/2.5/weather?q=london&appid=2837134d6be430b022aba1c0c2a00433

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=2837134d6be430b022aba1c0c2a00433'
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
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
        // }
      });
  }
  getApi();