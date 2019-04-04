var grade = d3.json("classData.json");
var margin = {
	left: 40,
	right: 20,
	top: 20,
	bottom: 20
}
grade.then(function (data) {
	var test1 = data.map(function (d) {
		return d.test[0].grade;
	});
	var width = 500;
	var height = 500;
	var xScale = d3.scaleLinear()
		.domain([0, 22])
		.range([margin.left, width + margin.left]);
	var yScale = d3.scaleLinear()
		.domain([0, 100])
		.range([height + margin.top, margin.top]);

	var line = d3.line()
		.x(function (d, i) {
			return xScale(i)
		})
		.y(function (d) {
			return yScale(d)
		})
	var svg = d3.select("#test1")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

	svg.append("path")
		.datum(test1)
		.classed("testline", true)
		.attr("d", line);
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
	svg.append("g")
		.classed("testxAxis", true)
		.call(xAxis)
		.attr("transform", "translate(0," + (margin.top + height) + ")");
	svg.append("g")
		.classed("testyAxis", true)
		.call(yAxis)
		.attr("transform", "translate(" + margin.left + ",0)");
	svg.selectAll("circle")
		.data(test1)
		.enter()
		.append("circle")
		.attr("cx", function (d, i) {
			return xScale(i);
		})
		.attr("cy", function (d) {
			return yScale(d);
		})
		.attr("r", 5);
}, function (err) {
	console.log(err);
});

grade.then(function (data) {
	var test2 = data.map(function (d) {
		return d.test[1].grade;
	});
	var width = 500;
	var height = 500;
	var xScale = d3.scaleLinear()
		.domain([0, 22])
		.range([margin.left, width + margin.left]);
	var yScale = d3.scaleLinear()
		.domain([0, 100])
		.range([height + margin.top, margin.top]);

	var line = d3.line()
		.x(function (d, i) {
			return xScale(i)
		})
		.y(function (d) {
			return yScale(d)
		})
	var svg = d3.select("#test2")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

	svg.append("path")
		.datum(test2)
		.classed("testline", true)
		.attr("d", line);
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
	svg.append("g")
		.classed("testxAxis", true)
		.call(xAxis)
		.attr("transform", "translate(0," + (margin.top + height) + ")");
	svg.append("g")
		.classed("testyAxis", true)
		.call(yAxis)
		.attr("transform", "translate(" + margin.left + ",0)");
	svg.selectAll("circle")
		.data(test2)
		.enter()
		.append("circle")
		.attr("cx", function (d, i) {
			return xScale(i);
		})
		.attr("cy", function (d) {
			return yScale(d);
		})
		.attr("r", 5);
}, function (err) {
	console.log(err);
});
grade.then(function (data) {
	var final = data.map(function (d) {
		return d.final[0].grade;
	});

	var width = 500;
	var height = 500;
	var xScale = d3.scaleLinear()
		.domain([0, 22])
		.range([margin.left, width + margin.left]);
	var yScale = d3.scaleLinear()
		.domain([0, 100])
		.range([height + margin.top, margin.top]);

	var line = d3.line()
		.x(function (d, i) {
			return xScale(i)
		})
		.y(function (d) {
			return yScale(d)
		})
	var svg = d3.select("#final")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

	svg.append("path")
		.datum(final)
		.classed("testline", true)
		.attr("d", line);
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisLeft(yScale);
	svg.append("g")
		.classed("testxAxis", true)
		.call(xAxis)
		.attr("transform", "translate(0," + (margin.top + height) + ")");
	svg.append("g")
		.classed("testyAxis", true)
		.call(yAxis)
		.attr("transform", "translate(" + margin.left + ",0)");
	svg.selectAll("circle")
		.data(final)
		.enter()
		.append("circle")
		.attr("cx", function (d, i) {
			return xScale(i);
		})
		.attr("cy", function (d) {
			return yScale(d);
		})
		.attr("r", 5);
}, function (err) {
	console.log(err);
});