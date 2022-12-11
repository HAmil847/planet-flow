const scene = document.getElementById("scene"); //this is the main scene
const hotspot = scene.getElementsByClassName('Hotspot'); //this is the array of the elements (piramides)
const scrollSensitive = 0.008; //this is the sensibility of the scrolling
let scrollScore =0; //the actual level(pramide)
let currentElement = scrollScore; //aux var
//set default

scene.interpolationDecay = '150'; //set the  velocity of change of the view 

//scrolling score increment
const scrolling = function(event){
    let amount = event.deltaY;
    amount = amount *scrollSensitive;
    scrollScore += amount;
    scrollScore = Math.round(scrollScore);
    console.log(scrollScore);
    changeView();
}
//move to the next model (piramide)
const changeView = () =>{
    //get the camera coordinates
    let dataset = hotspot[scrollScore].dataset;
    //move to the next camera
    scene.cameraTarget = dataset.target;
    //set the new view
    scene.cameraOrbit = dataset.orbit;

    //set the new animation
    anim();
}

//set animation on scroll
function anim(){
  //get the current element

  if (currentElement != scrollScore) {
    //get the video elemetn inside the div
    let currentMedia = hotspot[scrollScore].getElementsByTagName('video')[0];
    //restart the animation every change of view
    currentMedia.style.animation ='none';
    currentMedia.offsetHeight;
    currentMedia.style.animation = null;
    currentElement = scrollScore;
  }
}

//listener here 
window.addEventListener ( 'wheel', scrolling);
window.addEventListener('click', changeView);