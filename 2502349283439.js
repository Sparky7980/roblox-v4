// Set the passcode in localStorage
localStorage.setItem("bantu", 119);

// Retrieve the passcode from localStorage
var bantuyes = parseInt(localStorage.getItem("bantu")); // Remember to convert to integer

// Prompt the user for input
var bantuask = prompt("");

// Check if the guess matches the passcode
if (parseInt(bantuask) === bantuyes) { // Convert guess to integer for comparison
    alert("yay");
    openBlankPageWithCode();
} else {
    alert("");
}
