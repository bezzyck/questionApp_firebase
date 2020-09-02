export class Question{
    static create(question) {
        fetch('https://mypodcast-app.firebaseio.com/question.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                question.id = res.name
                return question
            })
            .then(addToLS)
            .then(Question.renderList)
    }
    static renderList() {

        const questions = getQuestionsFromLS();

        const html = questions.length
            ? questions.map(card).join(' ')
            : `<div class="mui--text-headline">Вы ничего не спрашивали</div>`;

        let list = document.querySelector('#list');
        list.innerHTML = html;

    }
    static fetch(token) {
        if(!token) {
            return Promise.resolve(`<p class="error">У вас нет токена</p>`)
        }
        fetch(`https://mypodcast-app.firebaseio.com/question.json?auth=${token}`)
            .then(res => res.json())
            .then(questions => {
                console.log('Question', questions)
            })
    }
}

function addToLS (question) {
    const all = getQuestionsFromLS();
    all.push(question);
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLS() {
    return JSON.parse(localStorage.getItem('questions') || '[]');
}

function card(question) {
    return `
    <div class="mui--text-black-54">
    ${new Date(question.date).toLocaleDateString()}
    ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>
     <br>   `
}