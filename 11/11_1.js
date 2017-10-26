
function multi(m){
	var temp="";
	var a=[m];		//1차원 배열 선언

	for(i=0; i<m; i++){
		a[i]=[m];	//2차원 배열 선언
		for(j=0; j<m; j++){
			if(i===0){//check i is 0
				if(j===0){//check j is 0
					a[i][j]=m+"x"+m+"단";
				}
				else{//j!=0
					a[i][j]=(j+1)+"단";
				}//end if j
			}
			else{//i!=0
				a[i][j]=(i+1)+"x"+(j+1)+"="+(i+1)*(j+1);
			}//end if i
			temp+=a[i][j]+"\t";	//tab
		}//end for j
		temp+="\n";	//newLine
	}//end for i
	ta.value=temp;
}//end function multi