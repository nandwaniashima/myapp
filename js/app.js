document.addEventListener("DOMContentLoaded", () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const messageContainer = document.querySelector("#message-container");

  const users = {}; // Temporary storage for demonstration

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Handle Sign Up Form Submission
  document.querySelector(".sign-up-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.querySelector("#signup-username").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;

    // Store user information (for demo purposes)
    users[email] = { username, password };

    // Display success message
    showMessage("Signed up successfully!", "success");
    setTimeout(() => {
      messageContainer.style.opacity = 0; // Hide message after 2 seconds
    }, 2000);
  });

  // Handle Sign In Form Submission
  document.querySelector(".sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.querySelector("#signin-username").value;
    const password = document.querySelector("#signin-password").value;

    const email = Object.keys(users).find(email => users[email].username === username);

    if (email && users[email].password === password) {
      window.location.href = "index3.html"; // Redirect to index.html on successful login
    } else {
      showMessage("Email or password doesn't match", "error");
      setTimeout(() => {
        messageContainer.style.opacity = 0; // Hide message after 2 seconds
      }, 2000);
    }
  });

  function showMessage(message, type) {
    messageContainer.textContent = message;
    messageContainer.className = `message-container ${type}`;
    messageContainer.style.opacity = 1; // Show message
  }
});

