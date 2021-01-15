// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log("Hello");
  
//  create the variables
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//Populate data.js date into HTML
var populatedata = (dataInput) => {
  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}
populatedata(data);


