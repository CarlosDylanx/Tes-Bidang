console.log('script.js loaded');

function togglePassword() {
  const password = document.getElementById('password');
  const toggle = document.querySelector('.toggle-password');

  if (password.type === 'password') {
    password.type = 'text';
    toggle.textContent = '🙈';
  } else {
    password.type = 'password';
    toggle.textContent = '👁️';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.toLowerCase() === 'user' && password === '1234') {
        window.location.href = 'index2.html';
    
    } else {
      alert('Username atau password salah!');
    }
  });
});