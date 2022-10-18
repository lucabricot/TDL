var add_btn = document.getElementById('btn');
var box_lucas = document.getElementById('lucas');
var box_maxime = document.getElementById('maxime');
var box_ismail = document.getElementById('ismail');
var box_axel = document.getElementById('axel');
var task = document.getElementById('task_box');



add_btn.onclick = function(){
    if(slct.value == 1){
        if(task.value != ""){
            var task_user = document.createElement('p')
        }
        task_user.innerText = task.value ;
        box_lucas.appendChild(task_user);
    }

    if(slct.value == 2){
        if(task.value != ""){
            var task_user = document.createElement('p')
        }
        task_user.innerText = task.value ;
        box_maxime.appendChild(task_user);
    }

    if(slct.value == 3){
        if(task.value != ""){
            var task_user = document.createElement('p')
        }
        task_user.innerText = task.value ;
        box_ismail.appendChild(task_user);
    }

    if(slct.value == 4){
        if(task.value != ""){
            var task_user = document.createElement('p')
        }
        task_user.innerText = task.value ;
        box_axel.appendChild(task_user);
    }

}