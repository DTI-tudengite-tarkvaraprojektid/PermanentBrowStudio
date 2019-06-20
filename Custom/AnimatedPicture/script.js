/*jshint esversion: 6*/

let running;

//LEHE LAADIMISEL ANIMATSIOON

window.onload = function() {
  if (document.readyState === "complete"){
    animateOnPageLoad();
  }
};

function animateOnPageLoad(){
  //pic1
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0.75";
    document.getElementById("face2").style.opacity = "0.5";
  }, 100);
  //pic2
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0.5";
    document.getElementById("face2").style.opacity = "1";
  }, 150);
  //pic3
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0";
    document.getElementById("face2").style.opacity = "0";
    document.getElementById("face3").style.opacity = "1";
  }, 200);
  //pic4
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0";
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face4").style.opacity = "1";
  }, 250);
}



//SILMADE ANIMATSIOON SULGEMINE

function animateEyesClose(pic){
    document.getElementById(pic).style.opacity = "0";
    document.getElementById("face2").style.opacity = "0";
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face4").style.opacity = "1";

    //pic1
    setTimeout(function(){
      document.getElementById("face4").style.opacity = "0.5";
      document.getElementById("face3").style.opacity = "0.5";
    }, 50);
    //pic2
    setTimeout(function(){
      document.getElementById("face3").style.opacity = "1";
      document.getElementById("face2").style.opacity = "0.5";
      document.getElementById("face4").style.opacity = "0";
    }, 100);
    //pic3
    setTimeout(function(){
      document.getElementById("face3").style.opacity = "0";
      document.getElementById("face2").style.opacity = "0.5";
      document.getElementById(pic).style.opacity = "0.5";

    }, 150);
    //pic4
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "1";
      document.getElementById("face2").style.opacity = "0";
    }, 200);


}

//SILMADE ANIMATSIOON AVAMINE

function animateEyesOpen(pic){
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0.75";
      document.getElementById("face2").style.opacity = "0.5";
    }, 50);
    //pic2
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0.5";
      document.getElementById("face2").style.opacity = "1";
    }, 100);
    //pic3
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0";
      document.getElementById("face2").style.opacity = "0";
      document.getElementById("face3").style.opacity = "1";
    }, 150);
    //pic4
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0";
      document.getElementById("face3").style.opacity = "0";
      document.getElementById("face4").style.opacity = "1";
    }, 200);

}

// PILDI PEAL HOVER FUNKTSIOONID ps: HETKEL PUUDUVAD AREA MAPID!

/*
let timer;
$("#area1").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "lips";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "lips";
    checkRunning(pic);
});
$("#area2").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "eyes";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "eyes";
    checkRunning(pic);
});
$("#area3").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "eyes";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "eyes";
    checkRunning(pic);
});
$("#area4").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "brow";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "brow";
    checkRunning(pic);
});
$("#area5").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "brow";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "brow";
    checkRunning(pic);
});*/

// MUUDAVAD PILDTI KUI HIIREGA PEALE MINNA

$("#brows").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "brow";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "brow";
    checkRunning(pic);
});
$("#silmaliner").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "eyes";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "eyes";
    checkRunning(pic);
});
$("#huuled").mouseenter(function() {
    timer = setTimeout(function(){
      let pic = "lips";
      passControl(pic);
    }, 250);
}).mouseleave(function() {
    clearTimeout(timer);
    let pic = "lips";
    checkRunning(pic);
});



// EI LASE ALUSTADA FUNKTSIOONI, KUI JUBA TÖÖS
function passControl(pic){
  if(!running){
    animateEyesClose(pic);
  }else{
    setTimeout(function(){
      animateEyesClose(pic);
       {
      }
    }, 250);

    setTimeout(function(){

      if(pic=="lips"){
        if ($('#area1:hover').length == 0){
          if($('#huuled:hover').length == 0){
            checkRunning(pic);
          }
        }
      }
      if(pic=="eyes"){
        if ($('#area3:hover').length == 0){
          if ($('#area2:hover').length == 0){
            if($('#silmaliner:hover').length == 0){
              checkRunning(pic);
            }

          }
        }
      }

      if(pic=="brow"){
        if ($('#area5:hover').length == 0){
          if ($('#area4:hover').length == 0){
            if($('#brows:hover').length == 0){
              checkRunning(pic);
            }
          }
        }
      }

    }, 255);
  }
}
// LISAFUNKTSIOON
function checkRunning(pic){
  running = true;
  animateEyesOpen(pic);
  setTimeout(function(){
    running = false;
  }, 300);
}
