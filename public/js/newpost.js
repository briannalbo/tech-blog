// function to take user input and create new post in database
const newPostFormHandler = async (event) => {
    const postTitle = document.querySelector('#new-post-title').value.trim();
    const postText = document.querySelector('#new-post-text').value.trim();
    event.preventDefault();
  
    if (postTitle && postText) {
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Something went wrong.');
      }
    }
  };
  // click event on 'create post' button triggers new post function
  document
    .querySelector('#createPost')
    .addEventListener("click", newPostFormHandler);