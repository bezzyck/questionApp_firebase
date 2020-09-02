// function dynamic create window auth
export function getAuth() {
    return `
     <form class="mui-form" id="auth-form">
                <div class="mui-textfield">
                    <input type="email" placeholder="Введите свой email" id="email">
                    <br><br>
                    <input type="password" placeholder="Введите свой пароль" id="password">
                </div>
                <br>
                <button type="submit"
                        class="mui-btn mui-btn--raised mui-btn--danger"
                >
                    Войти
                </button>
            </form>
    `
}

// Get email and password from Firebase
export function authWithEmailAndPassword() {
    let apiKey = 'AIzaSyAVt3lz3E9Ndz2OOKI0K04Gos6jC1KJ3_0';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.idToken)

}