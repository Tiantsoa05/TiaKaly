document.body.addEventListener("load",function(){
    var images=document.querySelector(".fond_accueil>img")
    var table=["imags.jpg","index.jpg","salade_de_pâtes.jpg","minesao.jpg","fond.jpg","salade.jpg","salades.jpg"]
    let i=0
    setInterval(()=>{
        images.style.opacity="0"
        setTimeout(()=>{images.setAttribute("src","images/"+table[i])},1000)
        images.style.opacity="1"
        if (i<table.length){
            i++
        }else{
            i=0
        }
        
        console.log(table[i])
    },3000)
}())