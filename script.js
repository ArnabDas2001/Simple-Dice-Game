
function play(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/face" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/face" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
} 
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
}
else{
    document.querySelector("h1").innerHTML = "🏳️ Draw! 🏳️";
}

}