class Players {

    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

// ask for players names as inputs
let playerName = window.prompt("Enter Player 1s name: ")
let player_1 = new Players("blue", playerName);

playerName = window.prompt("Enter Player 2s name: ")
let player_2 = new Players("red", playerName);

// maps for vertical win state function
let blueMap = new Map();
let redMap = new Map();

let blueMapRow = new Map();
let redMapRow = new Map();

document.getElementById("button").addEventListener("click", reset)

//let currentPlayer = "blue"


let currentPlayer = player_1;
if (currentPlayer.name != null) {
    document.getElementById("player").innerHTML = currentPlayer.name + "'s turn";
}
else
    document.getElementById("player").innerHTML = currentPlayer.color + "'s turn";

let slots = document.getElementsByClassName("game-board-slot");
let blue = 0;
let red = 0;

// when the pages loads, gives each slot 3 click event listners
for (let i = 0; i < slots.length; i++) {

    slots[i].addEventListener("click", color);
    slots[i].addEventListener("click", checkStateHorizontal);
    slots[i].addEventListener("click", checkStateVertical);
    slots[i].addEventListener("click", checkStateDraw);

}



// changes the color of the slot according to the current playeer
function color(e) {

    console.log(e.target.classList.contains("1"))

    //document.getElementById("white")
    if (e.target.classList.contains("white") && currentPlayer == player_1) {
        e.target.classList.remove("white");
        e.target.classList.add("blue");
        e.target.classList.toggle("flag");

        currentPlayer = player_2;

        if (currentPlayer.name != null) {
            document.getElementById("player").innerHTML = currentPlayer.name + "'s turn";
        }
        else
            document.getElementById("player").innerHTML = currentPlayer.color + "'s turn";
    }
    else if (e.target.classList.contains("white") && currentPlayer == player_2) {
        e.target.classList.remove("white");
        e.target.classList.add("red");
        e.target.classList.toggle("flag");

        currentPlayer = player_1;

        if (currentPlayer.name != null) {
            document.getElementById("player").innerHTML = currentPlayer.name + "'s turn";
        }
        else
            document.getElementById("player").innerHTML = currentPlayer.color + "'s turn";
    }
}

// Resets the board
function reset() {

    for (let i = 0; i < slots.length; i++) {

        if (slots[i].classList.contains("red")) {
            slots[i].classList.remove("red");
            slots[i].classList.add("white")
        }
        else if (slots[i].classList.contains("blue")) {
            slots[i].classList.remove("blue");
            slots[i].classList.add("white")
        }
    }

    blue = 0;
    red = 0;
    currentPlayer = player_1;

    if (currentPlayer.name != null) {
        document.getElementById("player").innerHTML = currentPlayer.name + "'s turn";
    }
    else
        document.getElementById("player").innerHTML = currentPlayer.color + "'s turn";
}

function checkStateDraw(e) {

    for (let i = 0; i < slots.length; i++) {

        if (slots[i].classList.contains("white")) {
            return 0;
        }
    }

    alert("Its a Draw");
    reset();

}

function checkStateVertical(e) {

    for (let i = 1; i <= 7; i++) {

        blueMap.set(i, 0);
        redMap.set(i, 0);
    }

    for (let i = 0; i < slots.length; i++) {

        if (slots[i].classList.contains("1")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(1, 0);

                let val = blueMap.get(1);
                val += 1;
                blueMap.set(1, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(1, 0);

                let val = redMap.get(1);
                val += 1;
                redMap.set(1, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("2")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(2, 0);

                let val = blueMap.get(2);
                val += 1;
                blueMap.set(2, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(2, 0);

                let val = redMap.get(2);
                val += 1;
                redMap.set(2, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("3")) {

            if (slots[i].classList.contains("blue")) {
                redMap.set(3, 0);

                let val = blueMap.get(3);
                val += 1;
                blueMap.set(3, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(3, 0);

                let val = redMap.get(3);
                val += 1;
                redMap.set(3, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("4")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(4, 0);

                let val = blueMap.get(4);
                val += 1;
                blueMap.set(4, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(4, 0);

                let val = redMap.get(4);
                val += 1;
                redMap.set(4, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("5")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(5, 0);

                let val = blueMap.get(5);
                val += 1;
                blueMap.set(5, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(5, 0);

                let val = redMap.get(5)
                val += 1;
                redMap.set(5, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("6")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(6, 0);

                let val = blueMap.get(6);
                val += 1;
                blueMap.set(6, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(6, 0);

                let val = redMap.get(6);
                val += 1;
                redMap.set(6, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("7")) {


            if (slots[i].classList.contains("blue")) {
                redMap.set(7, 0);

                let val = blueMap.get(7);
                val += 1;
                blueMap.set(7, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMap.set(7, 0);

                let val = redMap.get(7);
                val += 1;
                redMap.set(7, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
    }


}

function checkStateHorizontal(e) {
    //6
    // red = 0;
    // blue = 0;
    //for (let i = slots.length - 1; i > 0; i--) {

    //working hori start
    // if (slots[i].classList.contains("white")) {

    //     red = 0;
    //     blue = 0;
    //     //break;
    // }
    // else if (slots[i].classList.contains("blue")) {
    //     red = 0;
    //     blue += 1;
    //     console.log(blue + " blue")
    //     //slots[i].classList.toggle("flag")

    //     if (blue == 4) {
    //         if (player_1.name != null)
    //             alert(player_1.name + " wins")
    //         else
    //             alert(player_1.color + " wins")
    //         //reset();
    //         break;
    //     }
    // }
    // else if (slots[i].classList.contains("red")) {
    //     blue = 0;
    //     red++
    //     console.log(red + " red")
    //     //slots[i].classList.toggle("flag")

    //     if (red == 4) {
    //         if (player_2.name != null) {
    //             alert(player_2.name + " wins")
    //             document.getElementById("player").innerHTML = player_2.name + " wins"
    //         }
    //         else
    //             alert(player_2.color + " wins")
    //         //reset();
    //         break;
    //     }
    // }

    //}

    // hori state but with maps
    for (let i = 1; i <= 7; i++) {

        blueMapRow.set(i, 0);
        redMapRow.set(i, 0);
    }

    for (let i = 0; i < slots.length; i++) {



        if (slots[i].classList.contains("row1")) {


            if (slots[i].classList.contains("blue")) {
                redMapRow.set(1, 0);

                let val = blueMapRow.get(1);
                val += 1;
                blueMapRow.set(1, val);

                if (val == 4) {
                    alert("blue wins")
                    break;
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(1, 0);

                let val = redMapRow.get(1);
                val += 1;
                redMapRow.set(1, val);

                if (val == 4) {
                    alert("red wins")
                    break;
                }
            }
        }
        else if (slots[i].classList.contains("row2")) {


            if (slots[i].classList.contains("blue")) {
                redMapRow.set(2, 0);

                let val = blueMapRow.get(2);
                val += 1;
                blueMapRow.set(2, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(2, 0);

                let val = redMapRow.get(2);
                val += 1;
                redMapRow.set(2, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("row3")) {

            if (slots[i].classList.contains("blue")) {
                redMapRow.set(3, 0);

                let val = blueMapRow.get(3);
                val += 1;
                blueMapRow.set(3, val);

                if (val == 4) {
                    alert("blue wins")
                    break;
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(3, 0);

                let val = redMapRow.get(3);
                val += 1;
                redMapRow.set(3, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("row4")) {


            if (slots[i].classList.contains("blue")) {
                redMapRow.set(4, 0);

                let val = blueMapRow.get(4);
                val += 1;
                blueMapRow.set(4, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(4, 0);

                let val = redMapRow.get(4);
                val += 1;
                redMapRow.set(4, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("row5")) {


            if (slots[i].classList.contains("blue")) {
                redMapRow.set(5, 0);

                let val = blueMapRow.get(5);
                val += 1;
                blueMapRow.set(5, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(5, 0);

                let val = redMapRow.get(5)
                val += 1;
                redMapRow.set(5, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }
        else if (slots[i].classList.contains("row6")) {


            if (slots[i].classList.contains("blue")) {
                redMapRow.set(6, 0);

                let val = blueMapRow.get(6);
                val += 1;
                blueMapRow.set(6, val);

                if (val == 4) {
                    alert("blue wins")
                }
            }
            else if (slots[i].classList.contains("red")) {
                blueMapRow.set(6, 0);

                let val = redMapRow.get(6);
                val += 1;
                redMapRow.set(6, val);

                if (val == 4) {
                    alert("red wins")
                }
            }
        }

    }
}