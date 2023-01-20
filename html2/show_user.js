for(let i=0;i<localStorage.length;i++)
{
    var x = localStorage.getItem(localStorage.key(i));
    x = JSON.parse(x);

    
    // for(key in x){
    //     console.log(key,x[key])
    // }

    if(localStorage.key(i) != 'count'){
    const outer_div = document.createElement('div')
    var content = ''
    // for(item in x)
    // {
    
    //         content += `<tr><td>${item}</td><td>${x[item]}</td></tr>`
        
    // }
    
    content = `
    <div class="card">
    <h1>${x['firstname']} ${x['lastname']}</h1>
    <h3>${x['email']}</h3>
    <h3> Username :- ${x['username']}</h3>
    <h3> Role :- ${x['role']}</h3>
    </div>
    <button class = 'logout' id='delete_id_${localStorage.key(i)}'>Delete</button>
    `

    outer_div.innerHTML = content;
    outer_div.style.display = 'block';
    document.getElementById('container').appendChild(outer_div);

    const del = document.getElementById(`delete_id_${localStorage.key(i)}`)
    del.addEventListener('click' , ()=>{
        localStorage.removeItem(localStorage.key(i));
        window.location.reload();
    })
    }

}