const scene = document.getElementById("scene");
const hotspot = scene.getElementsByClassName('Hotspot');
const scrollSensitive = 0.008;
let scrollScore =0;
let currentElement = scrollScore;
//set default
scene.interpolationDecay = '150';

//scrolling score increment
const scrolling = function(event){
    let amount = event.deltaY;
    amount = amount *scrollSensitive;
    scrollScore += amount;
    scrollScore = Math.round(scrollScore);
    console.log(scrollScore);
    changeView();
}
//move to the next obj
const changeView = () =>{
    //get the camera coordinates
    let dataset = hotspot[scrollScore].dataset;
    scene.cameraTarget = dataset.target;
    scene.cameraOrbit = dataset.orbit;
    //set the new animation
    anim();
}

//set animation on scroll
function anim(){
  //get the current element

  if (currentElement != scrollScore) {
    let currentMedia = hotspot[scrollScore].getElementsByTagName('video')[0];
    console.log(currentMedia);
    currentMedia.style.animation ='none';
    currentMedia.offsetHeight;
    currentMedia.style.animation = null;
    currentElement = scrollScore;
  }
}

//listener here 
window.addEventListener ( 'wheel', scrolling);
window.addEventListener('click', changeView);