let tower1 = document.createElement("div");
    tower1.id = "tower1";
    tower1.className = "towers";

let tower2 = document.createElement("div");
    tower2.id = "tower2";
    tower2.className = "towers";

let tower3 = document.createElement("div");
    tower3.id = "tower3";
    tower3.className = "towers";

let container = document.getElementById("container");
    container.appendChild(tower1);
    container.appendChild(tower2);
    container.appendChild(tower3);


let disc1 = document.createElement("div");
    disc1.id = "disc1";
    disc1.className = "discs"

let disc2 = document.createElement("div");
    disc2.id = "disc2";
    disc2.className = "discs"

let disc3 = document.createElement("div");
    disc3.id = "disc3";
    disc3.className = "discs"

let disc4 = document.createElement("div");
    disc4.id = "disc4";
    disc4.className = "discs"

    tower1.appendChild(disc1);
    tower1.appendChild(disc2);
    tower1.appendChild(disc3);
    tower1.appendChild(disc4);

function victoryCondition () {
    let lastTower = document.getElementById("tower3");
    let verify = lastTower.childElementCount;

        if (verify === 4) {
            let winner = document.querySelector(".winner");
                winner.classList.toggle("active");                  
        }
}

function close() {
    let winner = document.querySelector(".winner");
        winner.classList.toggle("active");
    document.location.reload();
}