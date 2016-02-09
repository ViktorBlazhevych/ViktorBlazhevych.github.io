//function lesson_1_a() {
	var num, pow, result;


	do {
		num = +prompt("Enter number", 0);
	}
	while(isNaN(num) || (num == 0));



	do {
		pow = Math.ceil(prompt("Enter pow", 0));
	}
	while(isNaN(pow));


	

	if(pow == 0){
		result = 1;
	}
	else if(pow == 1){
		result = num
	}
	else {
		result = powPlus(num, Math.abs(pow), 1)
		if(Math.sign(pow) == -1){
			result = 1/result;
		}
	}

	alert(num + " ^ " + pow + " = " + result + " :: Math.pow(" + num +  ", " + pow + ") = " + Math.pow(num, pow))
	
	function powPlus(n, p, r){
		return (p > 1) ? powPlus(n, p-1, r*n) : r*n;
	}









//}

function lesson_1_b() {
	var arr = [];
	for(var i = 0; i < 5; i++) {
		var str = (prompt("Enter " + (i + 1)+ "th Name")).trim()
		if(str){
			arr.push(str);
		} else {
			i--;
		}
	}

	var ask;
	do {
		ask = (prompt("Enter Name from request")).trim()
	}
	while(!ask);

	if(~arr.indexOf(ask)){
		alert("Ok - it's right! Corrent array is: " + arr.toString());
	}	
	else{
		alert("No :( Corrent array is: " + arr.toString());
	}
}
