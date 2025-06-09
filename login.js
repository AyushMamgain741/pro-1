document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop page reload

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send a POST request to the backend to authenticate the user
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            // If login is successful, you can redirect the user
            alert(result.message); // Optional: Show success message
            window.location.href = 'file:///E:/web%20dev/new.html'; // Specify your home page here
        } else {
            // If login fails, show an alert with the error message
            alert(result.message);
        }
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Something went wrong. Please try again!');
    }
});
