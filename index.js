document.addEventListener('DOMContentLoaded', ()=>{
    
    // Variables selected from HTML
    let div = document.querySelector(".img-container");
    let card = document.querySelector(".card");
    let select = document.querySelector('#filter');
    let btn1 = document.querySelector('#btn1'); 
    let titleForm = document.querySelector('#title-form');

    // Variables(created elements)
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "Like";
    let img = document.createElement("img");
    // API KEY
    let apiKey = '563492ad6f91700001000001918af55e4f3f487ca84d981324668b46';

    //Fetching photos from  the pexel API    
    fetch("https://api.pexels.com/v1/curated", {
      method: 'GET',
      headers: {Accept: 'application/json',
      Authorization: apiKey}
    })
    .then(res=>res.json())
    .then(data =>{

      //Displaying a random element of the array
      let i = Math.floor(Math.random()*15) 
      let arr = data.photos 
      img.src = arr[i].src.original 
      h2.textContent = 'Title'
      p.textContent = "0"
      //Rendering elements on the page
      card.appendChild(img); 
      card.appendChild(p);
      card.appendChild(btn)
      div.appendChild(card) 
          
      
    })

    // Display random photo btn

    btn1.addEventListener('click', ()=>{
        window.location.reload()
      })
    






})