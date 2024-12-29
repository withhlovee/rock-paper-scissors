const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

updateScoreElement()



function playGame(playerMove) {
    let result = ''
    const computerMove = pickComputerMove();


    if (playerMove === 'scissors') {
        if (computerMove == 'rock') {
            result = 'you lost';
        } else if (computerMove == 'paper') {
            result = 'you won';
        } else if (computerMove == 'scissors') {
            result = 'its tie'
        }
    } else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            result = 'you lost';
        } else if (computerMove == 'paper') {
            result = 'its tie';
        } else if (computerMove == 'scissors') {
            result = 'you won'
        }
    } else if (playerMove == 'rock') {
        if (computerMove == 'rock') {
            result = 'its tie';
        } else if (computerMove == 'paper') {
            result = 'you lost';
        } else if (computerMove == 'scissors') {
            result = 'you won';
        }
    }

    if (result === 'you won') {
        console.log('Updating win count');
        score.win += 1;
    } else if (result === 'you lost') {
        console.log('Updating lose count');
        score.lose += 1;
    } else if (result === 'its tie') {
        console.log('Updating tie count');
        score.tie += 1;
    }
    
    localStorage.setItem('score',JSON.stringify(score))
    
    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML = `You <img height="60px" src="${playerMove}-emoji.png" alt=""> <img height="60px" src="${computerMove}-emoji.png" alt="">Computer`
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins:${score.win} Losses:${score.lose} Tie:${score.tie}`
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
