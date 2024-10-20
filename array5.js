let a=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"]
let i=0;
 function fun(){

document.images[parseInt(Math.random()*8)].src=a[i];
i++;
if(i>7)
i=0;
setTimeout("fun()",500)
 }