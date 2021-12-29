const playerDetails = (function() {

  const playerFactory = (playerName, playerMarker) => {
    const sayHello = () => console.log(`Hello ${playerName}, you're playing as ${playerMarker}`);
    return {
      playerName, 
      playerMarker, 
      sayHello
    };
  };
  
  const playerOne = playerFactory('Player One', 'X');
  const playerTwo = playerFactory('Player Two', 'O');

  const boardContainer = document.querySelector('#boardContainer');
  const formContainer = document.querySelector('#formContainer');
  const form = document.querySelector('form');
  const playerOneEntry = document.querySelector('#playerOneEntry');
  const playerTwoEntry = document.querySelector('#playerTwoEntry');
  const playerOneInfo = document.querySelector('#playerOneInfo');
  const playerTwoInfo = document.querySelector('#playerTwoInfo');
  
  form.addEventListener('submit', (e) => {
      let playerOneName = playerOneEntry.value;
      let playerTwoName = playerTwoEntry.value;
      if (playerOneEntry.value !== '' ) {
        playerOneName = playerOneEntry.value;
      } else {
        playerOneName = 'Player One'
      };
      if (playerTwoEntry.value !== '') {
        playerTwoName = playerTwoEntry.value;
      } else {
        playerTwoName = 'Player Two'
      };
      event.preventDefault();  
      closeForm();
      revealBoard();
      populatePlayerInfo();
      gameInfo.textContent = `${playerOneName}, it's your turn`;
    });

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
    playerOneEntry,
    playerOne,
    playerTwo,
  };
})();



const gameBoard = (function() {

  
  const boardSpaces = document.querySelectorAll(".boardSpace");
  const gameInfo = document.querySelector('#gameInfo');
  const resetButton = document.querySelector('#resetButton');
  const newGameButton = document.querySelector('#newGameButton');

  let currentPlayerMarker = playerDetails.playerOne.playerMarker;
  let currentPlayerName = playerDetails.playerOne.playerName;

  

  

  const toggleCurrentPlayer = () => {
    if (currentPlayerMarker === playerDetails.playerOne.playerMarker) {
      currentPlayerMarker = playerDetails.playerTwo.playerMarker;
      currentPlayerName = playerDetails.playerTwo.playerName;
    } else if (currentPlayerMarker === playerDetails.playerTwo.playerMarker) {
      currentPlayerMarker = playerDetails.playerOne.playerMarker;
      currentPlayerName = playerDetails.playerOne.playerName;
    };
 };

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


  const _spaceContents = ['', '', '', '', '', '', '', '', ''];
  
  const updateArr = () => {
    for (let i = 0; i < _spaceContents.length; i++)
      _spaceContents[i] = boardSpaces[i].textContent;
  };

  const resetGrid = () => {
    boardSpaces.forEach((boardSpace) => {
      boardSpace.textContent = '';
    });
  };

  const disableGrid = () => {
    boardSpaces.forEach((boardSpace) => {
      boardSpace.removeEventListener('click', (e) => {
        if (boardSpace.textContent === '') {
          boardSpace.textContent = currentPlayerMarker;
        };
        toggleCurrentPlayer();
        updateArr();
        checkForWin();
      });
    });
  };

  const updateText = () => {
    gameInfo.textContent = `${currentPlayerName}, it's your turn`;
  }

  let anyoneWon = false;

  const checkForWin = () => {
    if ((_spaceContents[0] === 'X') && (_spaceContents[1] === 'X') && (_spaceContents[2] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[3] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[5] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[6] === 'X') && (_spaceContents[7] === 'X') && (_spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[3] === 'X') && (_spaceContents[6] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[1] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[7] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[5] === 'X') && (_spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[8] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[6] === 'X')) {
      gameInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[1] === 'O') && (_spaceContents[2] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[3] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[5] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[6] === 'O') && (_spaceContents[7] === 'O') && (_spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[3] === 'O') && (_spaceContents[6] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[1] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[7] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[5] === 'O') && (_spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[8] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[6] === 'O')) {
      gameInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if (!_spaceContents.includes('')) {
      gameInfo.textContent = "It's a draw!"
    };
  };

  return {
    updateText,
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




