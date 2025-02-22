
// functionafiche resultat
function afficheResulat(score, nombreMot){
    let Score = document.querySelector('.zoneScore  span' )
    let html = `${score}/${nombreMot}`
    Score.innerText = html
}
//funcionc affiche proposition
function afficherproposition(proposition){
    let zoneProposition = document.querySelector('.zoneProposition')
    zoneProposition.innerText = proposition

}
// fonction main 
function lanceJeux(){
    
    let score = 0
    let zoneEcriture = document.getElementById('zoneEcriture')
    let btnValider = document.getElementById('btnValider')
    let i = 0
    let listProposition = listMots
    afficherproposition(listProposition[i])
     btnValider.addEventListener('click',()=>{
        if (zoneEcriture.value === listProposition[i]) {
            score++
        }
        i++
        afficheResulat(score, i)
        zoneEcriture.value = ""
        if (listProposition[i] === undefined) {
            afficherproposition('le jeux est fini ')
            btnValider.disabled = true
        }else{
            afficherproposition(listProposition[i])
        }

     })

     
     let listinputOption = document.querySelectorAll('.zoneOption input')

     for(let index = 0; index < listinputOption.length; index++) {
        listinputOption[index].addEventListener("change",(event)=>{
            zoneEcriture.value = ""
            console.log(event.target.value)
        if(event.target.value === "1"){
            listProposition = listMots
            afficheResulat(score = 0, i=0)
        }else{
            listProposition = listPhrase
            afficheResulat(score = 0, i=0)
        }
        afficherproposition(listProposition[i])
    })
    }

    afficheResulat(score,i)
}


//let inputradio = document.querySelectorAll('.zoneOption input[name="choix"]')

 