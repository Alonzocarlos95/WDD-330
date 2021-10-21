let indicador = 0;
counter = 0;
let list_container = document.getElementById('main_list');
document.getElementById('container_schedule').style.display = 'none';
const chosenDate = document.getElementById("date");
const time = document.getElementById('new_time_container');
time.style.display = 'none';

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('container_schedule').style.display = 'block';
    document.getElementById('add').innerHTML = '<span class="material-icons">done</span>';
    if(indicador === 0){
        indicador = 1;
        counter++;
   
    }else {
        indicador = 0;
        taskCreated();
    }
} );
document.getElementById('date').addEventListener('change',() => {
    // alert("New date");
    time.style.display = 'flex';
});

if(chosenDate.value == null){
    // debugger;
    console.log("It has a value " + chosenDate.value);
}


 function taskCreated(){
    document.getElementById('container_schedule').style.display = 'none';
    // debugger;
    if(document.getElementsByClassName('notes').length >= 1){
        document.getElementsByClassName('notes')[0].remove();
    }
    addingToList(counter);
    // document.getElementsByClassName('notes')[0].style.display = 'none';
    document.getElementById('add').textContent = '+';
    let task = document.getElementById("todo").value;
    console.log(task);
    
// let currentTasks = document.createElement('li');
// currentTasks.setAttribute('style','background-color:#3D348B;width:100%;');
// currentTasks.innerHTML = '<input type = "checkbox">Esta es mi primer tarea';
// listOfTasks.appendChild(currentTasks);
// list_container.appendChild(listOfTasks);
 }

function addingToList(counterOfItems){
    if(counterOfItems === 1){
        let listOfTasks = document.createElement('ul');
        listOfTasks.id ='parentList';
        listOfTasks.setAttribute('style','width:80%; display:flex;flex-direction:column;border:1px solid red; list-style-type:none;margin:auto;');
        let currentTasks = document.createElement('li');
        currentTasks.id = "item"+counterOfItems+"";
        currentTasks.setAttribute('style','background-color:#3D348B;width:100%;');
        currentTasks.innerHTML = '<input type = "checkbox">Esta es mi primer tarea';
        listOfTasks.appendChild(currentTasks);
        list_container.appendChild(listOfTasks);
    }
    else {
        let currentTasks = document.createElement('li');
        currentTasks.id = "item"+counterOfItems+"";
        currentTasks.setAttribute('style','background-color:#3D348B;width:100%;');
        currentTasks.innerHTML = '<input type = "checkbox">Esta es mi primer tarea';
        document.getElementById('parentList').appendChild(currentTasks);
        
    }
}
/*Process of list of tasks */


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
  