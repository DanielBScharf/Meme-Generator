const textTop = document.querySelector('input[name="topText"]');
const textBottom = document.querySelector('input[name="bottomText"]');
const memeImg = document.querySelector('input[name="memeImage"]');

const memeForm = document.querySelector('#memeMaker');

// let memeCount = 0;


memeForm.addEventListener('submit', function(e){
    e.preventDefault();
    let memeDiv = document.querySelector('.memeStuff');
    let newMemeDiv = document.createElement('div')
    let newImage = document.createElement("img");
    let newTText = document.createElement('div');
    let newBText = document.createElement('div');
    

    newMemeDiv.classList.add('newMeme')
    newImage.classList.add('image');
    newImage.src = memeImg.value;
    newTText.classList.add('topText');
    newBText.classList.add('bottomText');
    newBText.innerText = textBottom.value;
    newTText.innerText = textTop.value;
    memeDiv.appendChild(newMemeDiv);
    newMemeDiv.appendChild(newImage);
    newMemeDiv.appendChild(newTText);
    newMemeDiv.appendChild(newBText);
    textTop.value = '';
    textBottom.value = '';
    memeImg.value = '';

    console.log(newBText.innerText, newTText.innerText)
return;
});

