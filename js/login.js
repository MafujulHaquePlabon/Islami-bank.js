document.getElementById("login-button").addEventListener('click',function(){
    //get user email
    const emailField= document.getElementById('user email');
    const userEmail=emailField.value ;
    //get user password
    const passwordFeild=document.getElementById('user-password');
    const userPassword=passwordFeild.value;
    //check user email and user password
    if(userEmail== "islamibank@gmail.com" && userPassword=="plabon"){
         window.location.href="banking.html";
    }
});