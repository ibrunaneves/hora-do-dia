function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = "#C2D3D7"
        document.body.style.color = "#C2D3D7"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "https://images.pexels.com/photos/416823/pexels-photo-416823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = "#686898"
        document.body.style.color = "#686898"
    } else {
        img.src = "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        document.body.style.background = "#12212A"
        document.body.style.color = "#12212A"
    }
}
