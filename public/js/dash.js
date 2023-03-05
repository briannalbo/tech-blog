//function to log user out of session
const logoutDash = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    //redirects to login page upon successfully logging out
    if (response.ok) {
      document.location.replace('/login');
      console.log('you successfully logged out');
    } else {
      alert(response.statusText);
    }
  };
  

  document
  .querySelector('#logout')
  .addEventListener("click", logoutDash);

