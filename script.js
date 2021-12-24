const gameBoard = (function() {

  const _spaceContents = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];
  
  const boardSpaces = [document.querySelectorAll(".boardSpace")];
  
  const populateSpaces = () => {
    boardSpaces.forEach((boardSpace) => { 
    for (let i = 0; i <= _spaceContents.length; i++) {
      boardSpace[i].textContent = `${_spaceContents[i]}`;
      };
    });
  };

  // const markSpace = () => {
  //   boardSpaces.forEach((boardSpace) => {
  //     boardSpace.addEventListener('click', (e) => {
  //       boardSpace.value = playerMarker;
  //     } )
  //   })
  // }

  return {
    populateSpaces,
    markSpace,
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

gameBoard.populateSpaces();

// const Scott = playerFactory('Scott', 'x');