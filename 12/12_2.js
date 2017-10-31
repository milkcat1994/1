function load(files){
	var file=window.URL.createObjectURL(files[0]);
	// image/jpeg or audio/mp3
	var tag=files[0].type.split("/")[0];
	out.innerHTML="<"+tag+" src=\'"+file+"\' width=100% controls allowfullscreen autoplay/>";
}