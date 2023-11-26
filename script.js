const notificationBell = document.querySelector('.notifBell');
const alertMsg = document.querySelector('.alerts');
const user = document.querySelector('.user');
const userInfo = document.querySelector('.userDropdown');
const subPlan = document.querySelector('.subscriptionPlan')
const cancelPlan = document.querySelector('.cancelPlan')
const mainToggle = document.querySelector('.toggleArrows')

notificationBell.addEventListener('click', () => {
    if (alertMsg.style.display === 'none') {
    alertMsg.style.display = 'block'
    } else {
        alertMsg.style.display = 'none'
    }
});

user.addEventListener('click', () => {
    if (userInfo.style.display === 'none') {
        userInfo.style.display = 'block';
    } else {
        userInfo.style.display = 'none';
    }
});

window.addEventListener('click', (event) => {
    if (userInfo.style.display === 'block' && !user.contains(event.target) && !userInfo.contains(event.target))  {
        userInfo.style.display = 'none';
    }
});
window.addEventListener('click', (event) => {
    if (alertMsg.style.display === 'block' && !notificationBell.contains(event.target) && !notificationBell.contains(event.target)) {
        alertMsg.style.display = 'none';
    }
});

cancelPlan.addEventListener('click', () => {
    subPlan.style.display = 'none'
})


mainToggle.addEventListener('click', () => {
    mainToggle.classList.toggle('active')
})
