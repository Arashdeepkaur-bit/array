let a=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"]
let b=[];
let d=[];
let sum=0;
function show(){
// aa.innerHTML="Array:"+a[n];
let  n= parseInt(Math.random()*8)
aa.innerHTML="Array:"+a[n];
ak.innerHTML="Number: " +[n];
    document.images[0].src=a[n];
 b.push(n+1)
console.log(b)
  for( let i=0;i<b.length;i++){
sum=sum+b[i]
aq.innerHTML="Sum:"+sum;

     }
     console.log(sum)
}
function show1(){
let  n= parseInt(Math.random()*8)
ad.innerHTML= "Number:"+[n];
ab.innerHTML="Array:"+a[n];
    document.images[1].src=a[n];
 d.push(n+1)
console.log(d)
  for( let i=0;i<d.length;i++){
sum=sum+d[i]
as.innerHTML="Sum:"+sum;
     }
     console.log(sum)
}
