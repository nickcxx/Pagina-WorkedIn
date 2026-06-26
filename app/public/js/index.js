const postButton = document.getElementById('postButton');
const postInput = document.getElementById('postInput');
const postsContainer = document.getElementById('postsContainer');

postButton.addEventListener('click', () => {
  const text = postInput.value.trim();

  if (text !== '') {
    const newPost = document.createElement('article');
    newPost.classList.add('post');

    newPost.innerHTML = `
      <h3>Você</h3>
      <p>${text}</p>
      <button class="like-btn">Curtir</button>
    `;

    postsContainer.prepend(newPost);
    postInput.value = '';
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('like-btn')) {
    if (event.target.textContent === 'Curtir') {
      event.target.textContent = 'Curtido ❤️';
    } else {
      event.target.textContent = 'Curtir';
    }
  }
});
