
const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
 
const data ={
    username:"uuganaa",
    password:"1234"
}




const check = () => {


   
    if(username.value === data.username && password.value === data.password ){

console.log("amjilttai newterlee")


    }else{
console.log("buruuu")
    }




}

loginBtn.addEventListener("click", check);
