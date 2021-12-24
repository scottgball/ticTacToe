const gameBoard = (function() {

  const boardSpaces = document.querySelectorAll(".boardSpace");

  const _spaceContents = ['', '', '', '', '', '', '', '', ''];
  
  const updateArr = () => {
    for (let i = 0; i <= _spaceContents.length; i++) {
      _spaceContents[i] = boardSpaces[i].textContent;
    };
  };

  const markSpace = () => {
    boardSpaces.forEach((boardSpace) => {
      boardSpace.addEventListener('click', (e) => {
        boardSpace.textContent = playerDetails.playerTwo.playerMarker;
        updateArr();
      });
    });
  }

  return {
    markSpace,
    _spaceContents
  };
  
  
})();

const displayController = (function() {

  
})();

const playerDetails = (function() {
  const playerFactory = (playerName, playerMarker) => {
    const sayHello = () => console.log(`Hello ${playerName}, you're playing as ${playerMarker}`);
    return {
      playerName, 
      playerMarker, 
      sayHello
    };
  };

  const playerOneName = prompt('Hello Player One, please enter your name');
  const playerTwoName = prompt('Hello Player Two, please enter your name');
  

  const playerOne = playerFactory(playerOneName, 'X');
  const playerTwo = playerFactory(playerTwoName, 'O');

  return {
    playerOne,
    playerTwo,
  };
})();


gameBoard.markSpace();

// const Scott = playerFactory('Scott', 'x');