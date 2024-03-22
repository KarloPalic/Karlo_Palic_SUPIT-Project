//Register
$("#registerForm").submit(function (e) {
    e.preventDefault();
    let username = $("#register-username").val();
    let password = $("#register-password").val();

    const data = {
        "username": username,
        "password": password
    }

    $.ajax({
        "url": "https://www.fulek.com/data/api/user/register",
        "type": "POST",
        "data": JSON.stringify(data),
        "contentType": "application/json",
        "dataType": "json",
        success: function (data) {
            if (data.isSuccess === true) {
                let successMsg = document.getElementById("register-successful");
                successMsg.style.display = 'block';

                setTimeout(function () {
                    window.location = "Login.html";
                }, 2000);

            } else {
                let error_message = document.getElementById("register-error");
                error_message.innerHTML = "Failed to register user";
            }
        }
    });
});