let currentUser = null;

function login() {
    const username = document.getElementById('username').value.trim();
    if (username) {
        currentUser = username;
        document.getElementById('welcome-message').textContent = `Добро пожаловать, ${currentUser}!`;
        toggleLoginForm(false);
        document.getElementById('comment-section').style.display = 'block';
    } else {
        alert('Пожалуйста, введите имя!');
    }
}

function logout() {
    currentUser = null;
    toggleLoginForm(true);
    document.getElementById('comment-section').style.display = 'none';
}

function toggleLoginForm(show) {
    document.getElementById('login-form').style.display = show ? 'block' : 'none';
    document.getElementById('user-info').style.display = show ? 'none' : 'block';
}

function addComment() {
    if (!currentUser) {
        alert('Пожалуйста, войдите, чтобы оставить комментарий!');
        return;
    }

    const input = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    const commentText = input.value.trim();

    if (commentText) {
        const comment = document.createElement('div');
        comment.textContent = `${currentUser}: ${commentText}`;
        commentList.appendChild(comment);
        input.value = ''; // очистка поля ввода
    } else {
        alert('Пожалуйста, введите комментарий!');
    }
}

function likeAnime(button) {
    const countSpan = button.querySelector('span');
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
}

// Регистрация пользователя
function register() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    
    if (username && password.length >= 6) {
        document.getElementById('registration-message').textContent = `Пользователь ${username} зарегистрирован!`;
        // здесь можно добавить логику для сохранения пользователя
    } else {
        if (!username) {
            alert('Пожалуйста, введите имя для регистрации!');
        } else {
            alert('Пароль должен содержать минимум 6 символов!');
        }
    }
}

// Переключение вкладок
document.querySelectorAll('nav a').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});
