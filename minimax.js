function nextBestMove(){
    let bestScore = -Infinity;
    let bestMove;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(ticTacToe[i][j].innerHTML == ""){
                ticTacToe[i][j].innerHTML = ai;
                let score = minimax(ticTacToe, 0, false);
                ticTacToe[i][j] = "";
                if(score > bestScore){
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

function minimax(board, depth, isMaximising){
    let result = checkWin(board);
    if(result != null){
        let score = scores[result];
        return score;
    }
    if(isMaximising){
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j].innerHTML == ""){
                    board[i][j].innerHTML = ai;
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = "";
                    bestScore = Math.max(score, bestScore);
                    console.log(bestScore);
                    
                }
            }
        }

        return bestScore;
    }

    else{
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j].innerHTML == ""){
                    board[i][j].innerHTML = "O";
                    let score = minimax(board, depth + 1, true);
                    board[i][j] = "";
                    bestScore = Math.min(score, bestScore);
                    
                }
            }
        }

        return bestScore;
    }
}