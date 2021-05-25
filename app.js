const form = document.querySelector('#form')
const gifContainer = document.querySelector('#giphy-container')
const input = document.querySelector('#search')
const deleteButton = document.querySelector('#delete-button')

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const searchTerm = input.value;
    input.value = '';
    if(searchTerm){
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const response = await axios.get(apiUrl);
    appendImg(response.data)
    } else {
        alert('Please enter a term')
    }
})

function appendImg(response) {
    const numResults = response.data.length;
    const randomIdx = Math.floor(Math.random() * numResults);
    const newGif = new Image();
    newGif.src = response.data[randomIdx].images.original.url
    gifContainer.append(newGif)
}

deleteButton.addEventListener('click', function() {
    gifContainer.innerHTML = "";
})