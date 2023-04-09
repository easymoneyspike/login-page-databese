const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.input')
const botao = document.querySelector('.button')

//Inpusts user and password

const user = document.getElementById('user')
const senha = document.getElementById('password')


//Banco de dados falso

const users = [
    { name: 'myuser', pass: '1234' },
    { name: 'user', pass: '1234' },
    { name: 'code', pass: '1234' },
    { name: 'tyler', pass: '1234' }
]


//style button 
const lock = botao.querySelector('i')
const span = botao.querySelector('span')

//states inputs

const state = {
    green: {
        img: '../assets/check.png', border: '2px solid green', span: span.textContent = 'Entrar', lock: lock.classList = 'fa-solid fa-lock-open'
    },
    red: {
        img: '../assets/cancel.png', border: '2px solid red', span: span.textContent = 'Login errado', lock: lock.classList = 'fa-solid fa-lock'
    },
    nothing: {
        img: '', border: '2px solid var(--light-grey)', span: span.textContent = 'Verificar Login', lock: lock.classList = 'fa-solid fa-lock'
    }
}

//getting attr and images

const images = document.querySelectorAll('.icon')
const srcImage = images[0, 1].getAttribute('src')

//input addEventListener

inputs.forEach(input => {
    input.addEventListener('input', () => {

        //remove disabled button

        if (user.value.length >= 4 && senha.value.length >= 4) {
            botao.removeAttribute('disabled')
        } else {
            botao.setAttribute('disabled', '')
        }

        //style input empty - Ok!

        if (user.value.length < 6 || senha.value.length < 6) {
            images[0].setAttribute('src', state.nothing.img)
            images[1].setAttribute('src', state.nothing.img)

            span.textContent = state.nothing.span
            lock.classList = state.nothing.lock
        }

        if (user.value.length <= 4 || senha.value.length <= 4) {
            inputs[0].style.border = state.nothing.border
            inputs[1].style.border = state.nothing.border
        }

    })
})


form.addEventListener('submit', (e) => {

    e.preventDefault();

    //VALIDATION LOGIN

    for (let i in users) {
        validaLogin = false;

        if (user.value == users[i].name && senha.value == users[i].pass) {
            validaLogin = true;
            break
        }
    }

    //styles imgs login: Ok!

    for (let imgs of images)

        if (validaLogin == true) {
            imgs.setAttribute('src', state.green.img)
            span.textContent = state.green.span
            lock.classList = state.green.lock
        } else if (validaLogin == false) {
            imgs.setAttribute('src', state.red.img)
            span.textContent = state.red.span
            lock.classList = state.red.lock
            validaLogin = false;
        }

    //styles inputs login: Ok!

    for (let inpt of inputs) {
        if (validaLogin == true) {
            inpt.style.border = state.green.border
        } else if (validaLogin == false) {
            inpt.style.border = state.red.border
        }
    }

})

botao.addEventListener('click', () => {

    //Sucess Login - Hidden 

    const sup = document.querySelector('.area-support')
    const logos = document.querySelector('.area-media')
    const sucessLoading = document.querySelector('.login-sucess')

    if (lock.classList == state.green.lock) {
        sup.classList.add('hidden')
        form.classList.add('hidden')

        logos.classList.remove('area-media')
        logos.classList.add('hidden')

        sucessLoading.classList.remove('hidden')

        setTimeout(function () {
            window.location.href = '../pages/home.html'
        }, 2500);
    }

})
