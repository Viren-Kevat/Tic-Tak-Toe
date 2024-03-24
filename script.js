let btn = document.querySelectorAll(".btn");
let board = document.querySelectorAll(".board");
let msgcntr = document.querySelector(".msgcontainer");
let newbtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let plyer = "0";
let winner = "";

let nbtn = newbtn.addEventListener("click", (e) => {
  location.reload(true);
});

let entry = btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (plyer == "0") {
      plyer = "1";
      btn.innerText = "X";
    } else {
      plyer = "0";
      btn.innerText = "O";
    }
    btn.disabled = true;
    checkwinner(e);
  });
});

let showwinner = (winner) => {
  msg.innerText = `Congrulation Winner is ${winner}`;
  msgcntr.classList.remove("hidden");
};
// two dimentional array is used
const winpatern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [6, 4, 2],
];

let checkwinner = (e) => {
  for (let i = 0; i < winpatern.length; i++) {
    // console.log(
    //   btn[winpatern[i][0]].innerText,
    //   btn[winpatern[i][1]].innerText,
    //   btn[winpatern[i][2]].innerText
    // );
    let p0val = btn[winpatern[i][0]].innerText;
    let p1val = btn[winpatern[i][1]].innerText;
    let p2val = btn[winpatern[i][2]].innerText;
    if (p0val != "" && (p1val != "") & (p2val != "")) {
      if (p0val === p1val && p1val === p2val) {
        console.log("Winner", p0val);
        showwinner(p0val);
      }
    }
  }
};
