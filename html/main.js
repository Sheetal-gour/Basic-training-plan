// window.addEventListener('load', ()=>{

    const add = document.getElementById('add');
    
    // var count = 1;

    add.addEventListener('click' , (event)=> {
        event.preventDefault();

        const item = document.getElementById('item');

        var dataInsideInput = item.value;   
        item.value='';

        var outer_div = document.createElement('div');
        outer_div.classList.add('item');

        var task = document.createElement('input');
        task.value = dataInsideInput;
        task.classList.add('item_task');
        task.setAttribute('readonly','readonly');

        var inner_div = document.createElement('div');

        const upd = document.createElement('button')
        upd.type = "text";
        upd.classList.add('update');
        upd.value = 'Edit';
        upd.innerText = "Edit";

        const del = document.createElement('button')
        del.type = "text";
        del.classList.add('delete');
        del.value = 'Delete';
        del.innerText = 'Delete';

        inner_div.appendChild(upd);
        inner_div.appendChild(del);

        outer_div.appendChild(task);
        outer_div.appendChild(inner_div);
          

        // all_tasks.push(task);

        

        // localStorage.setItem(`task${count}`,outer_div);
        document.getElementById('task_list').appendChild(outer_div);
        // console.log(localStorage.key);


        // for (i = 0; i < localStorage.length; i++) {

        //     x = localStorage.key(i);
        //     document.getElementById('task_list').appendChild(outer_div);

        //   }
        
       // document.getElementById('task_list').removeChild(task);
        
        del.addEventListener('click' , ()=>{
            document.getElementById('task_list').removeChild(outer_div);
            // localStorage.removeItem(`task${count}`);
        });

        upd.addEventListener('click' , ()=>{
            
            // upd.removeAttribute('readonly');
           if(upd.innerText == 'Edit'){
            upd.innerText = "Save";
            task.style.backgroundColor = "pink";
            task.focus();
            task.removeAttribute('readonly');

        }
        else
        {
            upd.innerText = "Edit";
            
            task.style.backgroundColor = "rgb(181, 252, 181)";
            task.setAttribute('readonly','readonly');
        }
        });

        
    });






//     // showing list 
//     for (i = 0; i < localStorage.length; i++) {
            
//         x = localStorage.key(i);
//         document.getElementById('task_list').appendChild(x);

//       }
    


// });













// var count = 1;
// add.addEventListener('click' , (event)=> {
//     event.preventDefault();

//     const item = document.getElementById('item');

//     var dataInsideInput = item.value;   
//     item.value='';

//     localStorage.setItem(`task${count}` , dataInsideInput);
//     count++;

// });

// const show = document.getElementById('show');
// const footer = document.getElementById('footer');

// // show.addEventListener('click' , ()=>{

//     // const inp = document.getElementById('body_form');
//     // inp.style.display = "none";
//     // footer.style.display = "block";

//     // show.innerText = "Hide list";

//     for(let i=0;i<localStorage.length;i++)
//     {
//         x = localStorage.getItem(`task${i+1}`);


//         var outer_div = document.createElement('div');

//         outer_div.classList.add('item');

//         var task = document.createElement('input');
//         task.value = x;
//         task.classList.add('item_task');
//         task.setAttribute('readonly','readonly');

//         var inner_div = document.createElement('div');

//         const upd = document.createElement('button')
//         upd.type = "text";
//         upd.classList.add('update');
//         upd.setAttribute('id',`task${i+1}`);
//         upd.value = 'Edit';
//         upd.innerText = "Edit";

//         const del = document.createElement('button')
//         del.type = "text";
//         del.classList.add('delete');
//         del.setAttribute('id',`task${i+1}`);
//         del.value = 'Delete';
//         del.innerText = 'Delete';

//         inner_div.appendChild(upd);
//         inner_div.appendChild(del);

//         outer_div.appendChild(task);
//         outer_div.appendChild(inner_div);
          

//         document.getElementById('task_list').appendChild(outer_div);
       
        
//         del.addEventListener('click' , ()=>{
//             document.getElementById('task_list').removeChild(outer_div);
//             localStorage.removeItem(`task${i+1}`);
//         });

//         upd.addEventListener('click' , ()=>{
            
//            if(upd.innerText == 'Edit'){
//             upd.innerText = "Save";
//             task.style.backgroundColor = "pink";
//             task.focus();
//             task.removeAttribute('readonly');
//             localStorage.setItem(`task${i+1}` , task.value);

//         }
//         else
//         {
//             upd.innerText = "Edit";
            
//             task.style.backgroundColor = "rgb(181, 252, 181)";
//             task.setAttribute('readonly','readonly');
//         }
//         });

//     }


// // });