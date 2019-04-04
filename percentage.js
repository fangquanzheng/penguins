var w = 300;
var h = 300;
var r = Math.min(w, h) / 2;

var color = d3.scaleOrdinal(d3.schemeSet3);

var data = [{
		"label": "Quizzes",
		"value": 15
	},
	{
		"label": "Homework",
		"value": 15
	},
	{
		"label": "Test-1",
		"value": 20
	},
	{
		"label": "Test-2",
		"value": 20
	},
	{
		"label": "Final",
		"value": 30
	}
];

var svg = d3
	.select("#piechart")
	.attr("width", w)
	.attr("height", h);

var arc = d3.arc()
	.innerRadius(0)
	.outerRadius(r);

var pie = d3.pie()
	.sort(null)
	.value(function (d) {
		return d.value;
	})(data);

var arcs = svg.append("g").selectAll("arc")
	.data(pie)
	.enter()
	.append("g")
	.attr("class", "arc");

arcs.append("path")
	.attr("d", arc)
	.attr("fill", function (d, i) {
		return color(i)
	})
arcs.append("text")
	.attr("transform", function (d) {
		innerRadius = 0;
		outerRadius = r;
		return "translate(" + arc.centroid(d) + ")";
	})
	.attr("text-anchor", "middle")
	.text(function (d, i) {
		return data[i].label;
	})
	.attr("x", 0)
	.attr("y", "0em");
arcs.append("text")
	.attr("transform", function (d) {
		innerRadius = 0;
		outerRadius = r;
		return "translate(" + arc.centroid(d) + ")";
	})
	.attr("text-anchor", "middle")
	.text(function (d, i) {
		return data[i].value;
	})
	.attr("x", -5)
	.attr("y", "1.4em");
arcs.append("text")
	.attr("transform", function (d) {
		innerRadius = 0;
		outerRadius = r;
		return "translate(" + arc.centroid(d) + ")";
	})
	.attr("text-anchor", "middle")
	.text(function (d, i) {
		return "%";
	})
	.attr("x", 13)
	.attr("y", "1.4em");