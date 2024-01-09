// step 1

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked')
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);
    if(email === 'maruf@gamil.com' && password === 'secreat'){
        window.location.href = "bank.html";
    }else{
        alert("password vule gechos.tore ar kuno tk ei dibo nh");
    }
})