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


const gameBoard = (function() {

  
  const boardSpaces = document.querySelectorAll(".boardSpace");

  let currentPlayerMarker = playerDetails.playerTwo.playerMarker;

  

  const toggleCurrentPlayer = () => {
    if (currentPlayerMarker === playerDetails.playerOne.playerMarker) {
      return currentPlayerMarker = playerDetails.playerTwo.playerMarker;
    } else if (currentPlayerMarker === playerDetails.playerTwo.playerMarker) {
      return currentPlayerMarker = playerDetails.playerOne.playerMarker;
    };
 };

  boardSpaces.forEach((boardSpace) => {
    boardSpace.addEventListener('click', (e) => {
      if (boardSpace.textContent === '') {
        boardSpace.textContent = currentPlayerMarker;
      };
      toggleCurrentPlayer();
      updateArr();
      checkForWin();
      
    });
  });

  const _spaceContents = ['', '', '', '', '', '', '', '', ''];
  
  const updateArr = () => {
    for (let i = 0; i < _spaceContents.length; i++)
      _spaceContents[i] = boardSpaces[i].textContent;
  };

  const checkForWin = () => {
    if ((_spaceContents[0] === 'X') && (_spaceContents[1] === 'X') && (_spaceContents[2] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[3] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[5] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[6] === 'X') && (_spaceContents[7] === 'X') && (_spaceContents[8] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[3] === 'X') && (_spaceContents[6] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[1] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[7] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[5] === 'X') && (_spaceContents[8] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[8] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[6] === 'X')) {
      alert("Player 1 Wins!")
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[1] === 'O') && (_spaceContents[2] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[3] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[5] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[6] === 'O') && (_spaceContents[7] === 'O') && (_spaceContents[8] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[3] === 'O') && (_spaceContents[6] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[1] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[7] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[5] === 'O') && (_spaceContents[8] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[8] === 'O')) {
      alert("Player 2 Wins!")
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[6] === 'O')) {
      alert("Player 2 Wins!")
    } else if (!_spaceContents.includes('')) {
      alert("It's a draw!")
    };
  };

  return {
    
  };
  
  
})();

const gameController = (function() {

  
  
  
  

  // playerOneSelect();
  // updateArr();
  // playerTwoSelect();
  // updateArr();
  

  

  

  

  return {
  
  
    
  };
})();




