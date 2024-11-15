function showTab(tabName) {
    const formContainer = document.getElementById('formContainer');
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');

    if (tabName === 'signIn') {
        formContainer.innerHTML = `
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button class="btn-primary">Sign In</button>
        `;
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
    } else if (tabName === 'signUp') {
        formContainer.innerHTML = `
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm Password" required>
            <button class="btn-primary">Sign Up</button>
        `;
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
    }
}

document.getElementById('continueBtn').addEventListener('click', function () {
    // Redirect to the main page
    window.location.href = '../main/main.html';
});
