const logoutDash = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
      console.log('you successfully logged out');
    } else {
      alert(response.statusText);
    }
  };
  
const newPost = async () => {
    document.location.replace('/new-post');
    console.log('create your post here');
};

document
// .querySelector('#add-post')
// .addEventListener("click", newPost);


  document
  .querySelector('#logout')
  .addEventListener("click", logoutDash);

