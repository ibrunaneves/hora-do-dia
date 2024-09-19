function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "Imagens/manha.png"
        document.body.style.background = "#C2D3D7"
        document.body.style.color = "#C2D3D7"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "Imagens/tarde.png"
        document.body.style.background = "#686898"
        document.body.style.color = "#686898"
    } else {
        img.src = "Imagens/noite.png"
        document.body.style.background = "#12212A"
        document.body.style.color = "#12212A"
    }
}