var buriedTreasure = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
var bomb = Math.floor(Math.random() * (16 - 1 + 1)) + 1;

const treasure = (location) => {
  if(location=== buriedTreasure){
    document.getElementById(location).innerHTML = "💰"
    alert("You found something")
  } else if (location=== bomb){
    document.getElementById(location).innerHTML="💣"
    alert("You loose!")
  } else {
    document.getElementById(location).innerHTML="X"
  }
}

const restartGame = () => {
  buriedTreasure = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  bomb = Math.floor(Math.random() * (16 - 1 + 1)) + 1;

  while (buriedTreasure === bomb){
    bomb = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  }

  var arrayOfElements = document.getElementsByTagName('td')
  
  for(var i = 0; i < arrayOfElements.length; i++){
    arrayOfElements[i].innerHTML = "?"
  }

}