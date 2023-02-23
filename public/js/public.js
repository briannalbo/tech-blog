
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
};

//function to handle a new user signing up 
//uses post method to push user criteria to database for future login
//after sign-up, seemlessly transitions to dashboard
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
//eventlisteners to trigger functions above
// const loginButton = document.querySelector('#loginBtn');
// const signupBtn = document.querySelector('#signupBtn');
// const logoutBtn = document.querySelector('#logout');

// loginButton.addEventListener("click", loginFormHandler);
// signupBtn.addEventListener("click", signupFormHandler);
// logoutBtn.addEventListener("click", logoutDash);





document
  .querySelector('#loginBtn')
  .addEventListener("click", loginFormHandler);

document
  .querySelector('#signupBtn')
  .addEventListener("click", signupFormHandler);

