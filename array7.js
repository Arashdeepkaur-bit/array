let a =["d1.jpg","d2.jpeg","d3.jpeg","d4.jpeg","d5.png","d6.png"];
    function arash(){
        let n1=parseInt(Math.random()*6);
        h3.innerHTML=[n1+1];
        document.images[1].src=a[n1];
        show();
    }
    function aman(){
        let n=parseInt(Math.random()*6);
        h.innerHTML=[n+1];
        document.images[0].src=a[n];
        show();
    }
        function show(){
        let score1=h.innerHTML;
        let score2=h3.innerHTML;
        let result;
    if(score1>score2){
    result="player1 is winner";
    }
    else if(score1<score2){
    result="player2 is winner";
    } else{
    result="game is drawn" ;
    }
    document.getElementById("h1").innerHTML=result;
        }   