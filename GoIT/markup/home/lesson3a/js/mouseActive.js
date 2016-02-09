

function mouseEvent(e) {
	var hiddenBlock = document.getElementById("hiddenBlock");

	console.log( hiddenBlock + "   --- " + e.type + "   " + e.target+ "   " +  e.clientX  + "  " + e.clientY );
	if(!hiddenBlock){
		return
	}

	if(e.type == "mouseover"){
		hiddenBlock.style.display = "block";
	}
	else if(e.type == "mouseout"){
		hiddenBlock.style.display = "none";
	}
	else  if(e.type == "mousemove"){
		hiddenBlock.style.top = e.clientY - 50 + "px"
		hiddenBlock.style.left = e.clientX - 30 + "px"
	}
}