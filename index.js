//
var div1 = document.querySelector('.grid-item-1');
var div2 = document.querySelector('.grid-item-2');
var div3 = document.querySelector('.grid-item-3');
var div4 = document.querySelector('.grid-item-4');
var div5 = document.querySelector('.grid-item');
var div6 = document.querySelector('.grid-item-6');
var div7 = document.querySelector('.grid-item-7');
var div8 = document.querySelector('.grid-item-8');
var div9 = document.querySelector('.grid-item-9');
var divC = document.querySelector('.grid-container');
let restartButton = document.getElementById('restart');
let ai = 'X';
var win = 3;
var vin = 3;
var dia = 3;
var dig = 3;
var draw = 0;
let it = 0;
let ii = 0;
let jj = 0;
restartButton.onclick = restartGame;
div1.onclick = X;
div2.onclick = X;
div3.onclick = X;
div4.onclick = X;
div5.onclick = X;
div6.onclick = X;
div7.onclick = X;
div8.onclick = X;
div9.onclick = X;


var count = 0;
const ticTacToe = [[div1, div2, div3], [div4, div5, div6], [div7, div8, div9]];

function X(){
    count += 1;
    if(count % 2 == 0){
        if(this.innerHTML == ""){
            this.innerHTML = "O";
            let move = [];
            move = nextBestMove();
            console.log(move);
            ticTacToe[ii][jj].innerHTML = "X";
            count += 1;
        }        
    } 
    else{
        // if(this.innerHTML == ""){
        //     this.innerHTML = "X";
        // }
        let move = [];
        move = nextBestMove();
        console.log("move[0");
            ticTacToe[ii][jj].innerHTML = "X";
              
    } 

    let result = checkWin(ticTacToe);
    //console.log("result: ", result);
    if (result !=null){
        document.querySelector('#won').innerHTML = result;
        strike();
        stopGame();
    }
}

function checkWin(ttt){
    win = 3;
    vin = 3;
    dia = 3;
    dig = 3;
    draw = 0;
    for(it = 0; it < 3; it++){
        for(let j = 0; j < 3; j++){
            console.log("it ", it, "j ", j);
            win += (ttt[it][j].innerHTML === "X") ? 1 : ((ttt[it][j].innerHTML === "O") ? -1 : 0);
            vin += (ttt[j][it].innerHTML === "X") ? 1 : ((ttt[j][it].innerHTML === "O") ? -1 : 0);
        }

        dia += (ttt[it][it].innerHTML === "X") ? 1 : ((ttt[it][it].innerHTML === "O") ? -1 : 0);
        dig += (ttt[it][2 - it].innerHTML === "X") ? 1 : ((ttt[it][2 - it].innerHTML === "O") ? -1 : 0);
        
        if (dia === 6 || dia === 6 || win === 6 || vin === 6) {
            return "X won!";
        } 
        
        else if (dig === 0|| dig === 0 || win === 0 || vin === 0) {
            return "O won!";
        }

        win = 3;
        vin = 3;
    } 

    if (ttt.flat().every(cell => cell.innerHTML != "")) {
        console.log("Draw: it's a draw!");
        return "it's a draw!";
    }

    return null;
}

