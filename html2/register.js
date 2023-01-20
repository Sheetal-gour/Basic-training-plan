const reg = document.getElementById('register');

reg.addEventListener('click' , (event)=>{
    
    event.preventDefault();

    var count=localStorage.getItem('count');

    var email = document.getElementById('email');
    var firstName = document.getElementById('first');
    var lastName = document.getElementById('last');
    var userName = document.getElementById('username');
    var gender = document.getElementById('gender');
    var role = document.getElementById('role');
    var password = document.getElementById('password');
    
    const obj = 
    {
    'email' : email.value,
    'firstname':  firstName.value,
    'lastname' : lastName.value,
    'username': userName.value,
    'gender':  gender.value,
    'role' : role.value,
    'password' : password.value

    }
    // console.log(obj);
    localStorage.setItem(`user${count}` , JSON.stringify(obj));
    // console.log();

    count++;
    localStorage.removeItem('count')
    localStorage.setItem('count' , `${count}` )
    window.alert('Registered Successfully\n')
    window.location.replace('login.html');

});







