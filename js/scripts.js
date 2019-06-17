//Business Logic
function Pizza(topping, size, crust) {
	this.topping=topping;
	this.size=size;
	this.size=crust;
}
Pizza.prototype.pizzaCost=function() {
	var cost=0;
	if (this.topping==="topping1") {
		cost+=100;
	}
	else if (this.topping==="topping2") {
		cost+=250;
	}
	else if (this.topping==="topping3") {
		cost+=300;
	}
	else if (this.topping==="toppings4"){
		cost+=400;
	}

	if (this.crust==="crust1") {
		cost+=50;
	}
	else if(this.crust==="crust2") {
		cost+=100;
	}
	else if(this.crust==="crust3") {
		cost+=150;
	}
	if (this.size==="small") {
		cost+=550;
	}
	else if (this.size==="medium") {
		cost+=700;
	}
	else if (this.size==="large") {
		cost+=900;
	}
	return cost;
} //User Logic
$(document).ready(function() {
	$("#pizza").submit(function(event) {
		event.preventDefault();
		var nameInput=$("#name").val();
		var toppingInput=$("#topping").val();
		var crustinput=$("#crust").val();
		var sizeInput=$("#size").val();
		var newPizza=new Pizza(toppingInput, crustinput, sizeInput);
		$(".cost-show").show();
		$(".name").text(nameInput);
		$(".price").text(newPizza.pizzaCost());
		$("#name").val("");
	}
	);
}
);