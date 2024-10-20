function show(){
    const a=[12,3,4,56,7,8,9,80]
    const b=[]
    for(i=0;i<8;i++){
     b.push(a.pop())
    }
    document.write(b.toString())
    document.write("<br>")
    document.write(b.sort())
    document.write("<br>")
    document.write(b.reverse())

}