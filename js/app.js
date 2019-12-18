var winner = document.getElementById('message');

var playerTurn = 1;
var inputs = document.querySelectorAll('.box');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
        game(this);
    });
    
};

function game(input) {
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
          
        if (one == two && two == three && three == first) {
            winner.innerText = 'X wins!';
                console.log(one, two, three);
                
                return;
        } else if (one == two && two == three && three == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;    
         } else if (one == four && four == seven && seven == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (one == four && four == seven && seven == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;    
        } else if (four == five && five == six && six == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (four == five && five == six && six == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        } else if (seven == eight && eight == nine && nine == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (seven == eight && eight == nine && nine == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        } else if (two == five && five == eight && eight == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (two == five && five == eight && eight == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        } else if (three == six && six == nine && nine == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (three == six && six == nine && nine == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        } else if (one == five && five == nine && nine == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (one == five && five == nine && nine == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        } else if (seven == five && five == three && three == first) {
            winner.innerText = 'X wins!';
                console.log('win');
                return;
        } else if (seven == five && five == three && three == second) {
            winner.innerText = 'O wins!';
                console.log('win');
                return;
        }
       
    };
    Wins();
    
};
// winner statement - that turns winner.innerText = You win

//exist game when win prints to the dom