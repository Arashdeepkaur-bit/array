function fun(){
    const a=["green","red","pink","teal","orange"]
    for(i=0;i<5;i++){
        const b=parseInt(Math.random()*5)
        document.write("<font color="+a[b]+">")
            document.write("hello world"+"<br>")
        
    }

}