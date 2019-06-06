      function writeMessage(message) {
        text.text(message);
        layer.draw();
      }

      var stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
      });

      var layer = new Konva.Layer();

      var text = new Konva.Text({
        x: 70,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      var oval = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 50,
        scaleX: 2,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        strokeScaleEnabled: false,
        listening: false
      });

      oval.on('mouseover', function() {
        writeMessage('Mouseover oval');
      });
      oval.on('mouseout', function() {
        writeMessage('');
      });

      layer.add(oval);
      layer.add(text);
      stage.add(layer);

      document.getElementById('listen').addEventListener(
        'click',
        function() {
          oval.listening(true);
          layer.drawHit();
        },
        false
      );

      document.getElementById('dontListen').addEventListener(
        'click',
        function() {
          oval.listening(false);
          layer.drawHit();
        },
        false
      );

/*
window.addEventListener("load",function(){
  var playPromise = document.querySelector('#audioPlayer').play();

if (playPromise !== undefined) {
  playPromise.then(function() {
    playPromise.play();
  }).catch(function(error) {
    alert("error");
  });
}
})*/

window.addEventListener("load",setTimeout(function(){
  var playPromise = document.querySelector('#audioPlayer').play();

if (playPromise !== undefined) {
  playPromise.then(function() {
    playPromise.play();
  }).catch(function(error) {
    alert("error");
  });
}
}, 2000))

/*window.addEventListener("load",function play1() {

var promise = document.querySelector('#audioPlayer').play();

  if (promise !== undefined) {
      promise.then(_ => {
        var player = document.querySelector('#audioPlayer');
      
        if (player.paused) {
            player.play();
            //control.textContent = 'Pause';
        } else {
            player.pause(); 
            //control.textContent = 'Play';
        }
      }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
      });
  }  

});

window.addEventListener("load",function(){
  
  var media = document.getElementById("audioPlayer");
  const playPromise = media.play();
  if (playPromise !== null){
    playPromise.catch(() => { media.play(); })
}
})*/

 /*function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
  
    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause(); 
        control.textContent = 'Play';
    }
}


function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  
    player.currentTime = 0;
    player.pause();
}

$("#source").on("load",function() {
  var player = document.querySelector('#audioPlayer');
  player.play();
});*/


