const tiles = document.querySelectorAll('.tile')
let moveCounter = 0
let isPlayerXturn = true
let gameWon = false
let winner = null
let values = [    
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' '],
]

tiles.forEach(item => item.addEventListener('click', clicked))

function clicked(e){
    if(!gameWon){
        if(isPlayerXturn){
            this.innerText = 'X'
            isPlayerXturn = false
        }else{
            isPlayerXturn = true
            this.innerText = 'O'
        }
        moveCounter += 1
        addValues(this.classList, this.innerText);
        checkForWin()
        this.removeEventListener('click', clicked)
    }

    if(gameWon){
        winnerExecution()
    }

    if(moveCounter === 9){
        drawExecution()
    }
}

function addValues(index, value){
    if(index[1].includes('one')){
        values[0][0] = value
    }else if(index[1].includes('two')){
        values[0][1] = value
    }else if(index[1].includes('three')){
        values[0][2] = value
    }else if(index[1].includes('four')){
        values[1][0] = value
    }else if(index[1].includes('five')){
        values[1][1] = value
    }else if(index[1].includes('six')){
        values[1][2] = value
    }else if(index[1].includes('seven')){
        values[2][0] = value
    }else if(index[1].includes('eight')){
        values[2][1] = value
    }else if(index[1].includes('nine')){
        values[2][2] = value
    }
}


function checkForWin(){
    for(let i = 0; i <= 2; i++){
        if(values[i][0] !== ' ' && values[i][0] === values[i][1] && values[i][1] === values[i][2]){
            gameWon = true;
            winner = values[i][0]
        }
        else if(values[0][i] !== ' ' && values[0][i] === values[1][i] && values[1][i] === values[2][i]){
            gameWon = true;
            winner = values[i][0]
        }
    }

    if(values[0][0] !== ' ' && values[0][0] === values[1][1] && values[1][1] === values[2][2]){
        gameWon = true;
        winner = values[0][0]
    }else if(values[0][2] !== ' ' && values[0][2] === values[1][1] && values[1][1] === values[2][0]){
        gameWon = true;
        winner = values[0][2]
    }
}

function winnerExecution(){
    tiles.forEach(item =>  item.innerText === winner ? item.style.backgroundColor = 'red' : '')
    document.querySelector('h1').style.display = 'none'
    document.querySelector('body').style.backgroundColor = 'yellow'
    document.querySelector('h2').innerText = `Player ${winner} has won !`
    document.querySelector('.winner-container').style.display = 'flex'
    document.querySelector('button').addEventListener('click', () => location.reload());
}


function drawExecution(){
    tiles.forEach(item => item.style.backgroundColor = 'red')
    document.querySelector('h1').style.display = 'none'
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('h2').innerText = `It's a draw !`
    document.querySelector('.winner-container').style.display = 'flex'
    document.querySelector('button').addEventListener('click', () => location.reload());
}


