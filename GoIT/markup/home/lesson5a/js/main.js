function setColoredBG(event){
	var mytd = document.getElementsByTagName('td');
	for (i=0; i<mytd.length; i++){
		td = mytd[i];
		var div = td.children[0];
		if(div){
			
			// div.children[0].style.backgroundColor = getRandomColor();
			// div.children[0].addEventListener("mouseover", mouseHandler);
			// div.children[0].addEventListener("mouseout", mouseHandler);
		}
		td.setAttribute("customColor", getRandomRGBAColor());
		td.style.backgroundColor = td.getAttribute("customColor");
		td.removeEventListener("mouseover", mouseHandler);
		td.removeEventListener("mouseout", mouseHandler);
		td.addEventListener("mouseover", mouseHandler);
		td.addEventListener("mouseout", mouseHandler);
	}

	// ЭТОТ ВАРИАНТ КОНЕЧНО ЖЕ ПРАКТИЧНЕЙ 
	// var cols =     document.getElementsByClassName('cell');
	// for(i=0; i<cols.length; i++) {
	// 	cols[i].style.backgroundColor = getRandomColor();
	// }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomRGBAColor() {
    // return 'rgba('+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+', 1.0)' ;
	return 'rgba('+Math.floor(Math.random() * 50)+', ' + (Math.floor(Math.random() * 50) + 60) +', ' + (Math.floor(Math.random() * 50) + 30) +', 1.0)' ;

}

function mouseHandler(event){
	console.log(event.target )
	//event.target.style.opacity = ((event.type=="mouseout") ? '1' : '0' );
	event.target.style.backgroundColor = ((event.type=="mouseout") ? event.target.getAttribute("customColor") : event.target.getAttribute("customColor").replace(/, 1.0\)/, ", 0.0)") );
	//TweenLite.to(event.target, 1, {opacity: ((event.type=="mouseout") ? 1 : 0 )});
}