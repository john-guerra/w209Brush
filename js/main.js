/* global d3, barChart */



console.log("works!", d3);

var bcGates = barChart()
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  });

var bcCars = barChart()
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  });

d3.csv("./Lekagul_slice.csv", function(err, data) {
  if (err) throw err;

  console.log("Got data", data[0]);

  var count = 0;
  for (var row of data) {
    if (row["gate-name"] === "entrance3") {
      count++;
    }
  }

  d3.select("#gates")
    .datum([
      { x: "uno", y: 1 }, //Fake data
      { x: "dos", y: 5 },
      { x: "tres", y: 3 }
    ])
    .call(bcGates);


  d3.select("#carTypes")
    .datum([
      { x: "uno", y: 1 }, //Fake data
      { x: "dos", y: 5 },
      { x: "tres", y: 3 }
    ])
    .call(bcCars);


  console.log("entrance 3 =", count);
});
