const form = document.getElementById('text-form');
const message = document.getElementById('message');
const secretText = 'ILOVEY0U9'; // Replace with your actual secret text

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const enteredText = document.getElementById('secret-text').value;

  if (enteredText === secretText) {
    message.textContent = 'Correct! Redirecting...';
    // Redirect to the desired URL after a short delay (replace with your URL)
    setTimeout(() => {
      window.location.href = 'https://akasxh.github.io/pages/happy_birthday.html';
    }, 2000); // Redirect after 2 seconds
  } else {
    message.textContent = 'Incorrect text. Try again.';
  }
});
