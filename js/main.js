/* global d3 */

console.log("works!", d3);


d3.csv("./Lekagul_slice.csv", function (err, data) {
  if (err) throw err;

  console.log("Got data", data[0]);

  var count = 0;
  for (var row of data) {
    if (row["gate-name"] === "entrance3") {
      count++;
    }
  }

  console.log("entrance 3 =" , count);

});