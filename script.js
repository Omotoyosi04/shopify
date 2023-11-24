const notificationBell = document.querySelector('.notifBell')
const alertMsg = document.querySelector('.alerts')
const user = document.querySelector('.user')
const userInfo = document.querySelector('.userDropdown')

notificationBell.addEventListener('click', () => {
    if (alertMsg.style.opacity === '0') {
        alertMsg.style.opacity = '1'
    } else {
        alertMsg.style.opacity = '0'
    }
})

user.addEventListener('click', () => {
    if (userInfo.style.opacity === '0') {
        userInfo.style.opacity = '1'
    } else {
        userInfo.style.opacity = '0'
    }
})
