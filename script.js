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
      boardSpace.textContent = currentPlayerMarker;
      toggleCurrentPlayer();
      updateArr();
      
    });
  });

  const _spaceContents = ['', '', '', '', '', '', '', '', ''];
  
  const updateArr = () => {
    for (let i = 0; i < _spaceContents.length; i++)
      _spaceContents[i] = boardSpaces[i].textContent;
  };

  return {
    updateArr,
    _spaceContents
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




