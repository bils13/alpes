let faqIds = []
function faq(id) {
    faqIds.push(id)
    // console.log(id)
    // console.log(faqIds)
    faqIds.length > 2 ? faqIds.pop() : false
    faqIds[0] = faqIds[1]
    faqIds[1] = id
    if(faqIds[1]!=undefined){
        let perguntaAtual = document.querySelector(`#${faqIds[1]}`)
        let respostaAtual = perguntaAtual.querySelector(".faq__answer")
        console.log(perguntaAtual)
        console.log(respostaAtual)
        respostaAtual.style.display = "inline-block"
        let sinalMais = perguntaAtual.querySelector(".sinalMais")
        sinalMais.innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }
    if(faqIds[0]!=undefined){
        faqIds[0]==faqIds[1] ? faqIds[1]=undefined : false  
        let perguntaAnterior = document.querySelector(`#${faqIds[0]}`)
        let respostaAnterior = perguntaAnterior.querySelector(".faq__answer")
        respostaAnterior.style.display = "none"
        let sinalMenos = perguntaAnterior.querySelector(".sinalMais")
        sinalMenos.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }    
}