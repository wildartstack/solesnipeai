"use strict"

var popupClose = document.getElementById("popup_close");
var popUpBox = document.getElementById("pop_up_box");
//var connectWallet = document.getElementById("connect_wallet");
var buttons = document.querySelectorAll(".connect_wallet");
var closeBtn = document.querySelectorAll('.btn_close'); 
var closeMenu = document.querySelector('.closeMenu'); 
var connectCard = document.querySelector(".connectCard")
var walletType = document.getElementById("wallet-type")
var openWallet = document.querySelector(".openWallet")
var popupHeading = document.querySelector('.popup-heading');
var menuu = document.querySelector(".menuu");
//var coinName = document.getElementById('data-heading');
var menu_button = document.querySelector(".menu-button");


popUpBox.style.visibility = "hidden";
connectCard.style.visibility = "hidden";
walletType.style.visibility = "hidden";
menuu.style.visibility = "visible";
var list





closeMenu.onclick = function () {
menuu.style.visibility = "hidden";
};

menu_button.onclick = function () {
menuu.style.visibility = "visible";
};




// connectWallet.onclick = function () {   
// popUpBox.style.visibility = "visible";    
// };




// 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("please work")
        popUpBox.style.visibility = "visible";    
    })
})

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        console.log("please work")
        walletType.style.visibility = "hidden";    
    })
})

document.querySelectorAll('.openWallet').forEach(listItem => {
    listItem.addEventListener('click', () => {
        console.log("Wallet list item clicked. Attempting to update heading and show modal.");

        walletType.style.visibility = "visible";
        // OR: walletType.style.display = "block"; 

        console.log(`Heading updated to: ${selectedCoin}. Modal visibility set.`);
    });
        
    });



popupClose.onclick = function () {
popUpBox.style.visibility = "hidden";
};


closeBtn.onclick = function () {
connectCard.style.visibility = "hidden";
};





