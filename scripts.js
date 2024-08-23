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
    this.PlayerX.markerPositions = [];
    this.PlayerO.markerPositions = [];

    let currentPlayer = this.PlayerX;

    function win(markerPositions) {
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

    function addXMark(elementDiv) {
        xmark = document.createElement("div");
        xmark.className = "xmarked";
        elementDiv.appendChild(xmark);
    }

    function addOMark(elementDiv) {
        omark = document.createElement("div");
        omark.className = "omarked";
        elementDiv.appendChild(omark);
    }

    function addMark(elementDiv, currentPlayer) {
        currentPlayer.marker === "X" ? addXMark(elementDiv) : addOMark(elementDiv);
    }

    const game = () => {
        let notice_board = document.querySelector("#noticeBoard");
        let gameDiv = document.querySelector("#boardGame");

        let Zero_Zero = document.createElement("div");
        Zero_Zero.value = "0,0";
        Zero_Zero.className = "square";
        Zero_Zero.addEventListener("click", () => {
            if(Zero_Zero.childElementCount == 0) {
                addMark(Zero_Zero, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Zero_Zero.value);
                    currentPlayer = this.PlayerO;
                    console.log(this.PlayerX.markerPositions);
                } else {
                    this.PlayerO.markerPositions.push(Zero_Zero.value);
                    currentPlayer = this.PlayerX;
                    console.log(this.PlayerO.markerPositions);
                }
            } else {
                window.alert("The position: " + Zero_Zero.value + " is unavailable");
            }
        });

        let Zero_One = document.createElement("div");
        Zero_One.value = "0,1";
        Zero_One.className = "square";
       
        let Zero_Two = document.createElement("div");
        Zero_Two.value = "0,2";
        Zero_Two.className = "square";

        let One_Zero = document.createElement("div");
        One_Zero.value = "1,0";
        One_Zero.className = "square"

        let One_One = document.createElement("div");
        One_One.value = "1,1";
        One_One.className = "square";

        let One_Two = document.createElement("div");
        One_Two.value = "1,2";
        One_Two.className = "square";

        let Two_Zero = document.createElement("div");
        Two_Zero.value = "2,0";
        Two_Zero.className = "square";

        let Two_One = document.createElement("div");
        Two_One.value = "2,1";
        Two_One.className = "square";

        let Two_Two = document.createElement("div");
        Two_Two.value = "2,2";
        Two_Two.className = "square";

        gameDiv.appendChild(Zero_Zero);
        gameDiv.appendChild(Zero_One);
        gameDiv.appendChild(Zero_Two);
        gameDiv.appendChild(One_Zero);
        gameDiv.appendChild(One_One);
        gameDiv.appendChild(One_Two);
        gameDiv.appendChild(Two_Zero);
        gameDiv.appendChild(Two_One);
        gameDiv.appendChild(Two_Two);

        let gameOver = false;
        //while(!gameOver) {
            notice_board.innerHTML = "X Turn";
            
            //window.alert(currentPlayer.name + " Turn");
            
            //if(!win(this.PlayerO.markerPositions)) {
                //notice_board.innerHTML = "It's a Draw";
                //gameOver = true;
            //}
        //}
                    
        
    }
    game()
}

new TicTacToe(new Player("Diego", "X"), new Player("Friend", "O"));