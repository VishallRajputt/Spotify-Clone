console.log(" Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar= document.getElementById('myProgressBar')
let gif= document.getElementById('gif')
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songName: "Bairiya", filePath: "spotify/songs/1.mp3", coverPath: "spotify/Bairiya.jpg" },
  { songName: "Aashiqui-2", filePath: "spotify/songs/Tum hi ho.mp3", coverPath: "spotify/Aashiqui-2.jpg" },
  { songName: "Saware", filePath: "spotify/songs/Saware.mp3", coverPath: "spotify/saware.jpg" },
  { songName: "Agar tum sath ho", filePath: "spotify/songs/Agar tum sath ho.mp3", coverPath: "spotify/agar tum sath ho.jpg" },
  { songName: "Zaalima", filePath: "spotify/songs/zaalima.mp3", coverPath: "spotify/Zaalima.jpg" },
  { songName: "Ae dil hai mushkil", filePath: "spotify/songs/Ae Dil Hai Mushkil.mp3", coverPath: "spotify/Ae-Dil-Hai-Mushkil.jpg" }
];
songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// function updateSongDetails() {
//   songNameDisplay.textContent = songs[songIndex].songName;
//   coverImage.src = songs[songIndex].coverPath;
//   audioElement.src = songs[songIndex].filePath;
// }



masterPlay.addEventListener('click', () =>{
  if(audioElement.paused|| audioElement.currentTime <=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  
  masterPlay.innerHTML = ''; // Change the button text to "Pause"
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
    masterPlay.innerHTML = ''; } // Change the button text to "Play"
})

audioElement.addEventListener('timeupdate', () => {
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('timeupdate',() => {
  console.log('timeupdate');
})
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})

