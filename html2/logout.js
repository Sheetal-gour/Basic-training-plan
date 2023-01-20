
const logout = document.querySelector('#logout')
console.log(logout)
logout.addEventListener('click',()=>{

    // sessionStorage.removeItem(sessionStorage.key(0))
    window.alert('Logged out successfully !!!')
    window.location.replace('login.html')
})