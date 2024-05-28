const users = [
    {
        username: "felipe@gmail.com",
        password: "felipe"
    },
    {
        username: 'carlos@gmail.com',
        password: 'carlos'
    },
    {
        username: 'ellen@gmail.com',
        password: 'ellen'
    }
];

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });
   
    if (user) {
        alert("Successful login!");
        location.href = "/views/home.html"
    } else {
        alert("Incorrect username or password. Try again.");
    }
}


