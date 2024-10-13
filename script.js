let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinbtn.onclick=function(){
  nameField.style.maxHeight="0";
  title.innerHTML="Sign in for user"
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");
}

signupbtn.onclick=function(){
  nameField.style.maxHeight="60px";
  title.innerHTML="Sign up for user"
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");
}