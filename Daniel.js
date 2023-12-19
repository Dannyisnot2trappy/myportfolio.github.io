document.getElementById("demo").innerHTML = "Date : " + Date();



// Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.getElementById("mainButton").addEventListener("click", function() {
    var options = document.getElementById("optionButtons");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
});

document.getElementById("dropdown").onclick = function() {
    var options = document.getElementById("optionButtons");
    options.style.display = options.style.display === "none" ? "block" : "none";
};








