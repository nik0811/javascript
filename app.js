var y = "milky"
function nikhil() {
    var x = document.getElementById("email");
    console.log(x)
    console.log(x.innerHTML)
}

//function login() {
//     var creds = ["email", "password"];
//     creds.forEach(cred);
//     function cred(item, index) {
//       var item = document.getElementById(item).value;
//     }
//}
const Url="https://metricsviews.com/auth/login/"
function login(){
    const data={username: "", password: ""};
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    data.username=username
    data.password=password
    $.ajax({
       url: Url,
       type: "POST",
       data: data,
       dataType: JSON,
       success: function(result){
       console.log(data)
       }
    })
}