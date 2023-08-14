const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

/*控制class后面是否需要增加active，增加的话wrapper后会出现active哦，这样就可以有某些动效了哦*/
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.remove('closed')
    wrapper.classList.remove('active')
})

iconClose.addEventListener('click', () => {
    wrapper.classList.add('closed')
})