//Jogo da velha com objetos
// Criar os objetos na tela com DOM
function Player(name, marker) {
    this.name = name;
    this.marker = marker;

    const markerPositions = [];
}

function TicTacToe(PlayerOne, PlayerTwo) {
    let gameboard = 0;
    this.PlayerX = new Player(PlayerOne.name, PlayerOne.marker);
    this.PlayerO = new Player(PlayerTwo.name, PlayerTwo.marker);

    function win(markerPositions) {
        // Matriz 3x3
        //Verticais primeiro
        if(markerPositions.includes(0,0) && markerPositions.includes(0,1) && markerPositions.includes(0,2)) {
            return true;
        } else if (markerPositions.includes(1,0) && markerPositions.includes(1,1) && markerPositions.includes(1,2)) {
            return true;
        } else if (markerPositions.includes(2,0) && markerPositions.includes(2,1) && markerPositions.includes(2,2)) {
            return true;
            //Horizontais
        } else if (markerPositions.includes(0,0) && markerPositions.includes(1,0) && markerPositions.includes(2,0)) {
            return true;
        } else if (markerPositions.includes(0,1) && markerPositions.includes(1,1) && markerPositions.includes(2,1)) {
            return true;
        } else if (markerPositions.includes(0,2) && markerPositions.includes(1,2) && markerPositions.includes(2,2)) {
            return true;
            //Diagonais
        } else if (markerPositions.includes(0,0) && markerPositions.includes(1,1) && markerPositions.includes(2,2)) {
            return true;
        } else if (markerPositions.includes(0,2) && markerPositions.includes(1,1) && markerPositions.includes(2,0)) {
            return true;
        } else return false;        
    }

    function game(PlayerX, PlayerO) {
        let gameover = false;
        let notice_board = document.querySelector(".noticeBoard"); // Elemento <p> no index
        let gameDiv = document.querySelector("#boardGame");


        //Aqui eu vou alterar o estado deles, de X ou O, e no fim marcar as caixas
        let Zero_Zero = document.createElement("div");
        Zero_Zero.className = "square";

        let Zero_One = document.createElement("div");
        Zero_One.className = "square";

        let Zero_Two = document.createElement("div");
        Zero_Two.className = "square";

        let One_Zero = document.createElement("div");
        One_Zero.className = "square"

        let One_One = document.createElement("div");
        One_One.className = "square";

        let One_Two = document.createElement("div");
        One_Two.className = "square";

        let Two_Zero = document.createElement("div");
        Two_Zero.className = "square";

        let Two_One = document.createElement("div");
        Two_One.className = "square";

        let Two_Two = document.createElement("div");
        Two_Two.className = "square";

        Zero_Zero.addEventListener("click", () => {
            console.log("clicked on 0x0");
        });

        gameDiv.appendChild(Zero_Zero);
        gameDiv.appendChild(Zero_One);
        gameDiv.appendChild(Zero_Two);
        gameDiv.appendChild(One_Zero);
        gameDiv.appendChild(One_One);
        gameDiv.appendChild(One_Two);
        gameDiv.appendChild(Two_Zero);
        gameDiv.appendChild(Two_One);
        gameDiv.appendChild(Two_Two);

        /*
        while(!gameover) {
            notice_board.innerHTML = "Player 1 turn";

        }
        */
    }

    game();
}

new TicTacToe("Diego", "Homelander").game;