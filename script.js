function addComment() {
    const input = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    const commentText = input.value.trim();

    if (commentText) {
        const comment = document.createElement('div');
        comment.textContent = commentText;
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
