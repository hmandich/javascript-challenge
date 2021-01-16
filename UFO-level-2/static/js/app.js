// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log("Hello");
  
//  create the variables
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var button2 = d3.select("#reset-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldstate = d3.select("#state");
var inputFieldcountry = d3.select("#country");
var inputFieldshape = d3.select("#shape");
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


// Creating an Event Listener for the Button and set up filter for date,city,state,county,shape, need to use lowercase
button.on("click", () => {

    d3.event.preventDefault();
    
    var inputDate = inputFieldDate.property("value").trim();
    var inputcity = inputFieldCity.property("value").toLowerCase().trim();
    var inputstate = inputFieldstate.property("value").toLowerCase().trim();
    var inputcountry = inputFieldcountry.property("value").toLowerCase().trim();
    var inputshape = inputFieldshape.property("value").toLowerCase().trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filtercity = tableData.filter(tableData => tableData.city === inputcity);
    var filterstate = tableData.filter(tableData => tableData.state === inputstate);
    var filtercountry = tableData.filter(tableData => tableData.country === inputcountry);
    var filtershape = tableData.filter(tableData => tableData.shape === inputshape);
    var filterData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputcity && tableData.state === inputsate && tableData.county === inputcountry && tableData.shape === inputshape);

// add date filter to table
    tbody.html("");

    let response = {
        filterData, filterDate, filtercity, filterstate, filtercountry, filtershape
    }

    if(response.filterData.length !== 0) {
        populatedata(filterData);
    }

    else if (response.filterData.length === 0 && ((response.filterDate.length !== 0 || response.filtercity.length !== 0 || response.filterstate.length !== 0 || response.filtercountry.length !== 0 || response.filtershape.length !== 0))){
        populatedata(filterDate) || populatedata(filtercity) || populatedata(filterstate) || populatedata(filtercountry) || populatedata(filtershape);
    }
    // Top if only works for filtering the dates
    
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