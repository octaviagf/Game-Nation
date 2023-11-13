//Login code

const loginButton = document.getElementById("button1");

function login() {
  const loginUsername = document.querySelector(".loginUsername").value;
  const loginPassword = document.querySelector(".loginPassword").value;

  if (loginUsername === "" || loginPassword === "") {
    Swal.fire({
      icon: "error",
      title: "Oops!!!",
      text: "Empty fields.",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Welcome to Game Nation!",
    });
    document.querySelector(".loginUsername").value = "";
    document.querySelector(".loginPassword").value = "";
  }
}

loginButton.addEventListener("click", login);

//Sign in code

const signinButton = document.getElementById("button2");

function signin() {
  const signinUsername = document.querySelector(".signinUsername").value;
  const signinEmail = document.querySelector(".signinEmail").value;
  const signinPassword = document.querySelector(".signinPassword").value;

  if (signinUsername === "" || signinEmail === "" || signinPassword === "") {
    Swal.fire({
      icon: "error",
      title: "Oops!!!",
      text: "Empty fields.",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Welcome to Game Nation!",
    });
    document.querySelector(".signinUsername").value = "";
    document.querySelector(".signinEmail").value = "";
    document.querySelector(".signinPassword").value = "";
  }
}

signinButton.addEventListener("click", signin);
