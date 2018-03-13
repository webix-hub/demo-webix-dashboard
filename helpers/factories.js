//factories for widgets
function createVisitorsTemplate(obj){
	obj.body = {
		rows:[
			{ type:"header", template:"Visitors" },
			{ template:"<p class='title'>1.1K</p>", css:"draft" }
		]
	};
	return obj;
};
function createSalesTemplate(obj){
	obj.body = {
		rows:[
			{ type:"header", template:"Sales" },
			{ template:"<p class='title'>23.45K</p>", css:"draft" }
		]
	};
	return obj;
};
function createNewVisTemplate(obj){
	obj.body = {
		rows:[
			{ type:"header", template:"New Visitors" },
			{ template:"<p class='title'>234</p>", css:"draft" }
		]
	};
	return obj;
};
function createActiveVisTemplate(obj){
	obj.body = {
		rows:[
			{ type:"header", template:"Active Visitors" },
			{ template:"<p class='title'>1.09K</p>", css:"draft" }
		]
	};
	return obj;
};
function createElseTemplate(obj){
	obj.body = {
		rows:[
			{ type:"header", template:"Something Else" },
			{ template:"<p class='title'>109K</p>", css:"draft" }
		]
	};
	return obj;
};
function createAreaPieChart(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Sales" },
			{
				view:"chart", type:"pie",
				value :"#sales#",
				shadow: false,
				legend: {
					template:"#code#",
					align:"right",
					valign:"middle"
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
function createPopSplineArChart(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Visitors" },
			{
				view:"chart", type:"splineArea",
				value:"#visitors#",
				xAxis:{
					template:"#code#"
				},
				yAxis:{
					template:function(obj){
						return (obj%20?"":obj)
					}
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
function createPopBarChart(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Visitors" },
			{
				view:"chart", type:"bar",
				value:"#visitors#",
				xAxis:{
					template:"#code#"
				},
				yAxis:{
					template:function(obj){
						return (obj%20?"":obj)
					}
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
function createGeochart(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Sales" },
			{
				view:"geochart",
				chart:{
					colorAxis:{colors:["red","orange","gold","green","blue","indigo","purple"]}
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
function createNetworkGage(obj){
	obj.resize = true;

	var color = function(val){
		if (val < 40) return "green";
		if (val < 80) return "orange";
		return "red";
	};

	obj.body = {
		rows:[
			{ type:"header", template:"Network Usage" },
			{
				view:"gage",
				id:"g1",
				value:36,
				minRange:0,
				maxRange:100,
				color:color,
				data:webix.copy(data)
			}
		]
	};

	setInterval(function(){
		var value = Math.floor(Math.random()*100);
		if ($$("g1"))
			$$("g1").setValue(value);
	}, 1500);

	return obj;
};
function createList(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Countries" },
			{
				view:"list",
				template:"#country#",
				select:true,
				ready:function(){
					this.select(3);
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
function createDatatable(obj){
	obj.resize = true;
	obj.body = {
		rows:[
			{ type:"header", template:"Countries" },
			{
				view:"datatable",
				columns:[
					{id:"id", width:40, header:"#"},
					{id:"code", width:60, header:"Code"},
					{id:"country", fillspace:true, header:"Country"},
					{id:"sales", width:90, header:"Sales"},
					{id:"visitors", width:120, header:"Visitors"}
				],
				select:true,
				scroll: "y",
				ready: function(){
					this.select(3);
				},
				data:webix.copy(data)
			}
		]
	};
	return obj;
};
