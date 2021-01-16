// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log("Hello");
  
//  create the variables
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var button2 = d3.select("#reset-btn");
var inputFieldDate = d3.select("#datetime");
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


// Creating an Event Listener for the Button and set up filter for date
button.on("click", () => {

    d3.event.preventDefault();
    
    var inputDate = inputFieldDate.property("value").trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
// add date filter to table
    tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        populatedata(filterDate);
    }
    
        else {
            tbody.append("tr").append("td").text("No Sightings on date selected - try again");
        }
})

//create reset button
button2.on("click", () => {
    d3.event.preventDefault();
    tbody.html("");
    populatedata(data)
  })