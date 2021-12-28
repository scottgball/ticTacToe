const playerDetails = (function() {

  const playerFactory = (playerName, playerMarker) => {
    const sayHello = () => console.log(`Hello ${playerName}, you're playing as ${playerMarker}`);
    return {
      playerName, 
      playerMarker, 
      sayHello
    };
  };
  
  

  // const playerOneName = prompt('Hello Player One, please enter your name');
  // const playerTwoName = prompt('Hello Player Two, please enter your name');
  const playerOne = playerFactory('Player 1', 'X');
  const playerTwo = playerFactory('Player 2', 'O');

  const boardContainer = document.querySelector('#boardContainer');
  const formContainer = document.querySelector('#formContainer');
  const form = document.querySelector('form');
  const playerOneEntry = document.querySelector('#playerOneEntry');
  const playerTwoEntry = document.querySelector('#playerTwoEntry');
  const playerOneInfo = document.querySelector('#playerOneInfo');
  const playerTwoInfo = document.querySelector('#playerTwoInfo');
  

  
  form.addEventListener('submit', (e) => {
      const playerOneName = playerOneEntry.value;
      const playerTwoName = playerTwoEntry.value;
      playerOne.playerName = playerOneName;
      playerTwo.playerName = playerTwoName;
      event.preventDefault();  
      closeForm();
      revealBoard();
      populatePlayerInfo();
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
    playerOne,
    playerTwo,
  };
})();



const gameBoard = (function() {

  
  const boardSpaces = document.querySelectorAll(".boardSpace");
  const resultInfo = document.querySelector('#resultInfo');
  const resetButton = document.querySelector('#resetButton');
  const newGameButton = document.querySelector('#newGameButton');

  let currentPlayerMarker = playerDetails.playerOne.playerMarker;

  

  const toggleCurrentPlayer = () => {
    if (currentPlayerMarker === playerDetails.playerOne.playerMarker) {
      return currentPlayerMarker = playerDetails.playerTwo.playerMarker;
    } else if (currentPlayerMarker === playerDetails.playerTwo.playerMarker) {
      return currentPlayerMarker = playerDetails.playerOne.playerMarker;
    };
 };

  boardSpaces.forEach((boardSpace) => {
    boardSpace.addEventListener('click', (e) => {
      if (boardSpace.textContent === '' && (anyoneWon === false)) {
        boardSpace.textContent = currentPlayerMarker;
      };
      toggleCurrentPlayer();
      updateArr();
      checkForWin();
    });
  });

  resetButton.addEventListener('click', (e) => {
    resetGrid();
    updateArr();
    anyoneWon = false;
    currentPlayerMarker = playerDetails.playerOne.playerMarker;

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

  let anyoneWon = false;

  const checkForWin = () => {
    if ((_spaceContents[0] === 'X') && (_spaceContents[1] === 'X') && (_spaceContents[2] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[3] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[5] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[6] === 'X') && (_spaceContents[7] === 'X') && (_spaceContents[8] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[3] === 'X') && (_spaceContents[6] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[1] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[7] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[5] === 'X') && (_spaceContents[8] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[8] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'X') && (_spaceContents[4] === 'X') && (_spaceContents[6] === 'X')) {
      resultInfo.textContent = `${playerDetails.playerOne.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[1] === 'O') && (_spaceContents[2] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[3] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[5] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[6] === 'O') && (_spaceContents[7] === 'O') && (_spaceContents[8] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[3] === 'O') && (_spaceContents[6] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[1] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[7] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[5] === 'O') && (_spaceContents[8] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[0] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[8] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if ((_spaceContents[2] === 'O') && (_spaceContents[4] === 'O') && (_spaceContents[6] === 'O')) {
      resultInfo.textContent = `${playerDetails.playerTwo.playerName} wins!`;
      anyoneWon = true;
    } else if (!_spaceContents.includes('')) {
      resultInfo.textContent = "It's a draw!"
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




