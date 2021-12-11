const form = document.getElementById('form');
const username = document.getElementById('name');
const email= document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('check-password');
const agree = document.querySelector("#agree")

form.addEventListener('submit', (e) => {
    e.preventDefault(); //submit 되는 순간에 page reroad 차단
    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernaemValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();
    const agreeVaule = agree.checked;

    if(usernaemValue === ''){
        //show error
        //add error class
        setErrorFor(username, '이름을 입력하세요.')
    }else{
        //add success class
        setSuccessFor(username); 
    } 
    if(emailValue === ''){
        setErrorFor(email, '아이디를 입력하세요.')
    }else if(!isEamil(emailValue)){
        setErrorFor(email, '올바른 이메일 형식이 아닙니다.')
    }else{
        setSuccessFor(email); 
    } 
    if(passwordValue === ''){
        setErrorFor(password, '비밀번호를 입력하세요.')
    }else{
        setSuccessFor(password); 
    } 
    if(checkPasswordValue === ''){
        setErrorFor(checkPassword, '비밀번호를 입력하세요.')
    }else if(passwordValue !== checkPasswordValue) {
        setErrorFor(checkPassword, '비밀번호가 같지 않습니다.')
    }else{
        setSuccessFor(checkPassword); 
    } 
    // console.log(agreeVaule);
    if(agreeVaule === false){
        setErrorForCheck(agree, '동의하지 않으면 회원가입을 할 수 없습니다.')
    }else{
        setSuccessForCheck(agree);
    }

    //success all
}
function setErrorFor(input, message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message
    //add error class
    formControl.className = 'custom-form-control error'
}
function setSuccessFor(input){
    const formControl = input.parentElement; 
    //add success class
    formControl.className = 'custom-form-control success'
}
function setErrorForCheck(input, message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message
    formControl.className = 'custom-form-check error'
}
function setSuccessForCheck(input){
    const formControl = input.parentElement; 
    formControl.className = 'custom-form-check success'
}
function isEamil(email){
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);
}