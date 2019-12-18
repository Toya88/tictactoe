var winner = document.getElementById('message');

var playerTurn = 1;
var inputs = document.querySelectorAll('.box');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
        game(this);
    });
    
};

function game(input) {
    if (winner.innerText == 'Winner') {
        winStatement = false;
    }
    if (input.innerText !== ""){
        return;
    };
    if (playerTurn == 1) {
        input.innerText = 'X';
        playerTurn = 0;
    } else {
        input.innerText = 'O';
        playerTurn = 1;
    }
    
    var one = document.querySelector('[data-index="1"]').innerText;
    var two = document.querySelector('[data-index="2"]').innerText;
    var three = document.querySelector('[data-index="3"]').innerText;
    var four = document.querySelector('[data-index="4"]').innerText;
    var five = document.querySelector('[data-index="5"]').innerText;
    var six = document.querySelector('[data-index="6"]').innerText;
    var seven = document.querySelector('[data-index="7"]').innerText;
    var eight = document.querySelector('[data-index="8"]').innerText;
    var nine = document.querySelector('[data-index="9"]').innerText;

    function Wins() {
        var first = 'X';
        var second = 'O';
        
        if (winner.innerText == 'X wins!' || winner.innerText == 'O wins!') {
            return;
        }

        let win = [
            [one,two,three],
            [four,five,six],
            [seven,eight,nine],
            [one,four,seven],
            [two,five,eight],
            [three,six,nine],
            [one,five,nine],
            [seven,five,three]
        ]
        
        for (const i of win) {
           
            if (win[0][0,1,2] == 'X' ) {
                winner.innerText = 'Winner';
            } 
            
        
        };  
      
    };
    Wins();
    
};
// winner statement - that turns winner.innerText = You win

//exist game when win prints to the dom


