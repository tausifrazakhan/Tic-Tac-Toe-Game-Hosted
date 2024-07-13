let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset-btn");
    let newGameBtn = document.querySelector("#new-game-btn");
    let msg = document.querySelector(".msg");
    let playMove = document.querySelector(".play");
    let countX = document.querySelector("#count-x");
    let countO = document.querySelector("#count-o");
    


    let turnO = true; //playerX playerO
    let winX = 0;
    let winO = 0;

    const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];


    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (turnO) {
          box.innerText = "O";
          turnO = false;
        }
        else {
          box.innerText = "X";
          turnO = true;
        }

        box.disabled = true;

        checkWinner();
      });
    });


    const resetGame = () => {
      turnO = true;
      enableBoxes();
      msg.classList.add("hide");
      newGameBtn.classList.add("hide");
      playMove.classList.remove("hidden");
      resetBtn.classList.remove("hide");
  
    }


    const disableBoxes = () => {
      for (let box of boxes) {
        box.disabled = true;
      }
    }
    const enableBoxes = () => {
      for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
    }


    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);


    const showWinner = (winner) => {
      if (winner === "X") {
        winX++;
        countX.innerText=winX;
      }
      else {
        winO++;
        countO.innerText=winO;
      }

      msg.innerText = `Congratulations!
       Winner is '${winner}'`;
      msg.classList.remove("hide");
      newGameBtn.classList.remove("hide");
      resetBtn.classList.add("hide");
      playMove.classList.add("hidden");
      disableBoxes();
    }




    const checkWinner = () => {
      for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2val != "" && pos3val != "") {
          if (pos1Val === pos2val && pos2val === pos3val) {
            console.log("winner", pos1Val)
            showWinner(pos1Val);
          }
        }
      }


    }