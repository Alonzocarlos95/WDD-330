const list = [
    {
        label:"Week-01",
        notes:"W01 Notes",
        exercises:"W01 Exercises",
        challenges:"W01 Challenges"
    },
    {
        label:"Week-02",
        notes:"W02 Notes",
        exercises:"W02 Exercises",
        challenges:"W02 Challenges"
    },
    {
        label:"Week-03",
        notes:"W03 Notes",
        exercises:"W03 Exercises",
        challenges:"W03 Challenges"
    },
    {
        label:"Week-04",
        notes:"W04 Notes",
        exercises:"W04 Exercises",
        challenges:"W04 Challenges"
    },
    {
        label:"Week-05",
        notes:"W05 Notes",
        exercises:"W05 Exercises",
        challenges:"W05 Challenges"
    },   
    {
        label:"Week-06",
        notes:"W06 Notes",
        exercises:"W06 Exercises",
        challenges:"W06 Challenges"
    },    
    {
        label:"Week-07",
        notes:"W07 Notes",
        exercises:"W07 Exercises",
        challenges:"W07 Challenges"
    },    {
        label:"Week-08",
        notes:"W08 Notes",
        exercises:"W08 Exercises",
        challenges:"W08 Challenges"
    },    {
        label:"Week-09",
        notes:"W09 Notes",
        exercises:"W09 Exercises",
        challenges:"W09 Challenges"
    },
    {
        label:"Week-10",
        notes:"W10 Notes",
        exercises:"W10 Exercises",
        challenges:"W10 Challenges"
    },
    {
        label:"Week-11",
        notes:"W11 Notes",
        exercises:"W11 Exercises",
        challenges:"W11 Challenges"
    },
    {
        label:"Week-12",
        notes:"W12 Notes",
        exercises:"W12 Exercises",
        challenges:"W12 Challenges"
    },
    {
        label:"Week-13",
        notes:"W13 Notes",
        exercises:"W13 Exercises",
        challenges:"W13 Challenges"
    },
    {
        label:"Week-14",
        notes:"W14 Notes",
        exercises:"W14 Exercises",
        challenges:"W14 Challenges"
    }
]

/***Get ID of List of Items****/
let listOfItems = document.getElementById("listOfWeeks");
for(var i = 0; i < list.length; i++){
    var li_element = document.createElement("li");
    li_element.innerHTML = "<div class='test_list' style='display:flex;cursor:pointer;'><i class='material-icons'>navigate_next</i><span>"+list[i].label+"</span></div><div id='subList"+i+"' class='sub_list_week' style='display:none;'><ul style='list-style-type:none;'><li style='display:flex;cursor:pointer;' onclick='myFunction()'><i class='material-icons' style='color:#c2e7da;'>book</i><span><a href='#'>"+list[i].notes+"</a></span></li><li style='display:flex;cursor:pointer;'><i class='material-icons' style='color:#c2e7da;'>emoji_objects</i><span><a href='W01/exercises/localStorage/localStorage.html'>"+list[i].exercises+"</a></span></li></ul></div>";
    li_element.setAttribute("style","margin-bottom:0.5em;");
    //li_element.setAttribute("class","test_list");
    listOfItems.appendChild(li_element);
    
}

let list_events = document.getElementsByClassName("test_list");
for (var i =0; i < list_events.length;i++){
    (function(index){
        list_events[index].onclick = function(){
            debugger;
            //alert("I am list "+ index);
            if(document.getElementById('subList'+index+'').style.display == 'block'){
            document.getElementById('subList'+index+'').style.display = 'none';
            }
            else{
                document.getElementById('subList'+index+'').style.display = 'block';
            }
        };
    })(i)
}

let note1 = 'This week,I learned to use the Local Storage property of Javascript. It allows to save key/value pairs in a web browser.<br/> The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.The localStorage property is read-only. <br/> The rest of the reading was just a review.';

/*
document.getElementById('subList0').onclick=function(){
document.getElementById("content").innerHTML=note1;
}
*/  
function myFunction(){
    debugger;
    document.getElementById("content").innerHTML=note1;
}