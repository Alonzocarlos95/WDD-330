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
        // debugger;
        view.score0El.textContent = 0;
        view.score1El.textContent = 0;
        view.current0El.textContent = 0;
        view.current1El.textContent = 0;
    },
    switchPlayer(){
        document.getElementById(`current--${view.activePlayer}`).textContent = 0;
        view.currentScore = 0;
        view.activePlayer = view.activePlayer === 0 ? 1:0;
        view.player0El.classList.toggle('player--active');
        view.player0El.classList.toggle('player--active');
    }
}

view.btnRoll.addEventListener('click', () => {
    if(view.playing){
        //1. Generating a random dice roll.
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display Dice
        view.diceEl.classList.remove('hidden');
        view.diceEl.src = `images/dice-${dice}.png`;

        //3. Check for rolled 1
        if(dice !== 1){
            //Add dice to current score
            view.currentScore += dice;
            document.getElementById(`current--${view.activePlayer}`).textContent = view.currentScore;
        }
        else {
            game.switchPlayer();
        }
    }
});

view.btnHold.addEventListener('click',() => {
    if(view.playing){
        //1.Add current score to active player's score
        view.scores[view.activePlayer] += view.currentScore;

        document.getElementById(`score--${view.activePlayer}`).textContent = view.scores[view.activePlayer];

        //2. Check if player's score is >= 100
        if(view.scores[view.activePlayer] >= 100) {
            view.playing = false;
            view.diceEl.classList.add('hidden');

            document
            .querySelector(`.player--${view.activePlayer}`)
            .classList.add('player--winner');
          document
            .querySelector(`.player--${view.activePlayer}`)
            .classList.remove('player--active');
        } else {
            game.switchPlayer();
        }
    }
});

game.init(view);
// view.btnNew.addEventListener('click',game.init);

// let scores, currentScore, activePlayer, playing;
