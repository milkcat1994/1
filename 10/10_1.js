var wt="234567892345"; //weight
var sn ="";

function check(){
	var temp=0;
	sn = sn1.value + sn2.value;
	//alert(sn);
	for(i=0; i<12; i++){
		temp += parseInt(wt.substr(i,1))*parseInt(sn.substr(i,1));
	}
	temp = temp%11;	//1)
	temp = 11-temp;	//2)
	temp = temp%10;	//3)
	alert(temp);
}
//str.substr(start,end); <-substring function