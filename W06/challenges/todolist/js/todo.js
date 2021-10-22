// const toDoList = [];

let indicador = 0;
let list_container = document.getElementById('main_list');
document.getElementById('container_schedule').style.display = 'none';
const chosenDate = document.getElementById("date");
const time = document.getElementById('new_time_container');
time.style.display = 'none';

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('container_schedule').style.display = 'block';
    document.getElementById('add').innerHTML = '<span class="material-icons">done</span>';  
    let inputNewTask = document.getElementById("todo");
    let valInputNewTask = inputNewTask.value;
    let valInputNewTask2 = inputNewTask.value;

    if(indicador === 0){
        indicador = 1;
        list_container.style.display = "none";
        
    }else {
           if(!isBlank(valInputNewTask)){ //Valida si el valor del input no es null o undefined o whitespace
            indicador = 0;
            inputNewTask.value = "";
            inputNewTask.focus();
            taskCreated();
            manageTask(valInputNewTask2);
            
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
      debugger;
    return (!str || /^\s*$/.test(str));
}

function manageTask(getTask){
    const todo = {
        id: Date.now(),
        content: getTask,
        completed: false
    }
    storeData(todo);
}

//Local Storage Function
function storeData(todo){
    debugger;
    let toDoList2 = null;
    let storedL = localStorage["toDoList2"];
    if(storedL == null){
        toDoList2 = [];
    } else {
        toDoList2 = JSON.parse(storedL);
    }
       toDoList2.push(todo);
       let allToDo = JSON.stringify(toDoList2);
       localStorage["toDoList2"] = allToDo;
       buildListOfTasks();
}


function buildListOfTasks(){
    debugger;
    let arrayOfStoredItems = localStorage["toDoList2"];
    let toDoList = JSON.parse(arrayOfStoredItems);
    for(let i = 0; i < toDoList.length; i++){
        let currentTasks = document.createElement('li');
        currentTasks.id = toDoList[i]["id"];
        currentTasks.setAttribute('style','background-color:#3D348B;width:100%;margin:0 0 8px 0;padding:6px 4px 6px 4px');
        currentTasks.innerHTML = '<input type = "checkbox"><span style="margin-left:2em;">'+toDoList[i]["content"]+'</span>';
        document.getElementById('parentList').appendChild(currentTasks);
    }
    list_container.style.display = "block";
    
}