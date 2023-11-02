const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");
const gambaButton = document.getElementById("gambaButton");
const cpsDisplay = document.getElementById("cpsDisplay");
const cpcDisplay = document.getElementById("cpcDisplay");
const gambaDisplay = document.getElementById("gambaDisplay");


let numberOfCookies = 0;

let cookieIncrease = 1;
let upgradePrice = 50;

let autoclickUpgradePrice = 300;
let autoclickCookieIncrease = 0;
let autoclickInterval;




cookie.onclick = () => {

    numberOfCookies += cookieIncrease;
    counter.innerText = "penízků: " + Math.round(numberOfCookies);

    cookie.style.transform = "scale(0.8)";
    
    cookie.style.borderRadius = "40px";
    setTimeout(function() {
        cookie.style.transform = "scale(1)";
        cookie.style.borderRadius = "25px";
        
      }, 80);

}

upgrade.onclick = () => {
  
  if (numberOfCookies >= upgradePrice){
    cookieIncrease += 1;
    numberOfCookies -= upgradePrice;
    upgradePrice *= 1.1;

  }

  counter.innerText = "penízků: " + Math.round(numberOfCookies);
  upgrade.innerText = "magnet na penízky: " + Math.round(upgradePrice);
  cpcDisplay.innerText = "penízků za kliknutí: " + Math.round(cookieIncrease);
  
  
}


autoclickUpgrade.onclick = () => {

  if(numberOfCookies >= autoclickUpgradePrice){
    numberOfCookies -= autoclickUpgradePrice;
    autoclickUpgradePrice *= 1.1;
    counter.innerText = "penízků: " + Math.round(numberOfCookies);
    autoclickUpgrade.innerText = "otrocký žid: " + Math.round(autoclickUpgradePrice);
    autoclickCookieIncrease++;
    cpsDisplay.innerText = "penízků za sekundu: " + Math.round(autoclickCookieIncrease);
    clearInterval(autoclickInterval);

    autoclickInterval = setInterval(() =>{
      numberOfCookies += autoclickCookieIncrease; 
      counter.innerText = "penízků: " + Math.round(numberOfCookies);
      
    }, 1000);
  }
  
}

gambaButton.onclick = () => {
  
  if (numberOfCookies >= 1000){
    numberOfCookies -= 1000
    let gambaNumber = Math.floor(Math.random() * 6);
    console.log(gambaNumber);
  if (gambaNumber == 0){
    

      if (cookieIncrease <= 10){
        cookieIncrease = 1;
      }else if (cookieIncrease > 10){
        cookieIncrease -= 10;
      }
      
      cpcDisplay.innerText = "penízků za kliknutí: " + Math.round(cookieIncrease);
      gambaDisplay.innerText = ("gg penízky za \n kliknutí -10")
      counter.innerText = "penízků: " + Math.round(numberOfCookies);
    }

    else if (gambaNumber == 1){

      cookieIncrease += 10;
      cpcDisplay.innerText = "penízků za kliknutí: " + Math.round(cookieIncrease);
      gambaDisplay.innerText = "penízky za \n kliknutí +10"
      counter.innerText = "penízků: " + Math.round(numberOfCookies);

    }else if (gambaNumber == 2){

      autoclickCookieIncrease += 7;
      cpsDisplay.innerText = "penízků za sekundu: " + Math.round(autoclickCookieIncrease);
      gambaDisplay.innerText = "penízky za \n sekundu +7"
      counter.innerText = "penízků: " + Math.round(numberOfCookies);

    }else if (gambaNumber == 3){

      if (autoclickCookieIncrease <= 7){
        autoclickCookieIncrease = 1;
      }else if (autoclickCookieIncrease > 7){
        autoclickCookieIncrease -= 7;
      }

      
      cpsDisplay.innerText = "penízků za sekundu: " + Math.round(autoclickCookieIncrease);
      gambaDisplay.innerText = "gg penízky za \n sekundu -7"
      counter.innerText = "penízků: " + Math.round(numberOfCookies);

    }else if (gambaNumber == 4){

      numberOfCookies -= 4000;
      gambaDisplay.innerText = "gg penízky \n -4000"
      counter.innerText = "penízků: " + Math.round(numberOfCookies);

    }else if (gambaNumber == 5){

      numberOfCookies += 5000;
      gambaDisplay.innerText = "penízky +5000"
      counter.innerText = "penízků: " + Math.round(numberOfCookies);

    }
    
  }


}

