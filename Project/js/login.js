function logar() {

var login = document.getElementById('email').value;
var password = document.getElementById('password').value;
  
if(login == "admin" && password == "admin"){
    alert('Sucess');
    location.href = "/views/home.html"
}else{
    alert('wrong password');
}

}