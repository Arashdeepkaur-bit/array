let a =["d1.jpg","d2.jpeg","d3.jpeg","d4.jpeg","d5.png","d6.png"];
let b=[];
let c=[];
let sum=0;
let sum1=0;
    function aman(){
        let n=parseInt(Math.random()*6);
        document.images[0].src=a[n];
        b.push(n+1);
        console.log(n+1)
        for( let i=0;i<b.length;i++){
            sum=sum+b[i]
            h.innerHTML=sum;
                 }
                 console.log(sum)
        show();
    }
    function arash(){
        let n=parseInt(Math.random()*6);
        document.images[1].src=a[n];
        c.push(n+1);
        for( let i=0;i<c.length;i++){
            sum1=sum1+c[i]
            h3.innerHTML=sum1;
                 }
                 console.log(sum)
        show();
    }
        function show(){
        let b=h3.innerHTML;
        let c=h.innerHTML;
        let result;
    if(sum>sum1){
    result="player1 is winner";
    }
    else if(sum<sum1){
    result="player2 is winner";
    } else{
    result="game is drawn" ;
    }
    document.getElementById("h1").innerHTML=result;
        }   
