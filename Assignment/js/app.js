// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";//일반적으로 string만 포함된 변수는 대문자로 표기.
const USERNAME_KEY = "username";

const link = document.querySelector("a");


function paintGreetings(username){
    //중복 발생! function 만들자!
    greeting.innerText = `Hello ${username}`; //둘 다 변수를 strings 안에서 사용할 수 있게 해줌.
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


function onLoginSubmit(event) {

    event.preventDefault();//Stopping the default behaviour
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);

    



    // console.log(event);
    // console.log(loginInput.value);
    // console.log(username);
    // if(value === "") {
    //     alert("Please write your name");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.");
    // }

    // console.log("hello", loginInput.value);
    // console.log("click!!!");
}

/*
function handleLinkClick(event){
    event.preventDefault();
    // alert("clicked!");//default browser starts: boolean!
    console.dir(event);
}*/





// loginButton.addEventListener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// onLoginSubmit({information});

// handleLinkClick({information about the event that just happened})


//locaStorage.setItem("username", "nico")
//localStorage.removeItem("username")

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
 } else {
     //show the greetings
    //  greeting.innerText =  `Hello ${username}`
    //  greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
 }