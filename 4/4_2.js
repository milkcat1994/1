function load(files){
	var ftype=files[0].type.split("/")[0];
	// alert(ftype);
	var filesrc=window.URL.createObjectURL(files[0])
	var tmp="<"+ftype+" src='"+filesrc+"' id='"+ftype+"' width=100% autoplay controls/>";
	alert(tmp);
	multi.innerHTML=tmp;
}