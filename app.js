// Frontend logic for handling user authentication and portfolio items

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        window.location.href = '/'; // Redirect to homepage on success
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Registration successful! You can now log in.');
    } else {
        alert('Registration failed. Please try again.');
    }
});

// Fetch Portfolio Items
async function fetchPortfolioItems() {
    const response = await fetch('/portfolio');
    const items = await response.json();
    // Logic to display portfolio items can be added here
}

// Fetch portfolio items on page load
document.addEventListener('DOMContentLoaded', fetchPortfolioItems);
