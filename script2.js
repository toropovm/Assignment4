//js file for Q3-4
let submit = document.querySelector("#submit");

submit.addEventListener("click", function(){

    let email = document.querySelector("#email").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let correctPass = "12345678";

    if(password != correctPass) {
        alert("Wrong Password!");
    }
    else {
        let h1 = document.querySelector("#h1").innerHTML = "Logging In....";
    }
})