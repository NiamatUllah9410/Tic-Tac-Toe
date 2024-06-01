let boxs = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-game');
let newGameBtn = document.getElementById('new-game-btn');
let resetGameBtn = document.getElementById('reset-game-btn');
let msgContaineer = document.getElementsByClassName('msg-winner-containeer');
let winnerPlayer = document.getElementById('winner');

let turn0 =true; //player0, playerx

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

// Reset Game
function resetGame() {
    turn0 = false;
    enableBox();
    for (let container of msgContaineer) {
        container.classList.add('hide');
    }
}

// dissable box
function disableBox() {
    for(let box of boxs){
        box.disabled = true;
    }
}

// enable box
function enableBox() {
    for(let box of boxs){
        box.disabled = false;
        box.innerText ="";
        box.style.backgroundColor = 'white';
    } 
    
}

// gitting values
boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0) {
            box.innerHTML = 'o';
            box.style.backgroundColor = '#548587';
            box.style.color = '#ff7b4b';
            turn0 = false;
        } else {
             box.innerHTML = 'x';
             box.style.backgroundColor = '#92dbdd';
            turn0 = true;        
        }

        box.disabled = true;
        winPlayer();
    });
});

function gameWinner(winner){
    winnerPlayer.innerHTML = `Congratulation, Winner is ${winner}`;
    for (let container of msgContaineer) {
        container.classList.remove('hide');
        disableBox();
}
}

// Draw the game
function checkDraw() {
    for (let box of boxs) {
        if (box.innerText === '') {
            return false;
        }
    }
    return true;
}

function winPlayer() {
    for(let pattren of winPatterns){


        const index1Val = boxs[pattren[0]].innerText;
        const index2Val = boxs[pattren[1]].innerText;
        const index3Val = boxs[pattren[2]].innerText;


        if(index1Val !=  "" && index2Val != "" && index3Val !="")
        if(index1Val === index2Val && index2Val ===index3Val){
            gameWinner(index1Val);
            return;

        }


    //     console.log(pattren[0], pattren[1], pattren[2]);
    //     console.log(boxs[pattren[0]].innerText, boxs[pattren[1]].innerText, boxs[pattren[2]].innerText);
    }


  // Check for a draw
  if (checkDraw()) {
    winnerPlayer.innerHTML = "It's a Draw!";
    for (let container of msgContaineer) {
        container.classList.remove('hide');
        disableBox();
    }
}
}

resetGameBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);
