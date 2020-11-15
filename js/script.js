function naviToggle() {
        var navi = document.getElementById("navi")
    console.log(navi.style.display)    
       
    if (navi.style.display === "flex") {
        navi.style.display = "none"
    }
    else {
        navi.style.display = "flex"
    }
}

function contactbutton() {
    var contactbutton = document.getElementById("contactbutton")
}
function submitbutton() {
    var submitbutton = document.getElementById("submitbutton")
    window.prompt("Thank you for interest on our SOS Badge. We will get back to you shortly")
    return (window.prompt)
}

function validateform() {
    console.log("Hi")
    var x = document.getElementById("submitbutton")
    console.log(x)
    if (x == "") {
        alert("You must complete all fields ")
        return false;
    } else {
        alert("Thank you for interest on our SOS Badge. We will get back to you shortly")
        return;
    }
}

/*navi.style.display = "flex" ? navi.style.display = "none" : navi.style.display = "flex"*/
