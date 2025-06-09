document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Client-side check first
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, confirmPassword })
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            window.location.href = "file:///E:/web%20dev/new.html"; // change to your actual homepage
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Something went wrong. Please try again.");
    }
});
