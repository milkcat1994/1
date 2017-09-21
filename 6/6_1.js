function fms(t, s){
	// ? : android & : iphone
	location.href="sms:"+t+"?body="+s;
    
	location.href="sms:"+t+"&body="+s;
}

function phone(p){
	location.href="tel:"+p;
}

function range(r){
	rv.innerHTML = r;
}

function color(c){
	document.body.style.backgroundColor=c;
}

function pp(){
	if(v.paused){
		v.play();
		// button : innerHTML
		// b.innerHTML="| |";
		// input : value
		b.value="| |";
	}
	else{
		v.pause();
		// b.innerHTML="▶";
		b.value="▶";
	}
}

function load(files){
	v.src = window.URL.createObjectURL(files[0]);
}