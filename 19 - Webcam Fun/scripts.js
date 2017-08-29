const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
  //this is how you get acces to a user's video
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  //this returns a promise
    .then(localMediaStream => {
      console.log(localMediaStream)
      //src needs to be a url
      //this is how we get a live feed
      video.src = window.URL.createObjectURL(localMediaStream)
      video.play()
    })
    //we need a .catch in case you're not given the access to the webcam
    .catch(err => {
      console.error(`OH NO!!!`, err)
    })
}

getVideo()
