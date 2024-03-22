//Login
$("#loginForm").submit(function (e) {
    e.preventDefault();
    let username = $("#login-username").val();
    let password = $("#login-password").val();

    const data = {
        "username": username,
        "password": password
    }

    $.ajax({
        "url": "https://www.fulek.com/data/api/user/login",
        "type": "POST",
        "data": JSON.stringify(data),
        "contentType": "application/json",
        "dataType": "json",
        success: (function (data) {
            if (data.isSuccess === true) {
                sessionStorage.setItem("username", data.data.username);
                sessionStorage.setItem("token", data.data.token);
                let successMsg = document.getElementById("login-successful");
                successMsg.style.display = 'block';

                setTimeout(function () {
                    window.location = "Home.html";
                }, 2000);

            } else {
                let error_message = document.getElementById("login-error");
                error_message.style.display = 'block';

                setTimeout(function () {
                    error_message.style.display = 'none';
                }, 1500);

            }
        })
    });
});


