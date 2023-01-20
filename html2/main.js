const reg = document.getElementById('register');
var  count=1;
reg.addEventListener('click' , (event)=>{
    
    event.preventDefault();

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

});

for(let i=0;i<localStorage.length;i++)
{
    var x = localStorage.getItem(localStorage.key(i));
    x = JSON.parse(x);

    
    for(key in x){
        console.log(key,x[key])
    }

    const outer_div = document.createElement('div')

}