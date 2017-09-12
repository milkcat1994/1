
var site = "";
// arrary value
var path = [];
// setting default search path
path[1] = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";
path[2] = "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=";
path[3] = "https://search.daum.net/nate?thr=sbma&w=tot&q=";
path[4] = "https://www.google.co.kr/search?source=hp&q=";
path[5] = "https://www.youtube.com/results?search_query=";
path[6] = "https://www.youtube.com/embed?autoplay=1&listType=search&list=";

function paths(s){
  site = path[s];
  // alert(site);
}

function search(q){
	location.href = site+q;
	// alert(q);
}

function load(s, f){
	location.href = "https://www.google.com/maps/dir/"+s+"/"+f;
}