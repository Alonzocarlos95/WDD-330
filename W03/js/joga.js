'use strict';

const view = {
    player0El: document.querySelector('.player--0'),
    player1El: document.querySelector('.player--1'),
    score0El: document.querySelector('#score--0'),
    score1El: document.querySelector('#score--1'),
    current0El: document.getElementById('current--0'),
    current1El: document.getElementById('current--1'),
    diceEl: document.querySelector('.dice'),
    btnNew: document.querySelector('.btn--new'),
    btnRoll: document.querySelector('.btn--roll'),
    btnHold: document.querySelector('.btn--hold'),
    scores:[0,0],
    currentScore:0,
    activePlayer:0,
    playing:true,

}


const game = {
    init(view){
        debugger;
        view.score0El.textContent = 0;
        view.score1El.textContent = 0;
        view.current0El.textContent = 0;
        view.current1El.textContent = 0;
    }
}

game.init(view);
// let scores, currentScore, activePlayer, playing;
