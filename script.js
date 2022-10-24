//varáveis globais
let arrayComparar=[]
let NaoClicaDuasVezes=[]
let arrayImagens=[]
let arrayItem=[]
let arrayGifs=[]
let rodadas=0;
let todasAsCartas=[]
let quantidadeCartas;
let tempo;
//fim das variáveis globais


 quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
while(quantidadeCartas<4 || quantidadeCartas>14 || quantidadeCartas%2!==0){
    alert('Número de cartas inválidos');
    quantidadeCartas= Number(prompt("Com quantas cartas irá jogar? (números pares de 4 á 14)"));
}


const cartas=["fiestaparrot", "fiestaparrot",
              "bobrossparrot","bobrossparrot",
              "explodyparrot","explodyparrot",
              "metalparrot","metalparrot",
              "unicornparrot","unicornparrot",
              "tripletsparrot","tripletsparrot",
              "revertitparrot","revertitparrot"]
cartas.length=quantidadeCartas
cartas.sort(comparador)
let jogo= document.querySelector("ul")
let contador=0
while (quantidadeCartas>contador){
jogo.innerHTML+=`<div class="carta" onclick="virarCarta(this), setTimeout(acertouOuErrou, 1050, this)">
<li> <img class="imagem" src="imagens/back.png"/> </li>
<li> <img class="gif carta${contador} escondido" id="${cartas[contador]}" src="imagens/${cartas[contador]}.gif"/> </li>
</div>`
contador++
}


function virarCarta(item) {
    const cartaFrente=item.querySelector("img")
    setTimeout (()=>cartaFrente.classList.add("escondido"), 0600)
    item.classList.add("virada")
    const cartaGif=item.querySelector(".gif")
    setTimeout (()=>cartaGif.classList.remove("escondido"), 0600)
    }


function acertouOuErrou(item){
    if (!item.classList.contains("naoDesviraMais")){
    let qualCarta = item.querySelector(".gif").id
    arrayComparar.push(qualCarta)

    let cartaImagem = item.querySelector(".imagem")
    arrayImagens.push(cartaImagem)

    let cartaGif = item.querySelector(".gif")
    arrayGifs.push(cartaGif)
    arrayItem.push(item)
    }
    console.log(item)

    if(arrayComparar.length==2){
     let carta1= arrayComparar[0]
     let carta2= arrayComparar[1]
     let arrayImagens1= arrayImagens[0]
     let arrayImagens2= arrayImagens[1]
     let arrayGifs1= arrayGifs[0]
     let arrayGifs2= arrayGifs[1]
     let arrayItem1= arrayItem[0]
     let arrayItem2= arrayItem[1]

     //para desvirar quando clica duas vezes na mesma carta
    if(arrayItem1===arrayItem2){
        setTimeout (()=> arrayImagens1.classList.remove("escondido"), 0600)
        setTimeout (()=> arrayGifs1.classList.add("escondido"), 0600)
           arrayItem1.classList.remove("virada")
           rodadas=rodadas+1
           array=[]
    }


     if(carta1 !== carta2 ){
     setTimeout (()=> arrayImagens1.classList.remove("escondido"), 0600)
     setTimeout (()=> arrayImagens2.classList.remove("escondido"), 0600)
     setTimeout (()=> arrayGifs1.classList.add("escondido"), 0600)
     setTimeout (()=> arrayGifs2.classList.add("escondido"), 0600)
        arrayItem1.classList.remove("virada")
        arrayItem2.classList.remove("virada")
        rodadas=rodadas+2
     }
     else if(carta1 === carta2 & arrayItem1!==arrayItem2){
        arrayItem1.classList.add("naoDesviraMais")
        arrayItem2.classList.add("naoDesviraMais")
        todasAsCartas.push(arrayItem1)
        todasAsCartas.push(arrayItem2)
        rodadas=rodadas+2
     }
     arrayComparar=[]
     arrayImagens=[]
     arrayGifs=[]
     arrayItem=[]
     carta1=undefined
     carta2=undefined
    }
}


const fim= setInterval(Finalizar, 1)
function Finalizar(){
if (todasAsCartas.length==quantidadeCartas && todasAsCartas.length!=0){
    clearInterval(relogio)
    alert(`Parabéns 🎉🎊 você ganhou em ${rodadas} rodadas \n e com um tempo de ${tempo} segundos 🦜🎉`)
    let jogarDeNovo= prompt("Deseja jogar novamente? (digite 'sim' ou 'não')")
    while (jogarDeNovo !== "sim" && jogarDeNovo !== "não"){
    jogarDeNovo= prompt("Deseja jogar novamente? (digite 'sim ou 'não')")
    }
    if (jogarDeNovo==="sim"){
        location.reload()
    }
    clearInterval(fim)
}
}

const relogio= setInterval(tempoJogo, 1000)
function tempoJogo(){
     tempo= document.querySelector(".timer")
    tempo= tempo.innerHTML=Number(tempo.innerHTML)+1
}

function comparador() { 
    return (Math.random() - 0.5) }
