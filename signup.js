let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    let formDetails = [
        username,
        email,
        password,
        password2
    ]
    console.log(formDetails);
    checkDetail(formDetails);
    LengthCheck(username, 12, 4);
    PasswordCheck(password,password2);
    LengthCheck(password, 12, 6);
    LengthCheck(password2, 12, 6);
    checkEmail(email);
})

function checkDetail(input) {
    input.forEach(element => {
        if (element.value.trim() === "") {
            let name=element.parentElement
            let fieldname=name.querySelector('label').textContent.trim()
            error(element, `This ${fieldname} is required. Please fill in the information.`)
        } else {
            success(element)
        }
    });
}
function checkEmail(email){
   let Email= validateEmail(email.value.trim())
   if (Email==false) {
    error(email,`Please enter a valid email address.`)
   }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function LengthCheck(input, max, min) {
    let data = input.value.trim().length
    let name=input.parentElement
    let fieldname=name.querySelector('label').textContent.trim()
    if (data > max) {
        error(input, `The ${fieldname} won’t accept more than ${max} characters.`)
    } else if (data < min) {
        error(input, `The ${fieldname} will require at least ${min} characters.`)
    }
}

function PasswordCheck(password,password2){
    
    if (password.value.trim()!==password2.value.trim()) {
        error(password,`passwords don’t match`)
        error(password2,`passwords don’t match`)
    }
}

function error(input, message) {
    let form_group = input.parentElement
    form_group.className = 'form-group error'
    form_group.querySelector('p').textContent = message
}
function success(input) {
    let form_group = input.parentElement
    form_group.className = 'form-group success'
}