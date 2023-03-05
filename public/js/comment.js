//function to handle front end of creating a comment
const addCommentFormHandler = async (event) => {
    event.preventDefault();
    const newComment = document.querySelector('#commentBody').value.trim();
    const postId = document.querySelector('#newComment').value.trim();
    
    if (newComment) {
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ newComment, postId}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert('Failed to add comment.');
      }
    }
  };

  //function that creates an alert to users not logged in to login or signup in order to add a comment to a post
  function decoyMessage() {
    alert("Login or Sign-up to continue.");
  };

  const decoy = document.querySelector('#decoyBtn');
  decoy.addEventListener("click", decoyMessage)

  // event listener for comment form submission
  document
    .querySelector('#commentBtn')
    .addEventListener("click", addCommentFormHandler);