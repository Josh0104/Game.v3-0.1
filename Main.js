var pointLyd 
var antalPoint = 0;
var liv = 3;
var s;
var spilType = undefined;
var mode = undefined;
let canvasZoom = screen.width;

if(localStorage.getItem('high score') == null){
  var high_score = 0;
}else {
  high_score = localStorage.getItem('high score');
  }

function preload(){
imgHjerte = loadImage('Img/hjerteLiv.png')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("This get called");
}

function startUp(){
  mode = 0
}

function setup() {

  //createCanvas(1536, 864);
  createCanvas(windowWidth,windowHeight)
  document.getElementById('buttonExitFullScreen').style.visibility = 'hidden';
  startUp() //Startskærm
  player1 = new Player();
  Point1 = new Point(random(width/2-100,width/2+100),0);
  bil1 = new Biler();

  frameRate(60)
  background(100);

  document.getElementById('antalPoint').style.visibility ='hidden';
  document.getElementById('highScorePoint').style.visibility ='hidden';



}

function draw(){
  canvasZoom = screen.width;
  currentScalling = windowWidth/canvasZoom;
  scale(currentScalling); 
  console.log(currentScalling);

  if (mode == 0){
    startSkaerm();

  } else if(mode == 1){
    spilSkaerm();
  
  } else if (mode == 2){
    pauseSkaerm();

  } else if (mode == 4){
    slutSkaerm();

  } 
    }
      
//funktioner 
    function keyPressed(){
        spilLyd = false

      if (keyCode === ENTER) {
        if(mode==0){
        mode=1;
       } }

      if ( key=== "p" || key === "P"){
          mode =2;
        }

      if (key === " "){
            mode=1;
          }
      
      // if (key === "h") {
      //   if (!spilLyd) {

      //   dyt = createAudio('Lyd/Dyt.mp3')
      //   dyt.play(true);
      //   spilLyd = true
      //   }
      // }
      }     

        function genstartKnap() {
         //window.location.reload(true);

         mode = 0;
         liv = 3;
         antalPoint = 0;
         bil1.nulstille();
         Point1.nulstille();

         showObjects();
         if(window.fullscreen){
          document.getElementById('buttonExitFullScreen').style.visibility = 'visible';
          document.getElementById('buttonFullScreen').style.visibility = 'hidden';  
        } else {
          document.getElementById('buttonExitFullScreen').style.visibility = 'hidden';
          document.getElementById('buttonFullScreen').style.visibility = 'visible';  
        }

          }

        function startGameNormal(){
          mode = 1;
          spilType = 0;
          hideObjects();  
        }

        function startGameNeutral(){
          mode = 1;
          spilType = 1;
          hideObjects();
        }

        function startGameEkstrem(){
          mode = 1;
          spilType = 2;
          hideObjects();
        }

       function hideObjects(){

        document.getElementById('titel').style.visibility = 'hidden';
        document.getElementById('startTekst').style.visibility = 'hidden';
        document.getElementById('buttonNormal').style.visibility = 'hidden';
        document.getElementById('buttonNeutral').style.visibility = 'hidden';
        document.getElementById('buttonEkstrem').style.visibility = 'hidden'; 
        document.getElementById('buttonInfo').style.visibility = 'hidden'; 

        }

      function showObjects(){

        document.getElementById('titel').style.visibility = 'visible';
        document.getElementById('startTekst').style.visibility = 'visible';
        document.getElementById('buttonNormal').style.visibility = 'visible';
        document.getElementById('buttonNeutral').style.visibility = 'visible';
        document.getElementById('buttonEkstrem').style.visibility = 'visible'; 
        document.getElementById('buttonInfo').style.visibility = 'visible';

      }


var elem = document.documentElement;
function openFullscreen() {
  document.getElementById('buttonExitFullScreen').style.visibility = 'visible';
  document.getElementById('buttonFullScreen').style.visibility = 'hidden';  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  document.getElementById('buttonExitFullScreen').style.visibility = 'hidden';
  document.getElementById('buttonFullScreen').style.visibility = 'visible';  
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
} 
// else {
//   document.getElementById('buttonExitFullScreen').style.visibility = 'hidden';
//   document.getElementById('buttonFullScreen').style.visibility = 'visible';  
// }
   console.log(document.fullscreen)


/*Mode er forskellige skærme 

mode 0 = startskærm 
mode 1 = spillet 
mode 2 = pasue skærm 
mode 3 = død særm 
mode 4 = instruktion skærm */