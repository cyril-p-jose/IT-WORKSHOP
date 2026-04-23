function validate() {

let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;
let ph = document.getElementById("ph").value;

if (!email.includes("@")) {
alert("Enter a valid email");
return false;
}

if (pass.length < 6) {
alert("Password should contain at least 6 characters");
return false;
}

if (ph.length != 10 || isNaN(ph)) {
alert("Enter a valid 10 digit phone number");
return false;
}

alert("Registration successful");
return true;
}




function change() {
    if (document.body.style.backgroundColor === "green") {
        document.body.style.backgroundColor = "yellow";
    } else  if (document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "orange";
    }  else  if (document.body.style.backgroundColor === "orange") {
        document.body.style.backgroundColor = "blue";
    }  else  if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "red";
    }  else  if (document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "green";
    }
}










function next() {
let image = document.getElementById("image");

if (image.src.includes("nightview.jpeg")) {
image.src = "daylight.jpeg";
} else {
image.src = "nightview.jpeg";
}

}
  












