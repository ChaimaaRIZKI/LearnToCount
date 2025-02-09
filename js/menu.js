$('#boutonPlay').on('click',function() {
	
	console.log("test");


	$("#container").hide();
	$("#boutonPlay").hide();

	$("#menu").css({
		"background-color":"#88001b"
	});

	var width=window.innerWidth;
	var height=window.innerHeight;

	var wayLayer = new Konva.Layer();
	var starLayer = new Konva.Layer();
	var imgLayer1 = new Konva.Layer();
	var imgLayer2 = new Konva.Layer();
	var imgLayer3 = new Konva.Layer();

	var stageMenu = new Konva.Stage({
	    container: 'menu',   // id of container <div>
	    width: width,
	    height: height,

	});


	  var layerTittle = new Konva.Layer();

	    var simpleText = new Konva.Text({
        x: width/2-width/5,
        y: height/10,
        text: 'Apprendre à compter',
        fontSize: 60,
        fontFamily: 'comic',
        fill: '#E16B5A',
        shadowOffsetX: 20,
        shadowOffset: 25, 
        shadowBlur : 40       
      });

	  layerTittle.add(simpleText);
	  stageMenu.add(layerTittle);

	var wayImg = new Image();
	wayImg.onload = function() {
		var way = new Konva.Image({
			x:(width/2-width/3)/2,
			y:height/4,
			image: wayImg,
			width:width/4,
			height:height/4
		});
		wayLayer.add(way);
		stageMenu.add(wayLayer);		
	};
	wayImg.src='img/scene1.png';

	var imgObj1 = new Image();
	imgObj1.onload = function() {
		var img = new Konva.Image({
			x:2*(width/2-width/6-8),
			y:height/4,
			image: imgObj1,
			width:width/4,
			height:height/4
		});	
		imgLayer1.add(img);
		stageMenu.add(imgLayer1);
	};
	imgObj1.src='img/scene2.png';

	var starImg = new Image();
	starImg.onload = function() {
		var star = new Konva.Image({
			x:(width/3+width/30),
			y:(height/2-height/15),
			image: starImg,
			width:width/4,
			height:height/4
		});	
		starLayer.add(star);
		stageMenu.add(starLayer);
	};
	starImg.src='img/menuStar.svg';

	var imgObj2 = new Image();
	imgObj2.onload = function() {
		var img = new Konva.Image({
			x:(width/2-width/3)/2,
			y:height/2+height/8,
			image: imgObj2,
			width:width/4,
			height:height/4
		});	
		imgLayer2.add(img);
		stageMenu.add(imgLayer2);
	};
	imgObj2.src='img/scene3.png';

	var imgObj3 = new Image();
	imgObj3.onload = function() {
		var img = new Konva.Image({
			x:2*(width/2-width/6-8),
			y:height/2+height/8,
			image: imgObj3,
			width:width/4,
			height:height/4
		});	
		imgLayer3.add(img);
		stageMenu.add(imgLayer3);
	};
	imgObj3.src='img/scene4.png';		
	//wayLayer.add(way);
	
	//stage.add(wayLayer);
	

});

 function play(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  	player.play();
}

function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  
    player.currentTime = 0;
    player.pause();
}

$("#source").on("load",function() {
  var player = document.querySelector('#audioPlayer');
  player.play();
});