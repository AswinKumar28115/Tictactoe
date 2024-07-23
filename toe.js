let currentPlayer = "x";
let cells = Array(9).fill(null)
console.log(cells)

function winning() { 
    if (((cells[0] !=null) && (cells[0] == cells[1]) && (cells[1]==cells[2]))||
        ((cells[3] !=null) &&(cells[3] == cells[4]) && (cells[4]==cells[5]))||
        ((cells[6] !=null) &&(cells[6] == cells[7]) && (cells[7]==cells[8]))||
        ((cells[0] !=null) &&(cells[0] == cells[3]) && (cells[3]==cells[6]))||
        ((cells[1] !=null) &&(cells[1] == cells[4]) && (cells[4]==cells[7]))||
        ((cells[2] !=null) &&(cells[2] == cells[5]) && (cells[5]==cells[8]))||
        ((cells[0] !=null) &&(cells[0] == cells[4]) && (cells[4]==cells[8]))||
        ((cells[2] !=null) &&(cells[2] == cells[4]) && (cells[4]==cells[6])))


        document.write(currentPlayer+"is the winner")
        if ((cells.some((e) => e === null)) == false){
          document.write("its a draw")
      }
      }
function handleClick(x) {
    if (cells[x.id] == null) {
        cells[x.id] = currentPlayer;
    }
    else{
      return
    }
    x.innerText = currentPlayer;
    winning()
    if (currentPlayer === "x") {
        currentPlayer = "o"
    }
    else {
        currentPlayer = "x"
    
    }
   console.log(cells); 
   console.log(currentPlayer);
}

