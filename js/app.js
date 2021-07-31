document.querySelector("form").addEventListener("submit", formValidate);
function formValidate(e){
  e.preventDefault();
  // if (validateInputText(document.querySelector("form").nom) && validateEmail(document.querySelector("form").email) && validatePassword(document.querySelector("form").password) && validateInputTel(document.querySelector("form").number)) {
  //   document.querySelector("form").submit();
  // }
}

// Verification input name.
document.getElementById("name").addEventListener("input", validateInputText);
function validateInputText(){
  const verify = this.nextElementSibling.nextElementSibling.children[0];
  if(/[a-zA-Z]{7,}$/.test(this.value)){
    verify.style.opacity = "1";
    verify.classList.add("icon__validate");
    this.style.borderColor = "green";
    document.getElementById("erreur__name").innerHTML = "Nom validé !!";
    document.getElementById("erreur__name").style.color = "green";
    return true;
  }else if(!this.value){
    verify.style.opacity = "0";
    document.getElementById("erreur__name").innerHTML = " ";
    this.style.borderColor= "aquamarine";
  }
  else{
    this.style.borderColor = "red";
    document.getElementById("erreur__name").innerHTML = "Veuillez renseigner un nom d'au moins 7 lettres.";
    document.getElementById("erreur__name").style.color = "red";
    verify.style.opacity = "0";
    return false;
  }
}

// Verification input emaail
document.getElementById("email").addEventListener("input", validateEmail);
function validateEmail(){
  let verifyEmail = this.nextElementSibling.nextElementSibling.children[0];
  if(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(this.value)){
    verifyEmail.style.opacity = "1"
    verifyEmail.classList.add("icon__validate")
    this.style.borderColor = "green";
    document.getElementById("erreur__email").innerHTML = "Email validé !!";
    document.getElementById("erreur__email").style.color = "green";
    return true;
  }else if(!this.value){
    verifyEmail.style.opacity = "0";
    document.getElementById("erreur__email").innerHTML = " ";
    this.style.borderColor= "aquamarine";
  }
  else{
    this.style.borderColor = "red";
    document.getElementById("erreur__email").innerHTML = "Veuillez renseigner un email valide.";
    document.getElementById("erreur__email").style.color = "red";
    verifyEmail.style.opacity = "0";
    return false;
  }
}   

// Verification input password
let password = document.querySelector("#password");
password.addEventListener("input", validatePassword);
function validatePassword(){
   if(this.value < 6){
    document.getElementById("erreur__password").innerHTML = "Le mot de passe doit contenir au moins 8 caractères";
    document.getElementById("erreur__password").style.color = "red";
    this.style.borderColor = "red";
  }else if(!/[A-Z]/.test(this.value)){
    document.getElementById("erreur__password").innerHTML = "Le mot de passe doit contenir au moins une majuscule";
    document.getElementById("erreur__password").style.color = "red";
    this.style.borderColor = "red";
  }else if(!/[a-z]/.test(this.value)){
    document.getElementById("erreur__password").innerHTML = "Le mot de passe doit contenir au moins une minuscule";
    document.getElementById("erreur__password").style.color = "red";
    this.style.borderColor = "red";
  }else if(!/[0-9]/.test(this.value)){
    document.getElementById("erreur__password").innerHTML = "Le mot de passe doit contenir au moins un chiffre";
    document.getElementById("erreur__password").style.color = "red";
    this.style.borderColor = "red";
  }else{
    document.getElementById("erreur__password").innerHTML = "Password validé !!";
    document.getElementById("erreur__password").style.color = "green";
    this.style.borderColor = "green";
    return true;
  }
}
// Verification input phone number
document.getElementById("number").addEventListener("input", validateInputTel);
function validateInputTel(){
  let verifyNumber = this.nextElementSibling.nextElementSibling.children[0];
  if(/[0-9]{10}$/.test(this.value)){
    verifyNumber.style.opacity = "1"
    verifyNumber.classList.add("icon__validate")
    this.style.borderColor = "green";
    document.getElementById("erreur__number").innerHTML = "Numéro validé !!";
    document.getElementById("erreur__number").style.color = "green";
    return true;
  }else if(!this.value){
    verifyNumber.style.opacity = "0";
    document.getElementById("erreur__number").innerHTML = " ";
    this.style.borderColor= "aquamarine";
  }else{
    this.style.borderColor = "red";
    document.getElementById("erreur__number").innerHTML = "Veuillez renseigner un numero de telephone valide de 10 chiffres.";
    document.getElementById("erreur__number").style.color = "red";
    verifyNumber.style.opacity = "0";
    return false;
  }
}
// affichage de mot de passe
let eye = document.querySelector(".fa-eye");
let eyeSlash = document.querySelector(".fa-eye-slash");

eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeSlash.style.display = "block";
  password.type = "text";
});
eyeSlash.addEventListener("click", () =>{
  eyeSlash.style.display = "none";
  eye.style.display = "block";
  password.type = "password";
});