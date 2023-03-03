const postId = document.querySelector('#old-post').getAttribute('post-id');
console.log(postId);
// function to help update an existing post
const updatePostFormHandler = async (event) => {
  event.preventDefault();
  const newTitle = document.querySelector('#new-post-title').value.trim();
  const newText = document.querySelector('#new-post-text').value.trim();
console.log(newTitle)
console.log(newText)
  if (newTitle && newText) {
//put request to update the exisiting post in the database
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ newTitle, newText, postId}),
      headers: { 'Content-Type': 'application/json' },
    });
//redirects user to view their updated post
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert('There was an issue updating your post.');
    }
  }
};

//event listeners to trigger functions above 
document
  .querySelector('#updateBtn')
  .addEventListener("click", updatePostFormHandler);
