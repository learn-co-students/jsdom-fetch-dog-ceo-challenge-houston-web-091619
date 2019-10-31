console.log('%c HI', 'color: firebrick')

function getImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => addImages(data))
}

function addImages(data){
    for(let i=0; i<data.message.length; i++){
        let img = document.createElement('img')
        img.src = data.message[i]
        let scr = document.getElementById('dog-image-container')
        scr.append(img)
    }
}

function getAllBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => addAllBreeds(data))
}

function addAllBreeds(data){
    let ul = document.querySelector('#dog-breeds');
    for (let i=0; i<Object.keys(data.message).length; i++){
        if (Object.values(data.message)[i].length === 0){
            let li = document.createElement('li');
            //adds the breed of the dog to li tag
            li.innerText = Object.keys(data.message)[i];
            //changes the mouse showing the user you can click the text
            li.style.cursor = 'pointer';
            //adds to the html
            ul.append(li);
            //when click he color of the text changes
            li.addEventListener('click', updateColor);
        }
        else{
            for (let k=0; k<Object.values(data.message)[i].length; k++){
                let li = document.createElement('li');
                //adds the detail breed type as first text of the li tag
                li.innerText = Object.values(data.message)[i][k];
                //adds the breed of dog as second text of the li tag
                li.innerText += " " + Object.keys(data.message)[i];
                li.style.cursor = 'pointer';
                ul.append(li);
                li.addEventListener('click', updateColor);
            }
        }
    }
}

function updateColor(event) {
    //ramdoms from 0-3
    let color = Math.floor(Math.random() * 4);
    if(color ===0){
        event.target.style.color = 'red';
    }
    else if(color ===1){
        event.target.style.color = 'blue';
    }
    else if(color ===2){
        event.target.style.color = 'green';
    }
    else if(color ===3){
        event.target.style.color = 'brown';
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    getImages()
    getAllBreeds()
})
// function addAllBreeds(data){
//     for (let i=0; i<Object.keys(data.message).length; i++){
//         let ul = document.createElement("ul")
//         if (Object.values(data.message)[i].length === 0){
//             ul.innerText = Object.keys(data.message)[i];
//             let idBreed = document.getElementById('dog-breeds')
//             idBreed.append(ul)
//         }
//         else{
//             for (let k=0; k<Object.values(data.message)[i].length; k++){
//                 ul.innerText = Object.values(data.message)[i][k];
//                 ul.innerText += " " + Object.keys(data.message)[i]
//                 let idBreed = document.getElementById('dog-breeds')
//                 idBreed.append(ul)
//             }
//         }
//     }
// }
