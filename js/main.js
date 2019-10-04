/* global d3, barChart, crossfilter */

console.log("works!", d3);

var bcGates = barChart()
  .x(function(d) {
    return d.key;
  })
  .y(function(d) {
    return d.value;
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

  var cs = crossfilter(data);

  var dimGate = cs.dimension(function(d) {
    return d["gate-name"];
  });
  var binGates = dimGate.group();

  console.log("gates=", binGates.all());

  d3.select("#gates")
    .datum(binGates.all())
    .call(bcGates)
    .selectAll(".x.axis .tick text")
    .style("text-anchor", "end")
    .attr("transform", "rotate(-45)");

  d3.select("#carTypes")
    .datum([
      { x: "John", y: 1 }, //Fake data
      { x: "Mafe", y: 5 },
      { x: "Santi", y: 3 }
    ])
    .call(bcCars);

  // console.log("entrance 3 =", count);
});
