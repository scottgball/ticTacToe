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
        boardSpace.textContent = 'x';
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

const playerFactory = (playerName, playerMarker) => {

  const sayHello = () => console.log(`Hello ${playerName}, you're playing as ${playerMarker}`);
  
  return {
    sayHello,
    playerName,
    playerMarker,
  };
};

gameBoard.markSpace();

// const Scott = playerFactory('Scott', 'x');