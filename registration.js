
        document.getElementById('registrationForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
            let password = document.getElementById('password').value;

            // Check if all fields are filled (optional extra validation)
            if (firstName && lastName && email && phone && password) {
                alert('Registration Successful!\n' +
                    'First Name: ' + firstName + '\n' +
                    'Last Name: ' + lastName + '\n' +
                    'Email: ' + email + '\n' +
                    'Phone: ' + phone);
            } else {
                alert('Please fill out all fields.');
            }
        });
    