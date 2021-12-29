
//Module for player creation and storing player objects
const playerDetails = (function() {  

  //Factory function for player object creation
  const playerFactory = (playerName, playerMarker) => {   
    return {
      playerName, 
      playerMarker, 
    };
  };
  
  //Initial player objects
  const playerOne = playerFactory('Player One', 'X');
  const playerTwo = playerFactory('Player Two', 'O');

  //DOM targets
  const boardContainer = document.querySelector('#boardContainer');
  const formContainer = document.querySelector('#formContainer');
  const form = document.querySelector('form');
  const playerOneEntry = document.querySelector('#playerOneEntry');
  const playerTwoEntry = document.querySelector('#playerTwoEntry');
  const playerOneInfo = document.querySelector('#playerOneInfo');
  const playerTwoInfo = document.querySelector('#playerTwoInfo');
  
  //Event listener to handle player details form submission
  form.addEventListener('submit', (e) => {
      if (playerOneEntry.value !== '' ) {
        playerOne.playerName = playerOneEntry.value;
      } else {
        playerOne.playerName = 'Player One'
      };
      if (playerTwoEntry.value !== '') {
        playerTwo.playerName = playerTwoEntry.value;
      } else {
        playerTwo.playerName = 'Player Two'
      };
      event.preventDefault();  
      closeForm();
      revealBoard();
      populatePlayerInfo();
      gameInfo.textContent = `${playerOne.playerName}, it's your turn`;
    });

  //Helper functions  
  const closeForm = () => {
    formContainer.style.display = "none"
  };

  const revealBoard = () => {
    boardContainer.classList.remove('boardContainerPreGame')
    boardContainer.classList.add('boardContainerDuringGame')
  };

  const populatePlayerInfo = () => {
    playerOneInfo.textContent = `${playerOne.playerName} is playing as X`;
    playerTwoInfo.textContent = `${playerTwo.playerName} is playing as O`;
  };

  return {
    playerOne,
    playerTwo,
  };
})();

//Module for controlling the game
const gameBoard = (function() {

  //DOM targets and initial variable declarations
  const boardSpaces = document.querySelectorAll(".boardSpace");
  const gameInfo = document.querySelector('#gameInfo');
  const resetButton = document.querySelector('#resetButton');
  const newGameButton = document.querySelector('#newGameButton');
  const spaceContents = ['', '', '', '', '', '', '', '', ''];
  let anyoneWon = false;
  let currentPlayerMarker = playerDetails.playerOne.playerMarker;
  let currentPlayerName = playerDetails.playerOne.playerName;

  //Event listener handling selection of a space by a player
  boardSpaces.forEach((boardSpace) => {
    boardSpace.addEventListener('click', (e) => {
      if (boardSpace.textContent === '' && (anyoneWon === false)) {
        boardSpace.textContent = currentPlayerMarker;
      };
      toggleCurrentPlayer();
      updateArr();
      updateText();
      checkForWin();
    });
  });

  //Event listeners for "Reset Game" and "Start A New Game" buttons
  resetButton.addEventListener('click', (e) => {
    resetGrid();
    updateArr();
    anyoneWon = false;
    currentPlayerMarker = playerDetails.playerOne.playerMarker;
    gameInfo.textContent = `${playerDetails.playerOne.playerName}, it's your turn`;;
  })

  newGameButton.addEventListener('click', (e) => {
    location.reload()
  });

  //Helper Functions
  const toggleCurrentPlayer = () => {
    if (currentPlayerMarker === playerDetails.playerOne.playerMarker) {
      currentPlayerMarker = playerDetails.playerTwo.playerMarker;
      currentPlayerName = playerDetails.playerTwo.playerName;
    } else if (currentPlayerMarker === playerDetails.playerTwo.playerMarker) {
      currentPlayerMarker = playerDetails.playerOne.playerMarker;
      currentPlayerName = playerDetails.playerOne.playerName;
    };
 };
  
  const updateArr = () => {
    for (let i = 0; i < spaceContents.length; i++)
      spaceContents[i] = boardSpaces[i].textContent;
  };

  const resetGrid = () => {
    boardSpaces.forEach((boardSpace) => {
      boardSpace.textContent = '';
    });
  };

  const updateText = () => {
    gameInfo.textContent = `${currentPlayerName}, it's your turn`;
  };

  //Helper function containing logic for end of game
  const checkForWin = () => {
    if ((spaceContents[0] === 'X') && (spaceContents[1] === 'X') && (spaceContents[2] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[3] === 'X') && (spaceContents[4] === 'X') && (spaceContents[5] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[6] === 'X') && (spaceContents[7] === 'X') && (spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[0] === 'X') && (spaceContents[3] === 'X') && (spaceContents[6] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[1] === 'X') && (spaceContents[4] === 'X') && (spaceContents[7] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[2] === 'X') && (spaceContents[5] === 'X') && (spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[0] === 'X') && (spaceContents[4] === 'X') && (spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[2] === 'X') && (spaceContents[4] === 'X') && (spaceContents[6] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[0] === 'O') && (spaceContents[1] === 'O') && (spaceContents[2] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[3] === 'O') && (spaceContents[4] === 'O') && (spaceContents[5] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[6] === 'O') && (spaceContents[7] === 'O') && (spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[0] === 'O') && (spaceContents[3] === 'O') && (spaceContents[6] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[1] === 'O') && (spaceContents[4] === 'O') && (spaceContents[7] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[2] === 'O') && (spaceContents[5] === 'O') && (spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[0] === 'O') && (spaceContents[4] === 'O') && (spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((spaceContents[2] === 'O') && (spaceContents[4] === 'O') && (spaceContents[6] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if (!spaceContents.includes('')) {
      gameInfo.textContent = "It's a draw!"
    };
  };

  return {
    
  };
})();



