const logindata = document.getElementById('login');
console.log(logindata)
logindata.addEventListener('click',(event)=>{

    event.preventDefault();
    const userFound=false;
    const passwordFound = false;

    const givenUser = document.getElementById('email_login').value
    const givenPass = document.getElementById('password_login').value

    console.log(givenUser + '  ' + givenPass)
    var usernotfound = false;
    // var count = 1

    
    for(let i=0;i<localStorage.length;i++)
    {   

    var x = localStorage.getItem(localStorage.key(i));

    if(localStorage.key(i) != 'count')
    {


    x = JSON.parse(x);
    // console.log(x['email'])
    // console.log(x['password'])
    // console.log(`"${givenUser}"`)
    

    if(x['email'] == givenUser)
    {
        usernotfound = true

        if(x['password'] == givenPass)
        {
            
            console.log('User logged in')

            if(x['role'] == 'admin')
            window.location.replace("admin.html");
            else if(x['role'] == 'operation')
            window.location.replace("operations.html");
            else if(x['role'] == 'sales')
            window.location.replace("sales.html");

        
        }
        else{
            
            window.alert('Password mismatch')
            window.location.replace('login.html')
        }
        
        
    }

}

}

if(!usernotfound){
window.alert('User not registered !!! ')
window.location.replace('register.html')   
}
// if(localStorage.length == 1)
//     {
//         window.alert('Please register first !!!')
//         window.location.replace('register.html');
//     }


});
