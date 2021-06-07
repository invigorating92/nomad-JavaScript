const userForm = document.querySelector(".user-form");
const userInputText = userForm.querySelector(".user-input_text");
const userInputSubmit = userForm.querySelector(".user-input_submit");
const greeting = userForm.querySelector(".greeting");

const SHOW = "show", NOSHOW ="Noshow";
const USER_LS = "currentUser";


console.log(userInputText.value);

function paintGreeting(text){
    greeting.classList.add(SHOW);
    greeting.innerText=`Hello ${text}`;
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = userInputText.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function SubmitEvent(){
    userForm.addEventListener("submit", handleSubmit);
    userForm.classList.add(NOSHOW);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        SubmitEvent();
    }else{
        paintGreeting(currentUser);
    }
}


localStorage

function init(){
    loadName();
}
init();