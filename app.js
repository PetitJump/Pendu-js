const t1 = document.getElementById('t1')
const b1 = document.getElementById('submit')
const msg = document.getElementById('msg')
const vies = document.getElementById('vie')
const ecrire_mot = document.getElementById('ecrire_mot')
const image = document.getElementById('image')

t1.addEventListener('focus', vide)
b1.addEventListener('click', greet)


const mot = ['f', 'l', 'e', 'u', 'r']
let mot_final = ['_', '_', '_', '_', '_']
const nb_lettre = []
let pv = 10
ecrire_mot.textContent = `Mot : ${mot_final}`
vies.textContent = `Nombre de vie restantes : ${pv}`

function vide(){
    this.value = ''
}
function greet(){
    if (mot.includes(t1.value)){
        mot_final[mot.indexOf(t1.value)] = t1.value
    }
    else{nb_lettre.push(t1.value);pv -= 1}
    if (pv > 0){
        vies.textContent = `Nombre de vie restantes : ${pv}`
        msg.textContent = `Voici les lettres fausses : ${nb_lettre.toString()}`
        ecrire_mot.textContent = `Mot : ${mot_final}`
    }
    else{vies.textContent = "Vous avez perdu"}
    if (mot_final.includes('_')){}
    else{vies.textContent = "Bravo vous avez gagner !"} 
    if (pv == 9){image.src = "images/2.png"}
    else if (pv == 8){image.src = "images/3.png"}
    else if (pv == 7){image.src = "images/4.png"}
    else if (pv == 6){image.src = "images/5.png"}
    else if (pv == 5){image.src = "images/6.png"}
    else if (pv == 4){image.src = "images/7.png"}
    else if (pv == 3){image.src = "images/8.png"}
    else if (pv == 2){image.src = "images/9.png"}
    else if (pv == 1){image.src = "images/10.png"}
    else if(pv < 1) {image.src = "images/11.png"}
    t1.focus()
}