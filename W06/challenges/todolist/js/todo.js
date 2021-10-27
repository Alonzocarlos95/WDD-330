let toDoList = [];

let options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
let indicador = 0;
let list_container = document.getElementById('main_list');
document.getElementById('container_schedule').style.display = 'none';
const chosenDate = document.getElementById("date");
const time = document.getElementById('new_time_container');
let ulTasks = document.getElementById('parentList');
time.style.display = 'none';

document.getElementById('add').addEventListener('click', () => {
    debugger;
    document.getElementById('container_schedule').style.display = 'block';
    document.getElementById('add').innerHTML = '<span class="material-icons">done</span>';  
    let inputNewTask = document.getElementById("todo");
    let valInputNewTask = inputNewTask.value;
    let valInputNewTask2 = inputNewTask.value;
    let dateSet = document.getElementById('date').value;

    if(indicador === 0){
        indicador = 1;
        list_container.style.display = "none";
        
    }else {
           if(!isBlank(valInputNewTask)){ //Valida si el valor del input no es null o undefined o whitespace
            indicador = 0;
            inputNewTask.value = "";
            inputNewTask.focus();
            let newDateSet = valDate(dateSet);
            taskCreated();
            manageTask(valInputNewTask2,newDateSet);
            
            }
            else {
                alert("Enter task at first.");
            }
        
    }
} );
document.getElementById('date').addEventListener('change',() => {
    time.style.display = 'flex';
});


 function taskCreated(){
    document.getElementById('container_schedule').style.display = 'none';
    if(document.getElementsByClassName('notes').length >= 1){
        document.getElementsByClassName('notes')[0].remove();
    }
    document.getElementById('add').textContent = '+';
 }




/*Clock picker functionality*/
$("input[name=time]").clockpicker({       
    placement: 'bottom',
    align: 'left',
    autoclose: true,
    default: 'now',
    donetext: "Select",
    init: function() { 
                              console.log("colorpicker initiated");
                          },
                          beforeShow: function() {
                              console.log("before show");
                          },
                          afterShow: function() {
                              console.log("after show");
                          },
                          beforeHide: function() {
                              console.log("before hide");
                          },
                          afterHide: function() {
                              console.log("after hide");
                          },
                          beforeHourSelect: function() {
                              console.log("before hour selected");
                          },
                          afterHourSelect: function() {
                              console.log("after hour selected");
                          },
                          beforeDone: function() {
                              console.log("before done");
                          },
                          afterDone: function() {
                              console.log("after done");
                          }
  });
  

  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function valDate(dateToDo){
    if(dateToDo === null || dateToDo === ''){
        dateToDo = "No date";
        return dateToDo;
    }
    else {
        dateToDo = new Date(dateToDo);
        dateToDo.setDate(dateToDo.getDate()+1);
        // testDate = new Date(Date.UTC(dateToDo));
        dateToDo = dateToDo.toLocaleString('en-US',options);
        return dateToDo;
    }
}

function manageTask(getTask,dateSet){
    const todo = {
        id: Date.now(),
        content: getTask,
        completed: false,
        date: dateSet
    }
    toDoList.push(todo);
    addToLocalStorage(toDoList);
    // storeData(todo);
}


function addToLocalStorage(toDoList){
    localStorage.setItem('toDoList',JSON.stringify(toDoList));

    renderTodos(toDoList);
}



function renderTodos(toDoList){
    // debugger;
    ulTasks.innerHTML = '';
    toDoList.forEach(function(valInputNewTask2,index){
        console.log(index);
        const checked = toDoList.completed ? 'checked': null;
        let currentTasks = document.createElement('li');
        currentTasks.id = valInputNewTask2.id;
        currentTasks.setAttribute('style','display:flex;background-color:#519872;width:100%;border-radius:7px;margin:0 0 10px 0;padding:6px 4px 6px 4px;min-height:3em;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;');
      

        currentTasks.innerHTML = '<input id='+index+' type = "checkbox"  class="checkInactive"><div style="display:flex;flex-direction:column;flex-grow:2;"><span style="margin-left:2em;">'+valInputNewTask2.content+'</span><span style="margin-left:2em;color:#17301C;">'+valInputNewTask2.date+'</span></div><div class="clear"><span class="material-icons">clear</span></div>';
        
        if(valInputNewTask2.completed === true){
            currentTasks.classList.add('checkActive');
            currentTasks.firstChild.checked = true;
        }  
        
        document.getElementById('parentList').appendChild(currentTasks);
        });
    list_container.style.display = "block";
}

function getFromLocalStorage(){
    const getReference = localStorage.getItem('toDoList');
    if(getReference){
        document.querySelector('.notes').style.display = 'none';
        toDoList = JSON.parse(getReference);
        renderTodos(toDoList);
    }
}



function showModal(){
    document.getElementById('myDropdown').classList.toggle('show');
}




getFromLocalStorage();


function toggle(id){
    toDoList.forEach(function(item){
        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(toDoList);
}

function deleteToDo(id){
    // alert(id);
    toDoList = toDoList.filter(function(getTask){
        return getTask.id != id;
    });
    addToLocalStorage(toDoList);
}
ulTasks.addEventListener('click',function(event){
    if(event.target.type === 'checkbox'){
        toggle(event.target.parentElement.getAttribute('id'));
    }
    if(event.target.parentElement.classList.contains('clear')){
        deleteToDo(event.target.parentElement.parentElement.getAttribute('id'));
    }
});



//Close the dropdown if the user clicks outside it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  } 


//Drop down Events
document.getElementById("myDropdown").addEventListener('click',function(event){
    if(event.target.localName === 'span'){
        filterToDoList(event.target.id);
    }
});

function filterToDoList(id){
    let toDoListSplitted = toDoList;
    toDoList.forEach(function(item,index){
            if(id === 'select2'){ //ACTIVE
                if(item.completed === true){ //Mostrar solo las tareas activas
                    document.getElementById(item.id).style.display = 'none';
                }
                else {
                    document.getElementById(item.id).style.display = 'flex';        
                     }
                     document.getElementById('buttonForList').innerHTML = 'Active<span class="material-icons" style="vertical-align: middle;">arrow_drop_down</span>';
            }
            else if (id === 'select3'){
                if(item.completed === false){ //Msotrar solo las tareas completadas
                    document.getElementById(item.id).style.display = 'none';
                }
                else {
                    document.getElementById(item.id).style.display = 'flex';  
                   
                }
                document.getElementById('buttonForList').innerHTML = 'Completed<span class="material-icons" style="vertical-align: middle;">arrow_drop_down</span>';

            }
            else {
                if(document.getElementById(item.id).style.display = 'none'){
                document.getElementById(item.id).style.display = 'flex';  
                }
                document.getElementById('buttonForList').innerHTML = 'All Lists<span class="material-icons" style="vertical-align: middle;">arrow_drop_down</span>';

            }
        });
}