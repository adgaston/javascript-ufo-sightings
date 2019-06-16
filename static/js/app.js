// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element & get node
    var inputElement = d3.select("#datetime");

    // Get value property of input element
    var inputValue = inputElement.property("value");

    // Get filtered Data
    var filteredData = tableData.filter(table => table.datetime === inputValue);

    // Run filterTable function
    filterTable(filteredData);
});

function filterTable(filteredData) {
    var tbody = d3.select("tbody");
    var trow;
    var datetime = filteredData.map(table => table.datetime);
    var city = filteredData.map(table => table.city);
    var state = filteredData.map(table => table.state);
    var country = filteredData.map(table => table.country);
    var shape = filteredData.map(table => table.shape);
    var duration = filteredData.map(table => table.durationMinutes);
    var comments = filteredData.map(table => table.comments);
    for (var i = 0; i < filteredData.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(datetime[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(duration[i]);
        trow.append("td").text(comments[i]);
    }
}