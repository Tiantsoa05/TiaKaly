var btnMenu=document.querySelector("#btnMenu")

btnMenu.addEventListener("click",function(){
    var menu=document.querySelector(".menu")
    var boisson=document.querySelector(".boisson")
    var titreMenu=document.querySelector(".titreMenu")
    boisson.style="display:none"
    menu.style="display:flex"
    titreMenu.style.display="none"
    document.querySelector(".titreMenu").style="display:block"
})

var btnBoisson=document.querySelector("#btnBoisson")

btnBoisson.addEventListener("click",function(){
    var boisson=document.querySelector(".boisson")
    var menu=document.querySelector(".menu")
    menu.style="display:none"
    boisson.style="display:flex"
    document.querySelector(".titreMenu").style="display:none"
    document.querySelector(".titreBoisson").style="display:block"
})

/**
 * Prendre les donnees
 */
window.onload=()=>{
    fecthMenu()
    fecthBoisson()
}
var menus=document.querySelector('.menu')
var boissons=document.querySelector('.boisson')

function fecthMenu(){
    fetch("http://localhost/restaurant/index.php?type=listage&data=menu")
    .then(response=>{
        response.json().then(r=>{
            console.log(r)
            r.forEach(d => {
                var cadre=document.createElement('div')
                cadre.classList.add('cadre')
                var titre=document.createElement('h2')
                titre.innerHTML=d.nomMenu //NOMMENU
                cadre.appendChild(titre)
                menus.appendChild(cadre)
                var image=document.createElement('img')
                image.setAttribute('src',"images/"+d.nomMenu.toLowerCase().split(' ').join('_')+'.jpg')
                cadre.appendChild(image)
                var prix=document.createElement('p')
                prix.innerHTML='PRIX:'+d.prix
                var recette=document.createElement('div')
                var listRecette=document.createElement('ul')
                listRecette.classList.add('liste')
                var recetteArray=d.listeRecette.split(',')
                recetteArray.forEach(l=>{
                    var indice=document.createElement('li')
                    indice.innerHTML=l
                    listRecette.appendChild(indice)
                })
                recette.appendChild(listRecette)
                cadre.appendChild(prix)
                cadre.appendChild(recette)
                var nombre=document.createElement('input')
                nombre.setAttribute('type','number')
                nombre.setAttribute('min','1')
                nombre.placeholder='nombre'
                cadre.appendChild(nombre)
                var commander=document.createElement('button')
                commander.innerHTML="C"
                commander.addEventListener('click',function(event){
                    console.log(nombre.value)
                    if(nombre.value===""){
                        alert("Vous devez spécifier la quantité à commander")
                    }else{
                  
                        fetch('http://localhost/restaurant/index.php?type=commande&id='+d.idMenu+"&quantite="+nombre.value)
                        .then(reponse=>{
                            console.log(reponse)
                            fetch('http://localhost/restaurant/index.php?type=listage&data=commande')
                            .then(response=>{
                                response.json().then(d=>{
                                    console.log(d)
                                    var clc=document.querySelector('.liste_commande')
                                    
                                    clc.style.display="block"
                                    var data=d
                                    if(data.length>0){
                                        var l=document.querySelector('#liste')
                                        l.innerHTML=""
                                        d.forEach(commande=>{
                                            var liL=document.createElement('li')
                                            liL.innerHTML=commande.designation
                                            l.appendChild(liL)
                                        })
                                    }
                                })
                            })
                        }).catch(error=>{
                            console.log(error)
                        })

                    }
                })
                cadre.appendChild(commander)
            });
        })
    })
}
function fecthBoisson(){
    fetch("http://localhost/restaurant/index.php?type=listage&data=boisson")
    .then(response=>{
        response.json().then(r=>{
            console.log(r)
            r.forEach(d => {
                var cadre=document.createElement('div')
                cadre.classList.add('cadre')
                var titre=document.createElement('h2')
                titre.innerHTML=d.nomBoisson //NOMMENU
                cadre.appendChild(titre)
                boissons.appendChild(cadre)
                var image=document.createElement('img')
                image.setAttribute('src',"images/"+d.nomBoisson.toLowerCase().split(' ').join('_')+'.jpg')
                cadre.appendChild(image)
                var prix=document.createElement('p')
                prix.innerHTML='PRIX:'+d.prixBoisson
                cadre.appendChild(prix)
                var nombre=document.createElement('input')
                nombre.setAttribute('type','number')
                nombre.setAttribute('min','1')
                nombre.placeholder='nombre'
                cadre.appendChild(nombre)
                var commander=document.createElement('button')
                commander.innerHTML="C"
                commander.addEventListener('click',function(){

                    if(nombre.value!==""){
                        alert('commande envoyé pour '+d.nomBoisson)
                    }else{
                        alert('Vous devez spécifier la quantité à commander')
                    }
                    
                })
                cadre.appendChild(commander)
            });
        })
    })
}

var btnValidCommand=document.querySelector('#validCommand')
btnValidCommand.addEventListener('click',function(event){
    const formCommand=document.querySelector('.formCommand')
    let target=event.target
    let source=target.parentNode
    source.style.display="none"
    formCommand.style="margin-top:-15vh"
})
const btnValidForm=document.querySelector('#btnValidForm')
btnValidForm.addEventListener('click',(event)=>{

    fetch('http://localhost/restaurant/index.php?type=resetCommand')
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log({
            error:error
        })
    })

    let target=event.target
    let source=target.parentNode.parentNode
    
    console.log(source)
    source.style="margin-top:-150vh"

    event.preventDefault()
})