

//Funcao do botao draw

function quadro() {
  let number = document.getElementById("getnumber").value;
  console.log(number);

  if (number < 1 || number > 5) {
    alert("Seleccione de 1 a 5");
  
  }else{

    let cartas = document.querySelector(".cartas");
    for(let i =0; i<number; i ++){
      cartas.appendChild(dibujarCarta(i));
    }


    //document.addEventListener("Draw", console.log(""));
    //let x = document.createElement("carta"); x.innerHTML = "";
    //document.body.appendChild(x);
    
  }
}

function dibujarCarta(i){
  //console.log("carta: " + i);
  let x = document.createElement("div");
  x.classList.add("card"); 
  x.innerHTML = "Fernanda " + i;
  return x;
}

// function random() {
//   let first_ronda = document.getElementById("Draw").value;
//   if (number > 1 || number < 5){
//     element.addEventListener("Draw", function(){random (carta1, carta2, carta3);});

//   }
//   console.log (carta1 + carta2 + carta3);
// }

// inicio da rotacao
const bubbleSort = (arr) => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};