var showVideo = true;
function switchBG(e) {
	showVideo = !showVideo;

	console.log("aa");

	var videoStage = document.getElementById('videoBG');
	var imageBG = document.getElementById('imageBG');
	var contentHolder = document.getElementById('contentHolder');

	// videoStage.style.opacity = showVideo ? 1 : 0;
	// imageBG.style.opacity = showVideo ? 0 : 1;

	contentHolder.style['margin-left'] = showVideo ? '15%' : '-200px';
}