var grade = d3.json("classData.json");
var w = 500;
var h = 500;
var margin = {
	left: 20,
	right: 20,
	top: 20,
	bottom: 20
}
grade.then(function (data) {
	var xScale = d3.scaleLinear()
		.domain([0, 40])
		.range([margin.left, h + margin.left]);
	var yScale = d3.scaleLinear()
		.domain([0, 50])
		.range([h + margin.top, margin.top]);
	var svg = d3.select("#line")
		.attr("width", w + margin.left + margin.right)
		.attr("height", h + margin.top + margin.bottom);
	var line = d3.line()
		.x(function (d) {
			return xScale(d.day, 10);
		})
		.y(function (d) {
			return yScale(d.grade, 10);
		});
	svg.append("path")
		.datum(data[9].homework)
		.classed("line", true)
		.attr("d", line)
		.attr("fill", "none")
		.attr("stroke", "#51A8DD")
		.attr("stroke-width", 2);
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
	svg.append("g")
		.classed("xAxis", true)
		.call(xAxis)
		.attr("transform", "translate(" + margin.left + "," + (margin.top + h) + ")");
	svg.append("g")
		.classed("yAxis", true)
		.call(yAxis)
		.attr("transform", "translate(" + (margin.left + margin.right) + ",0)");
	svg.selectAll("circle")
		.data(data[9].homework)
		.enter()
		.append("circle")
		.attr("cx", function (d) {
			return xScale(d.day, 10);
		})
		.attr("cy", function (d) {
			return yScale(d.grade, 10);
		})
		.attr("r", "3")
		.attr("fill", "black")
		.on("mouseover", function (d) {
			d3.select("#tooltip1")
				.style("left", w + margin.left + margin.right + 300)
				.style("top", 150)
				.select("#grade1")
				.text(d.grade);
			d3.select("#day1")
				.text(d.day)
			d3.select("#tooltip1").classed("hidden", false);
		})
		.on("mouseout", function () {
			d3.select("#tooltip1").classed("hidden", true);
		});
}, function (err) {
	console.log(err);
})

grade.then(function (data) {
	var xScale = d3.scaleLinear()
		.domain([0, 40])
		.range([margin.left + margin.right - 10, h + margin.left]);
	var yScale = d3.scaleLinear()
		.domain([0, 10])
		.range([h + margin.top, margin.top]);
	var svg = d3.select("#line2")
		.attr("width", w + margin.left + margin.right)
		.attr("height", h + margin.top + margin.bottom);
	var line = d3.line()
		.x(function (d) {
			return xScale(d.day, 10);
		})
		.y(function (d) {
			return yScale(d.grade, 10);
		});
	svg.append("path")
		.datum(data[9].quizes)
		.classed("line", true)
		.attr("d", line)
		.attr("fill", "none")
		.attr("stroke", "#51A8DD")
		.attr("stroke-width", 2);;
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
	svg.append("g")
		.classed("xAxis", true)
		.call(xAxis)
		.attr("transform", "translate(" + (margin.left - 10) + "," + (margin.top + h) + ")");
	svg.append("g")
		.classed("yAxis", true)
		.call(yAxis)
		.attr("transform", "translate(" + (margin.left + margin.right) + ",0)");
	svg.selectAll("circle")
		.data(data[9].quizes)
		.enter()
		.append("circle")
		.attr("cx", function (d) {
			return xScale(d.day, 10);
		})
		.attr("cy", function (d) {
			return yScale(d.grade, 10);
		})
		.attr("r", "3")
		.attr("fill", "black")
		.on("mouseover", function (d) {
			//var x = parseFloat(d3.select(this).attr("cx"));
			//var y = parseFloat(d3.select(this).attr("cy"));
			d3.select("#tooltip2")
				.style("left", w + margin.left + margin.right + 300)
				.style("top", 200 + h + margin.top + margin.bottom)
				.select("#grade2")
				.text(d.grade);
			d3.select("#day2")
				.text(d.day)
			d3.select("#tooltip2").classed("hidden", false);
		})
		.on("mouseout", function () {
			d3.select("#tooltip2").classed("hidden", true);
		});
}, function (err) {
	console.log(err);
})