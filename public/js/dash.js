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
  
//   document.querySelector('#logoutBtn').addEventListener('click', logout);

  document
  .querySelector('#test')
  .addEventListener("click", logoutDash);

