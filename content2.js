console.log('Content2.js loaded');

$.get("https://sheets.googleapis.com/v4/spreadsheets/1NVko06OxHn7I0O74ln8SnGGpUAUSLr8RSIRMbHbTVMs/values/Sheet1", function(data){
  console.log("Data: " + data);
});