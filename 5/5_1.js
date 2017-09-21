function login(i, p){
	alert(i+"\n"+p);
}

function select(s){
	alert(s);
}

function radio(r){
	alert(r+"학년");
}

function checkbox(h){
	// alert(h.length);
	var temp="";
	for(var i=0; i<h.length; i++){
		temp += (h[i].checked) ? h[i].value : "";
	}
	alert(temp);
}

function textarea(t){
	alert(t);
}