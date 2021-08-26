document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    

    if (userEmail == 'takajomao@gmail.com' && userPassword == 'abc123') {
        /* const newDetails = document.createElement('p');
        const detailContainer = document.getElementById('details-container');
        newDetails.innerText = userEmail;
        detailContainer.appendChild(newDetails); */
        window.location.href = 'banking.html';
    }
})

