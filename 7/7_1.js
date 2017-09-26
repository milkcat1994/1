// rate total, win, draw, lose
var t=0, w=0, d=0, l=0;
// result
var r="";
var path="http://rsp.alltheway.kr/images/main/main0";

function view(uc){
	switch(uc){
		case 0: r=path+"1.png";
		break;
		case 1: r=path+"2.png";
		break;
		case 2: r=path+"3.png";
		break;
	}
	return r;
}

// user's function
function play(u){
	// result of Math.random() = 0~1 float number
	var c= parseInt(Math.random()*100)%3;
	usr.src=view(parseInt(u));
	com.src=view(c);
	t++;	tt.innerHTML=t;
	//alert(u+":"+c);
	if(u == c){
		r="무";
		d++;	dd.innerHTML=d;
	}
	else if(((u+1)%3) == c){
		r="패";
		l++;	ll.innerHTML=l;
	}
	else{
		r="승";
		w++;	ww.innerHTML=w;
	}
	// result.innerHTML=r;
	// alert(u+":"+c+"="+r);
}
