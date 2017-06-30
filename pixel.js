//====== THIS FOR LOOP CREATES THE GRID FOR DRAWING ======
var myGridSect = document.getElementsByClassName("grid");
var myGrid = document.createElement('table');
for(let x = 0; x < 36; x++){
  var myTR = document.createElement('tr');
  myGrid.appendChild(myTR);
  for(var y = 0; y < 52; y++){
    var myTD = document.createElement('td');
    myTR.appendChild(myTD);
    myTD.className = "square" + y;
  }
}
myGrid.style.marginTop = "40px";
//====== THIS FOR LOOP CREATES THE COLOR PICKER ======
var myColorSect = document.getElementsByClassName('colorPicker');
var myColorPicker = document.createElement('table');
//This assigns the color picker grid the class "colorpicker" and removes the table border assigned the css file.
myColorPicker.className = "colorPicker";
myColorPicker.style.border = "none";
//For loop to create the color picker grid
for(let x = 0; x < 10; x++){
  var colorTR = document.createElement('tr');
  myColorPicker.appendChild(colorTR);
  for(var z = 0; z < 2; z++){
    var colorTD = document.createElement('td');
    colorTR.appendChild(colorTD);
    colorTD.className = "color" + z;
  }
}

//====== THIS APPENDS THE COLORPICKER AND DRAWING GRID ETC TO THE HTML ======
myGridSect[0].appendChild(myColorPicker);
myGridSect[0].appendChild(myGrid);

//This variable is for the currently selected color
var pickedColor = "white";

//====== THIS ADDS AN EVENTLISTENER FOR THE WHOLE DRAWING TABLE ======
myGrid.addEventListener('click', function(event){
  console.log(event.target);
  event.target.style.backgroundColor = pickedColor;
  if(event.target === myGrid){
    event.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  }
  console.log(event.target);
})

var colorCol2 = document.querySelectorAll('.color0');
var colorCol1 = document.querySelectorAll('.color1');

colorCol1[0].style.backgroundColor = "red";
colorCol1[1].style.backgroundColor = "orange";
colorCol1[2].style.backgroundColor = "yellow";
colorCol1[3].style.backgroundColor = "#7CFC00";
colorCol1[4].style.backgroundColor = "blue";
colorCol1[5].style.backgroundColor = "indigo";
colorCol1[6].style.backgroundColor = "violet";
colorCol1[7].style.backgroundColor = "brown";
colorCol1[8].style.backgroundColor = "grey";
colorCol1[9].style.backgroundColor = "white";

colorCol2[0].style.backgroundColor = "#8B0000";
colorCol2[1].style.backgroundColor = "#FF8C00";
colorCol2[2].style.backgroundColor = "#DAA520";
colorCol2[3].style.backgroundColor = "green";
colorCol2[4].style.backgroundColor = "#ADD8E6";
colorCol2[5].style.backgroundColor = "pink";
colorCol2[6].style.backgroundColor = "#FF00FF";
colorCol2[7].style.backgroundColor = "#F4A460";
colorCol2[8].style.backgroundColor = "#D3D3D3";
colorCol2[9].style.backgroundColor = "black";

//====== THIS ADDS AN EVENTLISTENER FOR THE COLOR PICKER ======
myColorPicker.addEventListener('click', function(event){
  for(let x = 0; x < 10; x++){
    if(event.target === colorCol1[x]){
      pickedColor = colorCol1[x].style.backgroundColor;
      document.body.style.backgroundColor = pickedColor;
    }else if(event.target === colorCol2[x]){
      pickedColor = colorCol2[x].style.backgroundColor;
      document.body.style.backgroundColor = pickedColor;
    }
  }
})




//*******************************************
//****** HERE LIES MY FAILED CREATIONS ******
//******************* RIP *******************

// var square0 = myGrid.querySelectorAll(".square0");
// var square1 = myGrid.querySelectorAll(".square1");
// var square2 = myGrid.querySelectorAll(".square2");
// var square3 = myGrid.querySelectorAll(".square3");
// var square4 = myGrid.querySelectorAll(".square4");
// var square5 = myGrid.querySelectorAll(".square5");
// var square6 = myGrid.querySelectorAll(".square6");
// var square7 = myGrid.querySelectorAll(".square7");
// var square8 = myGrid.querySelectorAll(".square8");
// var square9 = myGrid.querySelectorAll(".square9");
//
// var pickedColor = "red";
//
// for (let i = 0; i < 10; i++){
//   square0[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square1[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square2[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square3[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square4[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square5[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square6[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square7[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square8[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }
// for (let i = 0; i < 10; i++){
//   square9[i].addEventListener('click', function(){
//     this.style.backgroundColor = pickedColor;
//   })
// }


// square0[0].addEventListener('click', function(){
//   console.log("hey");
//     this.style.backgroundColor = pickedColor;
// })
// square1[0].addEventListener('click', function(){
//   console.log("hey");
//     this.style.backgroundColor = pickedColor;
// })
// square2[0].addEventListener('click', function(){
//   console.log("hey");
//     this.style.backgroundColor = pickedColor;
// })
// square3[0].addEventListener('click', function(){
//   console.log("hey");
//     this.style.backgroundColor = pickedColor;
// })
