const reg = document.getElementById('register');

reg.addEventListener('click' , (event)=>{
    
    event.preventDefault();
    var found = false;
    var count=localStorage.getItem('count');

    var email = document.getElementById('email');
    var firstName = document.getElementById('first');
    var lastName = document.getElementById('last');
    var userName = document.getElementById('username');
    var gender = document.getElementById('gender');
    var role = document.getElementById('role');
    var password = document.getElementById('password');
    
    for(let i=0;i<localStorage.length;i++)
    {
    
    if(localStorage.key(i) != 'count'){

        var x = localStorage.getItem(localStorage.key(i));
        x = JSON.parse(x);

        if( x['email'] == email.value )
        {
            found=true;
        }
        
    }
    }

    if(found)
    {
        window.alert('Email already registered')
        window.location.replace('register.html')
        return;
    }

    if(email.value =='' || firstName.value =='' || lastName.value =='' ||userName.value =='' || gender.value =='' || role.value =='' || password.value =='' )
    {
        window.alert('Filling all fields is mandatory !!! ')
        return 
    }

    if(password.value.length < 8)
    {
        window.alert('Password should be at least of 8 characters')
        return
    }

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







