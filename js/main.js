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

let note1 = 'This week,I learned to use the Local Storage property of Javascript. It allows to save key/value pairs in a web browser.<br/> The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.The localStorage property is read-only. <br/> The rest of the reading was just a review.';
let note2 = "For this week, I learned the different approaches to creating arrays in Javascript. </br>I learned to declare arrays, deleting elements from an array, destructing arrays, removing the first and the last element from an array, appending a new element at the beggining and at the end of an array using the methods: push() and unshift(), creating subarrays, removing an element permanently without letting any value undefined, reversing the order of an array by using the reverse() method, sorting the order of an array using sort(), and to create multidimensional arrays.";
let note3 = "This week I learned about objects, DOM, and Events.</br> I learned to create objects literals and accesing to their properties by using the dot notation.</br> The Document Object Model or DOM is a pawerful tool to manipute html tags.</br> We can use Event Listeners to call functions when an event occurs, such as mouse events, keybord events, and touch events.";
let note4 = "This week I learned about html forms. The HTML form on a web page allows a user to enter data that is sent to a server for processing.</br> Forms can resemble paper or database forms because web users fill out the forms using checkboxes, radio buttons, or text fields.</br>For example, forms can be used to enter shipping or credit card data to order a product, or can be used to retrieve search results from a search engine.</br>The HTML form element can contain one or more of the following form elements:</br><ul><li>input</li><li>label</li><li>select</li><li>textarea</li><li>button</li><li>fieldset</li><li>legend</li><li>datalist</li><li>output</li></ul>";
let note5 = "This week I learned testing and debugging tools in javascript. Javascript has a variety of methods to find bugs and to prevent the crash of the webpage.</br> The errors are caused by one of the following:</br><ul><li>System error</li><li>Programmer error</li><li>User error</li></ul></br>It is recommended to use the Strict Mode in all of our JS files in order to force the browser to display more exceptions and warnings that can be caused by not declaring variables.";
let note6 = "No Available";
let note7 = "This week I learned to use further functions.</br> I practiced several exercises with callbacks, promises, async functions and Immediately Invoked Functions(IIFE).</br>The most important concept I learned this week was to implement the web development technique used in order to send and retrieve data in the background without refreshing the webpage, the name of this technique is AJAX.<br> AJAX stands for Asynchronous Javascript XML.</br> AJAX is the use of the XMLHTTPRequest object to communicate with servers.";
let note8 = "It was an outstanding week. I could bolster my knowledge on CSS by implementing CSS Transitions and Animations.</br> For this week´s exercises I created an application that uses transitions and the drag and drop API. With transforms, transitions, and animations, your site will look more dynamic.</br>CSS Transforms are widely supported by all the modern browsers.</br> Transform´s property have the following functions: Translation, Scaling, Rotation and Skew.";
let note9 = "On week nine, I learned about the Window Object Model, which represents the browser´s frame or window in which the webpage is contained.</br>The window object can be used to find out what the browser is running, the pages visited, size of browser window or user screen, alter text in browser status bars, open new windows , change the page that is loaded.</br>The window object is a Global Object, hence its name need not be used to access its properties and methods. In fact, Global functions and variables are all created as properties of the local object.";
let note10 = "No Available";
let note11 = "No Available";
let note12 = "No Available";
let note13 = "No Available";
let note14 = "No Available";

const WeekExercises = [
    ["W01/exercises/localStorage/localStorage.html",note1],
    ["W02/exercises/soccerGame.html",note2],
    ["W03/exercises/pig_game.html",note3],
    ["W04/exercises/forms.html",note4],
    ["W05/exercises/testingInJavascript.html",note5],
    ["W06/exercises/",note6],
    ["W07/exercises/ajaxExample.html",note7],
    ["W08/exercises/w08.html",note8],
    ["W09/exercises/w09.html",note9],
    ["W10/exercises/",note10],
    ["W11/exercises/",note11],
    ["W12/exercises/",note12],
    ["W13/exercises/",note13],
    ["W14/exercises/",note14]
];

const WeekChallenges = [
    ["W01/exercises/localStorage/localStorage.html"],
    ["W02/exercises/soccerGame.html"],
    ["W03/exercises/pig_game.html"],
    ["W04/exercises/forms.html"],
    ["W05/exercises/"],
    ["W06/challenges/todolist/home.html"],
    ["W07/exercises/"],
    ["W08/exercises/"],
    ["W09/exercises/"],
    ["W10/exercises/"],
    ["W11/exercises/"],
    ["W12/exercises/"],
    ["W13/exercises/"],
    ["W14/exercises/"]
];


/***Get ID of List of Items****/
let listOfItems = document.getElementById("listOfWeeks");
for(var i = 0; i < list.length; i++){
    // debugger;
    var li_element = document.createElement("li");
    li_element.innerHTML = "<div class='test_list' id='mainList_"+i+"' onclick='transforming(this.id)' style='display:flex;cursor:pointer;'><i class='material-icons'>navigate_next</i><span>"+list[i].label+"</span></div><div id='subList"+i+"' class='sub_list_week' style='display:none;'><ul style='list-style-type:none;'><li style='display:flex;cursor:pointer;' onclick='myFunction(\""+WeekExercises[i][1]+"\")'><i class='material-icons' style='color:#c2e7da;'>book</i><span><a href='#'>"+list[i].notes+"</a></span></li><li style='display:flex;cursor:pointer;'><i class='material-icons' style='color:#c2e7da;'>emoji_objects</i><span><a href="+WeekExercises[i][0]+">"+list[i].exercises+"</a></span></li><li style='display:flex;cursor:pointer;'><i class='material-icons' style='color:#c2e7da;'>gamepad</i><span><a href="+WeekChallenges[i][0]+">"+list[i].challenges+"</a></span></li></ul></div>";
    li_element.setAttribute("style","margin-bottom:0.5em;");
    //li_element.setAttribute("class","test_list");
    listOfItems.appendChild(li_element);
    
}

let list_events = document.getElementsByClassName("test_list");
for (var i =0; i < list_events.length;i++){
    (function(index){
        list_events[index].onclick = function(){
            // debugger;
            //alert("I am list "+ index);
            if(document.getElementById('subList'+index+'').style.display == 'block'){
            document.getElementById('subList'+index+'').style.display = 'none';
            document.getElementById('mainList_'+index+'').firstChild.textContent = 'navigate_next';
            
            }
            else{
                document.getElementById('subList'+index+'').style.display = 'block';
                document.getElementById('mainList_'+index+'').firstChild.textContent = 'expand_more';
            }
        };
    })(i)
}


/*
document.getElementById('subList0').onclick=function(){
document.getElementById("content").innerHTML=note1;
}
*/  
function myFunction(x){
    debugger;
    document.getElementById("content").innerHTML=x;
}

// function transforming(item){
//     debugger;
//     document.getElementById('item').style.color = "#FF0000"
//     alert('Gotcha');
// }