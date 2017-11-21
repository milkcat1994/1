var device;
var drawing = false;
var canvas;
var context;
var rect;
var Width=screen.availWidth;
var Height=screen.availHeight;
var image = document.getElementById('img').addEventListener('change', imgLoad);
function sendsms(t,m){
 //alert ( t + ":" + m);

location . href = " sms:" + t + "? &body= " + m;
}
function sh(){
 if(menu.style.display==="none"){
 menu.style.display="block";
 }else{
 menu.style.display="none";
 }
}
function imgLoad(e) {
var cvs = document.getElementById('myCanvas');
var ctx=cvs.getContext('2d');
var img = new Image();
img.src = URL.createObjectURL(e.target.files[0]);
img.onload = function() {
cvs.width=img.width=Width;//img.width;
cvs.height=Height;//img.height;
ctx.drawImage(img, 0,0,cvs.width,cvs.height);
};
}
function imgSave(){
var imgFileName=document.getElementById('imgSaveAs').value;
var cvs = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var image=cvs.toDataURL('image/png');
var imageFileAsBlob = new Blob([image],{type:'image/png'});
var link = document.createElement('a');
link.download = imgFileName;
link.href = cvs.toDataURL();
//link.href=window.URL.createObjectURL(imageFileAsBlob);
link.click();
}
function initialize() { //alert(screen.availHeight);
canvas.width=Width;
canvas.height=Height;
context.clearRect(0,0,Width,Height);
context.beginPath();
context.rect(0,0,Width,Height);
context.strokeStyle = "silver";
context.fillStyle = "LightGoldenrodYellow";
context.fill();
context.lineWidth = 0.5;
for(i=1;(i*50)<=Height;i++) {
context.moveTo(5,i*50);
context.lineTo(Width-5, i*50);
}
context.stroke();
}
function startDrawing() {
if (device == "moblieDevice") event.preventDefault();
event.preventDefault();
drawing = true;
context.beginPath();
context.strokeStyle = selcolor.value;//"dimgray";
//context.lineWidth = 1;
//context.arc(event.clientX - rect.left, event.clientY - rect.top, 3, 0, 2*Math.PI);
context.stroke();
context.fillStyle = "dimgray";
context.fill();
context.closePath();
context.beginPath();
context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
context.lineCap = "round";
context.lineWidth = selwidth.value;

}
function keepDrawing() {
if (drawing) {
var x,y;
if (device == "mobileDevice") {
x = event.targetTouches[0].pageX;
y = event.targetTouches[0].pageY;
}
else {
x = event.clientX;
y = event.clientY;
}
context.lineTo(x - rect.left, y - rect.top);
context.stroke();
}
}
function stopDrawing() {
if (drawing) {
context.stroke();
drawing = false;
}
}
function save() {
var localStorage = window.localStorage;
if (!localStorage) {
// local storage is not supported by this browser.
// do nothing
}
else {
localStorage.canvas = canvas.toDataURL();
}
}
function restore() {
var localStorage = window.localStorage;
if (!localStorage) {
// local storage is not supported by this browser.
// do nothing
}
else {
var img = new Image();
img.src = localStorage.canvas;
img.onload = function() {
context.drawImage(img, 0, 0);
};
}
}
function getDeviceType() {
var str = navigator.userAgent;
if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
device = "mobileDevice";
else
device = "desktopPC";
}
function startMemo() {
canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
rect = canvas.getBoundingClientRect();
initialize();
}
getDeviceType();
document.body.onload = startMemo;
dom = document.getElementById("myCanvas");
// for desktop PC
dom.ontouchstart = startDrawing;
dom.ontouchmove = keepDrawing;
dom.ontouchend = stopDrawing;
// for mobile devices
dom.onmousedown = startDrawing;
dom.onmousemove = keepDrawing;
dom.onmouseup = stopDrawing;