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
    // alert("New date");
    time.style.display = 'flex';
});

// if(chosenDate.value == null){
//     // debugger;
//     console.log("It has a value " + chosenDate.value);
// }


 function taskCreated(){
    document.getElementById('container_schedule').style.display = 'none';
    // debugger;
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
    //debugger;
    return (!str || /^\s*$/.test(str));
}

function valDate(dateToDo){
    // debugger;
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
    // debugger;
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

// document.querySelector('.dropBtn').addEventListener('click',() => {
//     debugger;
//     document.getElementById('myDropdown').classList.toggle('show');
// });

function showModal(){
    document.getElementById('myDropdown').classList.toggle('show');
}

//     let dropDown_header = document.createElement('div');
    
//     dropDown_header.setAttribute('class','dropdown-content');
//     dropDown_header.innerHTML = '<span>Finished</span>';
//     document.getElementById('filter-tasks').appendChild(dropDown_header);
//     //filter-tasks
// })
// debugger;
// let checkbox = document.getElementById('parentList');
// checkbox.addEventListener('change',function(e){
//     // debugger;
//     let idOfList = e.path[1].id;
//     if(toDoList[e.path[0].id].completed == false){
//         // alert("change to completed")
//         toDoList[e.path[0].id].completed = true;
//         document.getElementById(idOfList).childNodes[1].classList.add('checkActive');   //  setAttribute('style','text-decoration:line-through;');
//     }
//     let y = e.path[1].id;
//     let x = this.childNodes[2].firstElementChild;
//     if(x.checked){
//         // alert('checked');
//         this.firstChild.firstChild.setAttribute('style','opacity:1;border-top-color: transparent;border-left-color: transparent;transform: rotate(45deg);-webkit-transform: rotate(45deg);border-radius: 0;left: 5px;top: -5px; width: 10px;')
//     }else {
//         // this.firstChild.firstChild.setAttribute("style","position: absolute;left: 0;top: 0;opacity: .6;transition: all .12s, border-color .08s;width: 20px;border: 1px solid #6cc0e5;")

//     }
// });

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
    debugger
    // alert(id);
    toDoList = toDoList.filter(function(getTask){
        return getTask.id != id;
    });
    addToLocalStorage(toDoList);
}
debugger;
ulTasks.addEventListener('click',function(event){
    debugger;
    if(event.target.type === 'checkbox'){
        toggle(event.target.parentElement.getAttribute('id'));
    }
    if(event.target.parentElement.classList.contains('clear')){
        debugger;
        deleteToDo(event.target.parentElement.parentElement.getAttribute('id'));
    }
});


//https://codepen.io/thecodingpie/pen/ExPQdqb?editors=1010

//Local Storage Function
// function storeData(todo){
//     debugger;
//     let toDoList = null;
//     let storedL = localStorage["toDoList"];
//     if(storedL == null){
//         toDoList = [];
//     } else {
//         toDoList = JSON.parse(storedL);
//     }
//        toDoList.push(todo);
//        let allToDo = JSON.stringify(toDoList);
//        localStorage["toDoList"] = allToDo;
//        buildListOfTasks();
// }


//Close the dropdown if the user clicks outside it
window.onclick = function(event){
    if(!event.target.matches('.dropBtn')){
        let dropDowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropDowns.length; i++) {
          var openDropdown = dropDowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}
