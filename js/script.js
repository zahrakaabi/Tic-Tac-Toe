/* --------------------------------------------------------
                         VARIABLES
--------------------------------------------------------- */
const BUTTONS = document.querySelectorAll('.cell');

/* --------------------------------------------------------
                 WHO IS THE PLAYER FUNCTION
--------------------------------------------------------- */
function WhoIsThePlayer(player) {
    const PLAYER_CONTAINER = document.getElementById("player");
    PLAYER_CONTAINER.innerHTML = player;
    return '';
}

/* --------------------------------------------------------
                   ONCLICK BUTTON FUNCTION
--------------------------------------------------------- */
function OnClickTic() {
    let ticket= "X";
    WhoIsThePlayer(ticket);
    for (let i=0; i<BUTTONS.length; i++) {
        BUTTONS[i].onclick = () => {
            BUTTONS[i].innerHTML = ticket;
            if(ticket === "X") {
                ticket = "O";
            } else {
                ticket = "X";
            }
        WhoIsThePlayer(ticket);
        BUTTONS[i].classList.add("disable-button");

        if((BUTTONS[0].innerHTML === "X" && BUTTONS[1].innerHTML === "X" && BUTTONS[2].innerHTML === "X")
        || (BUTTONS[0].innerHTML === "X" && BUTTONS[3].innerHTML === "X" && BUTTONS[6].innerHTML === "X")
        || (BUTTONS[0].innerHTML === "X" && BUTTONS[4].innerHTML === "X" && BUTTONS[8].innerHTML === "X")
        || (BUTTONS[6].innerHTML === "X" && BUTTONS[7].innerHTML === "X" && BUTTONS[8].innerHTML === "X")
        || (BUTTONS[2].innerHTML === "X" && BUTTONS[5].innerHTML === "X" && BUTTONS[8].innerHTML === "X")
        || (BUTTONS[2].innerHTML === "X" && BUTTONS[4].innerHTML === "X" && BUTTONS[6].innerHTML === "X")
        || (BUTTONS[3].innerHTML === "X" && BUTTONS[4].innerHTML === "X" && BUTTONS[5].innerHTML === "X")
        || (BUTTONS[1].innerHTML === "X" && BUTTONS[4].innerHTML === "X" && BUTTONS[7].innerHTML === "X")) {
           const RESULT_BOX = document.getElementsByClassName('x-winner');
           RESULT_BOX[0].classList.add("show-result");
        } 

        if((BUTTONS[0].innerHTML === "O" && BUTTONS[1].innerHTML === "O" && BUTTONS[2].innerHTML === "O")
        || (BUTTONS[0].innerHTML === "O" && BUTTONS[3].innerHTML === "O" && BUTTONS[6].innerHTML === "O")
        || (BUTTONS[0].innerHTML === "O" && BUTTONS[4].innerHTML === "O" && BUTTONS[8].innerHTML === "O")
        || (BUTTONS[6].innerHTML === "O" && BUTTONS[7].innerHTML === "O" && BUTTONS[8].innerHTML === "O")
        || (BUTTONS[2].innerHTML === "O" && BUTTONS[5].innerHTML === "O" && BUTTONS[8].innerHTML === "O")
        || (BUTTONS[2].innerHTML === "O" && BUTTONS[4].innerHTML === "O" && BUTTONS[6].innerHTML === "O")
        || (BUTTONS[3].innerHTML === "O" && BUTTONS[4].innerHTML === "O" && BUTTONS[5].innerHTML === "O")
        || (BUTTONS[1].innerHTML === "O" && BUTTONS[4].innerHTML === "O" && BUTTONS[7].innerHTML === "O")) {
           const RESULT_BOX = document.getElementsByClassName('o-winner');
           RESULT_BOX[0].classList.add("show-result");
        }
        }
    }
    return "";
}

/* --------------------------------------------------------
                   RELOAD PAGE FUNCTION
--------------------------------------------------------- */
function ReloadPage() {
    const RELOAD_BUTTONS = document.getElementsByClassName('relaod-page');
    for(let i=0; i<RELOAD_BUTTONS.length; i++) {
        RELOAD_BUTTONS[i].addEventListener('click', () => {
            location.reload();
        })
    }
    return '';
}

// EXCUTION
OnClickTic();
ReloadPage();