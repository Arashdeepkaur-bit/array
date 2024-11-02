let a =["d1.jpg","d2.jpeg","d3.jpeg","d4.jpeg","d5.png","d6.png"];
let b=[];
let c=[];
let sum=0;
let sum1=0;
    function aman(){
       
        let n=parseInt(Math.random()*6);
        document.images[0].src=a[n];
        b.push(n+1);
        t1.innerHTML=b[0]
        t2.innerHTML=b[1]
        t3.innerHTML=b[2]
        t4.innerHTML=b[3]
        t5.innerHTML=b[4]
        t6.innerHTML=b[5]
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
        T1.innerHTML=c[0];
        T2.innerHTML=c[1];
        T3.innerHTML=c[2];
        T4.innerHTML=c[3];
        T5.innerHTML=c[4];
        T6.innerHTML=c[5];
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
    else{
    result="player2 is winner";
    }
    document.getElementById("h1").innerHTML=result;
        }   