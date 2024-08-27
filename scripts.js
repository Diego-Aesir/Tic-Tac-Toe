function Player(name, marker) {
    this.name = name;
    this.marker = marker;

    const markerPositions = [];
}

function TicTacToe(PlayerOne, PlayerTwo) {
    this.PlayerX = new Player(PlayerOne.name, PlayerOne.marker);
    this.PlayerO = new Player(PlayerTwo.name, PlayerTwo.marker);
    let scoreX = parseInt(localStorage.getItem('scoreX') || '0');
    let scoreY = parseInt(localStorage.getItem('scoreY') || '0');

    const game = () => {
        let gameDiv = document.querySelector("#boardGame");
        let notice_board = document.querySelector("#noticeBoard");
        let score_board = document.querySelector("#score");

        let currentPlayer = this.PlayerX;
        notice_board.innerHTML = currentPlayer.name + " Turn";
        score_board.innerHTML = this.PlayerX.name + " score: " + scoreX + " / " + this.PlayerO.name + " score: " + scoreY;

        this.PlayerX.markerPositions = [];
        this.PlayerO.markerPositions = [];

        let Zero_Zero = document.createElement("div");
        Zero_Zero.value = "0,0";
        Zero_Zero.className = "square";
        Zero_Zero.addEventListener("click", () => {
            if(Zero_Zero.childElementCount == 0) {
                addMark(Zero_Zero, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Zero_Zero.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Zero_Zero.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Zero_Zero.value + " is unavailable");
            }
        });

        let Zero_One = document.createElement("div");
        Zero_One.value = "0,1";
        Zero_One.className = "square";
        Zero_One.addEventListener("click", () => {
            if(Zero_One.childElementCount == 0) {
                addMark(Zero_One, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Zero_One.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Zero_One.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Zero_One.value + " is unavailable");
            }
        });
       
        let Zero_Two = document.createElement("div");
        Zero_Two.value = "0,2";
        Zero_Two.className = "square";
        Zero_Two.addEventListener("click", () => {
            if(Zero_Two.childElementCount == 0) {
                addMark(Zero_Two, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Zero_Two.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Zero_Two.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Zero_Two.value + " is unavailable");
            }
        });

        let One_Zero = document.createElement("div");
        One_Zero.value = "1,0";
        One_Zero.className = "square"
        One_Zero.addEventListener("click", () => {
            if(One_Zero.childElementCount == 0) {
                addMark(One_Zero, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(One_Zero.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(One_Zero.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + One_Zero.value + " is unavailable");
            }
        });

        let One_One = document.createElement("div");
        One_One.value = "1,1";
        One_One.className = "square";
        One_One.addEventListener("click", () => {
            if(One_One.childElementCount == 0) {
                addMark(One_One, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(One_One.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(One_One.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + One_One.value + " is unavailable");
            }
        });

        let One_Two = document.createElement("div");
        One_Two.value = "1,2";
        One_Two.className = "square";
        One_Two.addEventListener("click", () => {
            if(One_Two.childElementCount == 0) {
                addMark(One_Two, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(One_Two.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(One_Two.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + One_Two.value + " is unavailable");
            }
        });

        let Two_Zero = document.createElement("div");
        Two_Zero.value = "2,0";
        Two_Zero.className = "square";
        Two_Zero.addEventListener("click", () => {
            if(Two_Zero.childElementCount == 0) {
                addMark(Two_Zero, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Two_Zero.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Two_Zero.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Two_Zero.value + " is unavailable");
            }
        });

        let Two_One = document.createElement("div");
        Two_One.value = "2,1";
        Two_One.className = "square";
        Two_One.addEventListener("click", () => {
            if(Two_One.childElementCount == 0) {
                addMark(Two_One, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Two_One.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Two_One.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Two_One.value + " is unavailable");
            }
        });

        let Two_Two = document.createElement("div");
        Two_Two.value = "2,2";
        Two_Two.className = "square";
        Two_Two.addEventListener("click", () => {
            if(Two_Two.childElementCount == 0) {
                addMark(Two_Two, currentPlayer);
                if(currentPlayer.marker === "X") {
                    this.PlayerX.markerPositions.push(Two_Two.value);
                    win(this.PlayerX.markerPositions);
                    currentPlayer = this.PlayerO;
                    notice_board.innerHTML = this.PlayerO.name + " Turn";
                } else {
                    this.PlayerO.markerPositions.push(Two_Two.value);
                    win(this.PlayerO.markerPositions);
                    currentPlayer = this.PlayerX;
                    notice_board.innerHTML = this.PlayerX.name + " Turn";
                }
            } else {
                window.alert("The position: " + Two_Two.value + " is unavailable");
            }
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

        function win(markerPositions) {
            if(winCondition(markerPositions)) {
                window.alert(currentPlayer.name + " wins");
                if(currentPlayer.marker == "X") {
                    scoreX++;
                } else {
                    scoreY++;
                }
                resetGame();
            } else if (markerPositions.length == 5) {
                window.alert("It's a Draw.");
                resetGame();
            }
        }
    
        function winCondition(markerPositions) {
            if(markerPositions.includes("0,0") && markerPositions.includes("0,1") && markerPositions.includes("0,2")) {
                return true;
            } else if (markerPositions.includes("1,0") && markerPositions.includes("1,1") && markerPositions.includes("1,2")) {
                return true;
            } else if (markerPositions.includes("2,0") && markerPositions.includes("2,1") && markerPositions.includes("2,2")) {
                return true;
            } else if (markerPositions.includes("0,0") && markerPositions.includes("1,0") && markerPositions.includes("2,0")) {
                return true;
            } else if (markerPositions.includes("0,1") && markerPositions.includes("1,1") && markerPositions.includes("2,1")) {
                return true;
            } else if (markerPositions.includes("0,2") && markerPositions.includes("1,2") && markerPositions.includes("2,2")) {
                return true;
            } else if (markerPositions.includes("0,0") && markerPositions.includes("1,1") && markerPositions.includes("2,2")) {
                return true;
            } else if (markerPositions.includes("0,2") && markerPositions.includes("1,1") && markerPositions.includes("2,0")) {
                return true;
            } else return false; 
        }
    
        function resetGame() {
            while(gameDiv.firstChild) {
                gameDiv.firstChild.remove();
            }
            currentPlayer = this.PlayerX;
            localStorage.setItem('scoreX', scoreX);
            localStorage.setItem('scoreY', scoreY);
            game();
            location.reload();
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
    }
    game()
}

new TicTacToe(new Player("Diego", "X"), new Player("Friend", "O"));