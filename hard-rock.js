  function callSongs(){
    const Song = document.getElementById('song').value;

fetch('https://api.lyrics.ovh/suggest/'+Song+'' )
.then(res => res.json())
.then(data => {
   
        //  const v1 = song_title;
        for(v1= 0; v1<10; v1++){
            const Title = data.data[v1];
            const titlee = Title.title;
            const Artist = Title.artist.name;
           const songList =  document.getElementById('song_list');
            const p = document.createElement('p');
            p.innerHTML = `<p class="author lead"> <strong>${titlee}</strong> 
            Album by <span> ${Artist}</span> 
            <button class="btn btn-success">Get Lyrics</button> </p>`;
            songList.appendChild(p);
            
          }

    })
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click' ,() => {
   document.getElementById('songList').innerHTML = '';
   document.getElementById('songList').style.display = "block";
  callSongs();


})







 // const api ={
    
 //     base: 'https://api.lyrics.ovh'
//}

// const updateUI = data => {
 //    document.getElementById('song_title').innerText = data.data[0].title || "Unknown Location";
//    document.getElementById('artist_name').innerText = data.data[0].artist.name;
  
//    document.getElementById('song').value = "";
// }

// const getWeatherData = song => { 
 //     fetch(`${api.base}/${artist.name}/${album.title}`)
//     .then(response => response.json())
//     .then(data => updateUI(data))
//     console.log(data)
// }

// const searchBtn = document.getElementById('search_button');
// searchBtn.addEventListener('click' , () => { 
  //     const inputCity = document.getElementById('song').value;
//     getWeatherData(inputCity)
// })  
