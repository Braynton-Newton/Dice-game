function mainFunction(){
    var randomNum = Math.floor((Math.random()*6)+1);
    var randomNum2 = Math.floor((Math.random()*6)+1);
    if(randomNum == 1){
        document.getElementsByClassName("img1")[0].src = "images/dice1.png"
    }    
    else if(randomNum == 2){
        document.getElementsByClassName("img1")[0].src = "images/dice2.png"
    }
    else if(randomNum == 3){
        document.getElementsByClassName("img1")[0].src = "images/dice3.png"
    }
    else if(randomNum == 4){
        document.getElementsByClassName("img1")[0].src = "images/dice4.png"
    }
    else if(randomNum == 5){
        document.getElementsByClassName("img1")[0].src = "images/dice5.png"
    }
    else if(randomNum == 6){
        document.getElementsByClassName("img1")[0].src = "images/dice6.png"
    }
    if(randomNum2 == 1){
        document.getElementsByClassName("img2")[0].src = "images/dice1.png"
    }    
    else if(randomNum == 2){
        document.getElementsByClassName("img2")[0].src = "images/dice2.png"
    }
    else if(randomNum == 3){
        document.getElementsByClassName("img2")[0].src = "images/dice3.png"
    }
    else if(randomNum == 4){
        document.getElementsByClassName("img2")[0].src = "images/dice4.png"
    }
    else if(randomNum == 5){
        document.getElementsByClassName("img2")[0].src = "images/dice5.png"
    }
    else if(randomNum == 6){
        document.getElementsByClassName("img2")[0].src = "images/dice6.png"
    }

    if(randomNum == randomNum2){
        document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Draw Try Again!"
    }
    else if(randomNum > randomNum2){
        document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "🍎 Player 1 Wins"
    }
    else if(randomNum < randomNum2){
        document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 2 Wins 🍏"
    }
}