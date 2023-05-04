
//var movies = new Array("RRR","Bahubali","Acharya");
/*var movies = [
{
	names:"hero",
	director:"jhgj",
},
{
	names:"ntr",
	director:"rajamouli",
},
{
	name:"charan",
	director:"dfes"
}
];
console.log(movies);*/

/*var movies = ["RRR","Bahubali","Acharya"];
//var elementAdding = movies.push("sarainodu");
//console.log(movies);
var elementDeleting = movies.pop();
console.log(movies);*/


function arrayImplementation(){
	//alert("helo");
	/*var cars = ["innova","benz","skoda","bmw","rangerover"];
	var cars1 = new Array("innova","benz","skoda","bmw","rangerover");
	console.log(cars[1]);
	console.log(cars.length);*/
	for(var i=150; i>=100; i--){
		if((i%10) === 0){
			console.log("multiple of 10",i);
		}
	}
};


function addThreeNumbers(){
	//alert("helo");
	var a = 1;
	var b = 2;
	var c = 3;
	var result = (a + b + c);
	console.log("addition:",result);
}

function subTwoNumbers(){
	//alert("helo");
	var a = 5;
	var b = 3;
	var result = (a - b);
	console.log("substraction:",result);
}


function months(){
	var monthsList =  ["january","February","March","April","May","June","July","Augues","September","October","Nov","December"];
	console.log("Months List:",monthsList);
}
