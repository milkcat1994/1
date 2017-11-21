var path="http://jsbin.com/";
var temp="";
var a=["과제선택","lubayaw","gifalad","suyumuf","kazogoh","cevohi","xomexe","dojoyu","vuponev","milisa","ratafez","codesiq","loxigit","mixeqev","wugulut","tiqufeq","zowepof","qogaga","badiyut"];

function init(){
	for(i=0; i<a.length; i++){
		if(i!==0){
			temp+="<option value='"+a[i]+"' />과제"+i+"번째";
		}else{
			temp+="<option value='' />"+a[i];
		}
	}//for i
	report.innerHTML=temp;
}

function load(jsid){
	iframe.src=path+jsid;
}