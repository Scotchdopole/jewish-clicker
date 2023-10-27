const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");


let numberOfCookies = 0;

let cookieIncrease = 1;
let upgradePrice = 150;

let autoclickUpgradePrice = 400;
let autoclickCookieIncrease = 0;
let autoclickInterval;


cookie.onclick = () => {

    numberOfCookies += cookieIncrease;
    counter.innerText = "penízků: " + Math.round(numberOfCookies);

    cookie.style.transform = "scale(0.8)";
    
    cookie.style.borderRadius = "40px";
    setTimeout(function() {
        cookie.style.transform = "scale(1.2)";
        cookie.style.borderRadius = "25px";
        
      }, 80);

}

upgrade.onclick = () => {
  
  if (numberOfCookies >= upgradePrice){
    cookieIncrease ++;
    numberOfCookies -= upgradePrice;
    upgradePrice *= 1.4;

  }

  counter.innerText = "penízků: " + Math.round(numberOfCookies);
  upgrade.innerText = "upgrade: " + Math.round(upgradePrice);

  upgrade.style.transform = "scale(0.9)"
  setTimeout(function() {

    upgrade.style.transform = "scale(1)"
  }, 100);
}


autoclickUpgrade.onclick = () => {

  if(numberOfCookies >= autoclickUpgradePrice){
    numberOfCookies -= autoclickUpgradePrice;
    autoclickUpgradePrice *= 1.2;
    counter.innerText = "penízků: " + Math.round(numberOfCookies);
    autoclickUpgrade.innerText = "autoclicker: " + Math.round(autoclickUpgradePrice);
    autoclickCookieIncrease++;
    clearInterval(autoclickInterval);

    autoclickInterval = setInterval(() =>{
      numberOfCookies += autoclickCookieIncrease; 
      counter.innerText = "penízků: " + Math.round(numberOfCookies);
    }, 500);
  }
  autoclickUpgrade.style.transform = "scale(0.9)"
  setTimeout(function() {

    autoclickUpgrade.style.transform = "scale(1)"
  }, 100);
  
}

