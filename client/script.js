const signupButton =document.getElementById('SignupButton');
const signinButton =document.getElementById('SigninButton');
const signinForm =document.getElementById('sign-inForm');
const signupForm =document.getElementById('sign-upForm');

signupButton.addEventListener('click' ,function(){
    console.log('Sign Up button Clicked ')
    signinForm.style.display="none";
    signupForm.style.display="block";
})
signinButton.addEventListener('click' ,function(){
    signupForm.style.display="none";
    signinForm.style.display="block";
})

