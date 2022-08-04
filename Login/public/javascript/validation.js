function tos() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
}



function myFunc(){
    usernameValidate()
    passValidate()
    if (usernameValidate() == false || passValidate == false()) {
        tos()
        return false
    }else {
        return true
    }
}

function usernameValidate() {
    let username = document.getElementById("username").value
    let userError = document.getElementById("user-error")
    let regex = /^[a-zA-Z\-]+$/
    let usernameVal = username.match(regex)
    if (usernameVal == '' || usernameVal == null) {
        userError.innerHTML='Please enter a valid username!'
        userError.style.display="block"
        return  false
        
    }else if(username.length < 3 || username == null){
        userError.innerHTML='Username must have atleast 3 characters!'
        userError.style.display="block"
        return  false
    }else {
        userError.style.display='none'
        return true
    }

    
}
function passValidate() {
    let password = document.getElementById("password").value
    let passError = document.getElementById("pass-error")
    let regex2 =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{2,16}$/
    let passVal = password.match(regex2)
    if (password == '' || password == null) {
        passError.innerHTML='Please enter a valid password!'
        passError.style.display="block"
        return  false
        
    }else if(!passVal){
        passError.innerHTML='Password must contain atleast one letter,number and a special character!'
        passError.style.display="block"
        return  false
    }else if(password.length < 6){
        passError.innerHTML='Password must have atleast 6 characters!'
        passError.style.display="block"
        return  false
    }else {
        passError.style.display='none'
        return true
    }
}