//dice-1
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//dice-2
let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//result
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player-1 Wins 🏁";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player-2 Wins 🏁";
}

else{
    document.querySelector("h1").innerHTML = "Match Draw";
}
