window.onload = function(){
window.genCard= function(){
    var suit = ["♥","♠","♣","♦"];
    var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        function randomCard(){ 
            var randomSuit = suit[Math.floor(Math.random()*suit.length)];
            var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
            document.querySelector(".iconOne").innerHTML = randomSuit;
            document.querySelector(".cardLetterContainer").innerHTML = randomNumber;
            document.querySelector(".iconTwo").innerHTML = randomSuit;
            if (randomSuit=="♥" || randomSuit=="♦"){
                document.querySelector("#maincontainer").style.color = "red";
            }
            else if (randomSuit=="♠" || randomSuit=="♣"){
                document.querySelector("#maincontainer").style.color = "black";
            }
        }
    randomCard();
    };
    window.genCard();
};