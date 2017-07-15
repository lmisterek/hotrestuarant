// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var table = require("./tableData.js");
//var waitingListData = require("waitListData.js");

// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;
//var port = process.env.PORT || 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation (DATA)
// =============================================================
//  var reservations = [{
//   name: "Bob Jones",
//   phoneNumber: "555-555-5555",
//   email: "sherry.fake@gmail.com",
// uniqueId: "12"
// }];

// var tableData = require("../data/tableData")

// }, {
//   name: "LeeAnna",
//   phoneNumber: "9999999999",
//   email: "LeeAnna.fake@gmail.com",
//   uniqueId: 14
// }];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));

});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
  console.log("here");
});


// Get all reservations
app.get("/all", function(req, res) {
  res.json(reservations);
});

app.get("/api/tables", function(req, res) {
  console.log(table);
  res.json(table);
  
});

// app.get("/api/waitList", function(req, res) {
//   res.json(waitingListData);
// });

// Post Requests
app.post("/api/tables", function(req, res) {
  // res.json(table);
  var availability = true;
  console.log(req.body);
  var newReservation = req.body;
  console.log(newReservation);

  var waitlist = [];

 if(table.length >= 5) {
    availability = false;
    waitlist.push(newReservation);
 //   res.json(push())
 }
  else {
   table.push(newReservation);

  }

 console.log(waitlist);
// console.log(table.tableArray);
 res.json(availability);
});

// app.post("/api/waitList", function(req, res) {
//   res.json(waitingListData);
// });




// Search for Specific Reservation (or all reservations) - provides JSON
// app.get("/api/:reservations?", function(req, res) {
//   var chosen = req.params.reservations;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
