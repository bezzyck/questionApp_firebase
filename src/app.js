import {Question} from './questions'
import  {createModal, valid} from './utilits';
import './style.css';
import {authWithEmailAndPassword, getAuth} from "./auth";

//Getting items
const form = document.querySelector('#form');
const input = form.querySelector('#textInput');
const submitBtn = form.querySelector('#submit');
const modalAdd = document.querySelector('#modal__add');

// download all messages
window.addEventListener('load', Question.renderList)

modalAdd.addEventListener('click', openModal)

// Listener on submit form
form.addEventListener('submit', submitFormHandler);

// disabled button if validation failed
input.addEventListener('input', () => {
    submitBtn.disabled = !valid(input.value)
})

// Function listener
function submitFormHandler(e) {
    e.preventDefault()

    if(valid(input.value)){
        const question = {
            text: input.value,
            date: new Date().toJSON()
        }
        // disabled button (not spam)
        submitBtn.disabled = true

        // request to server
        Question.create(question)

            // return the form to normal
            input.value = '';
            input.className = '';
            submitBtn.disabled = false;
    }
}

function openModal() {
createModal('Авторизация', getAuth())
    document.querySelector('#auth-form')
        .addEventListener('submit', authFormHand, {once: true})
}

function authFormHand (event) {
    event.preventDefault();
    let email = event.target.querySelector('#email').value;
    let password = event.target.querySelector('#password').value;

    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAuth)
}


function renderModalAuth(content) {
    console.log('content', content)
}