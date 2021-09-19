function loadStory(){
    debugger;
  let storyName = document.getElementById("name_input").value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

function saveStory(){
    debugger;
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory(){
    var storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}