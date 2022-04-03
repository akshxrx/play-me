function handler() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("myInput").value;
    var error = document.getElementById("login-error-msg");

    if (username === "Username" && password === "ForgotPassword?") 
    {
        location.href = "confirm.html";
    } else if (username !== "Username" || password !== "ForgotPassword?")
    {
        console.log(username,password)
        error.style.opacity = 1;
    } else
    {
        error.style.opacity = 0;
    }
}

function check() {
    var username = document.getElementById("username").value;
    var error = document.getElementById("login-error-msg");

    if (username === "333444") 
    {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (username !== "333444")
    {
        error.style.opacity = 1;
    } else
    {
        error.style.opacity = 0;
    }
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// var modal = document.getElementById('signup');

// window.onclick = function(event) {
//   if (event.target !== modal) {
//     modal.style.opacity = 0;
//   }
// }