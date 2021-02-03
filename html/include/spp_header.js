function showLayer(layerid) {
  var layer= document.getElementById(layerid);
  layer.style.visibility = "visible";
}

function hideLayer(layerid) {
  var layer= document.getElementById(layerid);
  layer.style.visibility = "hidden";
}

function turnOff(cell) {
  var currentCell = document.getElementById(cell);
  currentCell.style.backgroundColor="#00008D";
} 

function turnOn(cell) {
  var currentCell = document.getElementById(cell);
  currentCell.style.backgroundColor="#008ADA";
} 

 
