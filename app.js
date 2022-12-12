const scene = document.getElementById("scene"); //this is the main scene
const hotspot = scene.getElementsByClassName("Hotspot"); //this is the array of the elements (piramides)
const scrollSensitive = 0.008; //this is the sensibility of the scrolling
const scrollMovilSensitive = 0.08; //this is the sensibility of the scrolling

let scrollScore = 0; //the actual level(pramide)
let lastY;
let temp=0;
let currentElement = scrollScore; //aux var
const currentMedia = document.getElementById("visor"); //the visor
const video = document.getElementById("visor-video"); //the visor

//set default

scene.interpolationDecay = "150"; //set the  velocity of change of the view
video.src ="video(3).mp4";

//scrolling score increment PC
const scrolling = function (event) {
  let amount = event.deltaY;
  amount = amount * scrollSensitive;
  scrollScore += amount;
  scrollScore = Math.round(scrollScore);
  console.log(scrollScore);
  changeView();
};

//scrolling score increment MOVIL
const scrolliMovil = function (event) {
  let amount=0;
  var currentY = event.touches[0].clientY;
  if(currentY > lastY){
    --amount;
  }else if(currentY < lastY){
    ++amount;
  }
  lastY = currentY;
  temp += amount*scrollMovilSensitive;
  scrollScore =Math.round(temp);
  console.log(scrollScore);
  changeView();
};

//move to the next model (piramide)
const changeView = () => {
  //get the camera coordinates
  let dataset = hotspot[scrollScore].dataset;
  //move to the next camera
  scene.cameraTarget = dataset.target;
  //set the new view
  scene.cameraOrbit = dataset.orbit;

  //set the new animation
  anim();
};

//set animation on scroll
function anim() {
  //get the current element

  if (currentElement != scrollScore) {
    //get the video elemetn inside the div
    //restart the animation every change of view
    currentMedia.style.animation = "none";
    currentMedia.offsetHeight;
    currentMedia.style.animation = null;
    currentElement = scrollScore;
        //set the video

    
   // video.load();

    //set position in order
    switch (scrollScore) {
      case 0:
        // code block
        currentMedia.style.top="30%";
        currentMedia.style.left="52.5%";
        
        //the video 
        video.src ="video(1).mp4";
        break;
      case 1:
        currentMedia.style.top="25%";
        currentMedia.style.left="51.5%";

        //the video 
        video.src ="video(2).mp4";
        break;
      case 2: 
        currentMedia.style.top="18%";
        currentMedia.style.left="50%";

        //the video 
        video.src ="video(3).mp4";
        break;
      case 3:
        currentMedia.style.top="40%";

        //the video 
        video.src ="video(4).mp4";
        break;
      case 4:
        currentMedia.style.top="20%";

        //the video 
        video.src ="video(5).mp4";
        break;
      case 5:
        currentMedia.style.top="40%";

        //the video 
        video.src ="video(6).mp4";
        break;
      default:
        currentMedia.style.top="20%";
        currentMedia.style.left="51.5%";

        //the video 
        video.src ="video(1).mp4";
    }
    
  }
}

//listener here
window.addEventListener("wheel", scrolling);
window.addEventListener("click", changeView);
window.addEventListener("touchmove", scrolliMovil);
