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
  // event listener for comment form submission
  document
    .querySelector('#commentBtn')
    .addEventListener("click", addCommentFormHandler);