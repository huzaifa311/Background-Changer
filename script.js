function changeBackgroundColor() {
    var colors = ["red", "blue", "green", "black", "orange", "pink", "purple", "yellow", "brown", "gold", "blueviolet", "grey", "silver"];
    var randomNumber = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomNumber];
    document.getElementById("box").style.backgroundColor = randomColor;
    document.getElementById("colorname").style.color = randomColor;
    document.getElementById("colorname").innerText = randomColor

}