function strike(){
    if(win == 6){
        //variableName = "win"
        for(let j = 0; j < 3; j++){
            //console.log('it worked');
            ticTacToe[it][j].classList.add('strikethrough');
        }
    }
    else if(vin == 6){
        for(let j = 0; j < 3; j++){
            //console.log('it worked');
            ticTacToe[j][it].classList.add('strikethroughv');
        }
    }
    else if(dia == 6){
        for(let j = 0; j < 3; j++){
            //console.log('it worked45');
            ticTacToe[j][j].classList.add('strikethroughd');
            console.log(j);
        }
    }
    else if(dig == 6){                
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                if(k + j == 2){
                    //console.log('it worked');
                    ticTacToe[j][k].classList.add('strikethroughs');
                }
            }                    
        }
    }

    else if(win == 0){
        for(let j = 0; j < 3; j++){
            //console.log('it worked');
            ticTacToe[it][j].classList.add('strikethrough');
        }
    }
    else if(vin == 0){
        for(let j = 0; j < 3; j++){
            //console.log('it worked');
            ticTacToe[j][it].classList.add('strikethroughv');
        }
    }
    else if(dia == 0){
        for(let j = 0; j < 3; j++){
            //console.log('it worked');
            ticTacToe[j][j].classList.add('strikethroughd');
        }
    }
    else if(dig == 0){                
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                if(k + j == 2){
                    //console.log('it worked');
                    ticTacToe[j][k].classList.add('strikethroughs');
                }
            }                    
        }
    }
}

function stopGame(){
    //console.log("stopGame");
    div1.onclick = null;
    div2.onclick = null;
    div3.onclick = null;
    div4.onclick = null;
    div5.onclick = null;
    div6.onclick = null;
    div7.onclick = null;
    div8.onclick = null;
    div9.onclick = null;
}

function restartGame(){

    //console.log("restarting game");

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            ticTacToe[i][j].innerHTML = "";
            ticTacToe[i][j].classList.remove('strikethrough');
            ticTacToe[i][j].classList.remove('strikethroughv');
            ticTacToe[i][j].classList.remove('strikethroughd');
            ticTacToe[i][j].classList.remove('strikethroughs');
        }
    }
    div1.onclick = X;
    div2.onclick = X;
    div3.onclick = X;
    div4.onclick = X;
    div5.onclick = X;
    div6.onclick = X;
    div7.onclick = X;
    div8.onclick = X;
    div9.onclick = X;

    count = 0;
    document.querySelector('#won').innerHTML = "";
}


function nextBestMove(){
    let bestScore = -Infinity;
    let bestMove;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(ticTacToe[i][j].innerHTML == ""){
                ticTacToe[i][j].innerHTML = "X";
                let alpha = -Infinity;
                let beta = Infinity;
               // let bestMove = minimax(board, 0, true, alpha, beta);
                let score = minimax(ticTacToe, 0, false, alpha, beta);
                ticTacToe[i][j].innerHTML= "";
                if(score > bestScore){
                    ii = i;
                    jj = j;
                    bestMove = [i, j];
                }
                bestScore = Math.max(score, bestScore);
                
            }
        }
    }

    return bestMove;
}

let scores = {
    "X won!": 1,
    "O won!": -1,
    "it's a draw!": 0
}

function minimax(board, depth, isMaximising, alpha, beta){
    console.log("hiiii", scores["it's a draw!"]);
    let result = checkWin(board);
    console.log("result ", result);
    if(result != null){
        return scores[result];          
    }

    if(isMaximising){
        console.log("depth ", depth);
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j].innerHTML == ""){
                    board[i][j].innerHTML = "X";
                    // if(depth > 1){
                    //     board[i][j].innerHTML = "";
                    //     return bestScore;
                    // }
                    let score = minimax(board, depth + 1, false, alpha, beta);
                    board[i][j].innerHTML = "";
                    bestScore = Math.max(score, bestScore);
                    alpha = Math.max(alpha, bestScore);

                    if (beta <= alpha) {
                        break; // Beta cutoff
                    }
                }
            }
        }

        return bestScore;
    }

    else{
        console.log("depth ", depth);
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j].innerHTML == ""){
                    board[i][j].innerHTML = "O";
                    if(depth > 1){
                        board[i][j].innerHTML = "";
                        return bestScore;
                    }
                    let score = minimax(board, depth + 1, true, alpha, beta);
                    board[i][j].innerHTML = "";
                    bestScore = Math.min(score, bestScore);
                    beta = Math.min(beta, bestScore);

                    if (beta <= alpha) {
                        break; // Alpha cutoff
                    }
                    
                }
            }
        }

        return bestScore;
    }
}



