const form = document.forms['photoForm'];
const resultImg = document.getElementById("result");
console.log(form);

form.addEventListener('submit', showPhotos, false);

function showPhotos(event){
    debugger;
    event.preventDefault();

    let search = form[0].value;
    
    const url = "https://api.unsplash.com/search/photos?query="+search+"&client_id=maYuSPPjdztmymAM14UHlQj8Fu2pSrPuM1r7MgygzCQ"

    // const request = new Request(url,{
    //     method: 'GET',
    //     body: search
    // })

    fetch(url)
    .then(response => response.json())
    .then(data => data.results.forEach(photo => {resultImg.innerHTML += "<img src="+photo.urls.regular+">"}))
    .catch(error => console.log('There was an error:', error))
}
