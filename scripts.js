// username && password validation
function validate(event) {
  event.preventDefault();
 var getUsername = document.querySelector("#Username").value;
  var getPassword = document.querySelector("#Password").value;

  if (getUsername === "") {
    alert("Enter Username!!");
    return;
  }
  if (getPassword === "") {
    alert("Enter Password");
    return;
  }
  alert("Login Successful!!");
}


  function show() {
    var p = document.getElementById("password");
    p.setAttribute("type", "text");
  }

  function hide() {
    var p = document.getElementById("password");
    p.setAttribute("type", "password");
  }

  var pwShown = 0;

  document.getElementById("eye").addEventListener(
    "click",
    function () {
      if (pwShown == 0) {
        pwShown = 1;
        show();
      } else {
        pwShown = 0;
        hide();
      }
    },
    false
  );

 
