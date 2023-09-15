const buttons = document.querySelectorAll(".btn")
const btnEL = document.getElementById('button')
const toastEL = document.getElementById('toasts')

// buuton ripple effect
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY


        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft


        const xinside = x - buttonLeft
        const yinside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yinside + 'px'
        circle.style.left = xinside + 'px'

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500)
    })
})



const messages = [
    'Success',
    'Error',
    'Pending',
    'Try Again'
]

const types = ['success', 'error', 'pending', 'tryAgain']
btnEL.addEventListener('click', () => {
    createNotification()
})


function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : randomTypes())



    notif.innerHTML = message ? message : getRandomMessages()

    toastEL.appendChild(notif)

    setInterval(() => {
        notif.remove()
    }, 3000)
}


function getRandomMessages() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function randomTypes() {
    return types[Math.floor(Math.random() * types.length)]

}