window.onload = function(){
	var canvas  = document.getElementById("canvas");
	var ctx     = canvas.getContext("2d");
	var clavier = new Clavier();
	var perso = new Image();
	perso.src = 'image/spritesheet_luffy.png';
	var perso2 = new Image();
	perso2.src = 'image/spritesheet_sacha.png';
	var map = new Image();
	map.src = 'image/fond_temple2.jpg';
	var trophee = new Image();
	trophee.src = 'image/coupe_de_feu.png';
	var imgfin = new Image();
	imgfin.src = 'image/you_win.jpg'
	var x = 10;
	var y = 300;
	var pas = 0;
	var dir = 0;
	var mv = 0;
	var sens = 0;
	var w = 1300;
	var z = 300;
	
	


	//toute les portes et les boutons a activer
	var green = false;
	var btngreen = new Obstacle(1105,80,15,15);
	var pgreen = new Obstacle(155,470,5,50);

	var pink = false;
	var btnpink = new Obstacle(585,515,15,15);
	var ppink = new Obstacle(1080,555,45,5);

	var yellow = false;
	var btnyellow = new Obstacle(1165,240,15,15);
	var pyellow = new Obstacle(195,435,35,5);

	var grey = false
	var btngrey = new Obstacle(405,40,15,15);
	var pgrey = new Obstacle(1050,155,5,40);

	var bleuclair = false;
	var btnbleuclair = new Obstacle(965,305,15,15);
	var pbleuclair = new Obstacle(225,215,5,40);

	var red = false
	var btnred = new Obstacle(530,120,15,15);
	var pred = new Obstacle(865,375,5,45);

	var purple = false;
	var btnpurple = new Obstacle(230,465,15,15);
	var ppurple = new Obstacle(830,230,5,40);

	var bleufonce = false
	var btnbleufonce = new Obstacle(1185,110,15,15);
	var pbleufonce = new Obstacle(510,320,5,45);

	var marronclair = false
	var btnmarronclair = new Obstacle(600,215,15,15);
	var pmarronclair = new Obstacle(770,35,5,40);

	var vertclair = false;
	var btnvertclair = new Obstacle(965,560,15,15);
	var pvertclair = new Obstacle(580,465,5,45);

	//tout les chemins du labirynthr qui se ferme
	var pinv = new Obstacle(1175,390,40,5);
	var pinvbis = new Obstacle(1180,440,5,40)
	var fake = false;

	var pinv1 = new Obstacle(965,515,45,5);
	var pinv1bis = new Obstacle(930,475,5,40);
	var fake1 = false;

	var pinv2 = new Obstacle(1075,440,5,40);
	var pinv2bis = new Obstacle(1040,440,5,40);
	var fake2 = false;

	var pinv3 = new Obstacle(950,355,40,5)
	var pinv3bis =new Obstacle(950,270,40,5)
	var fake3 = false;

	var pinv4 = new Obstacle(1005,285,40,5);
	var pinv4bis = new Obstacle(995,235,5,35);
	var fake4 = false;

	var pinv5 = new Obstacle(195,435,35,5);
	var pinv5bis = new Obstacle(225,400,5,40);
	var fake5 = false;

	var pinv6 = new Obstacle(305,440,40,5);
	var pinv6bis = new Obstacle(385,440,5,40);
	var fake6 = false

	var pinv7 = new Obstacle(925,440,40,5);
	var pinv7bis = new Obstacle(830,440,35,5);
	var fake7 = false;


	//porte qui bloque le retour du persos 2
	var retourbloque = false;
	var desactivation = false;
	var retourbloqueinv = new Obstacle(990,75,5,40);
	var pretourbloque = new Obstacle(965,75,5,40)
	var btnorange = new Obstacle(390,280,15,15)

	//zone où les 2 persos doivent se rejoindre
	var zonefin = new Obstacle(645,285,50,60)

	//bloque les persos pour qu'il n'est pas acces a lautre cote de labirynthe
	var limiteperso2 = new Obstacle(615,285,5,60)
	var limiteperso = new Obstacle(720,285,5,60)


	var musique = new Audio ('audio/musique_fond.mp3');
	musique.volume = 0.1;
	var sonporte = new Audio ('audio/son_porte.mp3');
	sonporte.volume = 0.1;
	var sonfin = new Audio ('audio/sonfin.mp3');
	sonfin.volume = 0.1;

	//code de tout les murs de base du labirynthe
	o1 = new Obstacle(0,290,115,5);
	o2 = new Obstacle(0,330,115,5);
	o3 = new Obstacle(115,35,5,260);
	o4 = new Obstacle(120,35,500,5);
	o5 = new Obstacle(615,35,5,250);
	o6 = new Obstacle(615,285,105,5);
	o7 = new Obstacle(115,330,5,270);
	o8 = new Obstacle(115,600,500,5);
	o9 = new Obstacle(615,345,5,260);
	o10 = new Obstacle(615,345,105,5);
	o11 = new Obstacle(120,180,35,5);
	o12 = new Obstacle(155,160,5,310);
	o13 = new Obstacle(155,75,5,40);
	o14 = new Obstacle(155,75,285,5);
	o15 = new Obstacle(155,520,5,40);
	o16 = new Obstacle(155,560,245,5);
	o17 = new Obstacle(190,115,5,185);
	o18 = new Obstacle(190,340,5,180);
	o19 = new Obstacle(160,430,35,5);
	o20 = new Obstacle(190,115,50,5);
	o21 = new Obstacle(190,520,95,5);
	o22 = new Obstacle(195,270,35,5);
	o23 = new Obstacle(225,255,5,145);
	o24 = new Obstacle(225,155,5,60);
	o25 = new Obstacle(225,435,5,45);
	o26 = new Obstacle(225,480,180,5);
	o27 = new Obstacle(225,155,155,5);
	o28 = new Obstacle(290,440,5,45);
	o29 = new Obstacle(260,440,45,5);
	o30 = new Obstacle(260,340,5,100);
	o31 = new Obstacle(260,340,40,5);
	o32 = new Obstacle(295,235,5,110);
	o33 = new Obstacle(300,235,20,5);
	o34 = new Obstacle(260,195,5,100);
	o35 = new Obstacle(265,195,210,5);
	o36 = new Obstacle(260,560,5,45);
	o37 = new Obstacle(320,115,5,45);
	o38 = new Obstacle(290,115,255,5);
	o39 = new Obstacle(390,75,5,45);
	o40 = new Obstacle(420,35,5,45);
	o41 = new Obstacle(385,480,5,40);
	o42 = new Obstacle(325,520,220,5);
	o43 = new Obstacle(445,560,140,5);
	o44 = new Obstacle(500,520,5,45);
	o45 = new Obstacle(295,380,5,20);
	o46 = new Obstacle(295,395,55,5);
	o47 = new Obstacle(360,235,80,5);
	o48 = new Obstacle(390,235,5,40);
	o49 = new Obstacle(330,275,80,5);
	o50 = new Obstacle(330,275,5,80);
	o51 = new Obstacle(405,275,5,80);
	o52 = new Obstacle(330,355,20,5);
	o53 = new Obstacle(350,355,5,45);
	o54 = new Obstacle(385,355,25,5);
	o55 = new Obstacle(385,355,5,40);
	o56 = new Obstacle(385,395,55,5);
	o57 = new Obstacle(440,380,5,20);
	o58 = new Obstacle(475,195,5,245);
	o59 = new Obstacle(440,235,5,100);
	o60 = new Obstacle(340,440,140,5);
	o61 = new Obstacle(430,155,80,5);
	o62 = new Obstacle(450,155,5,45);
	o63 = new Obstacle(510,155,5,55);
	o64 = new Obstacle(510,255,5,65);
	o65 = new Obstacle(510,365,5,115);
	o66 = new Obstacle(450,480,65,5);
	o67 = new Obstacle(510,285,35,5);
	o68 = new Obstacle(545,115,5,300);
	o69 = new Obstacle(545,465,5,60);
	o70 = new Obstacle(490,75,90,5);
	o71 = new Obstacle(580,75,5,20);
	o72 = new Obstacle(580,145,5,320);
	o73 = new Obstacle(580,510,5,50);
	o74 = new Obstacle(580,95,40,5);
	o75 = new Obstacle(580,230,40,5);
	o76 = new Obstacle(580,510,40,5);
	o77 = new Obstacle(720,35,5,255);
	o78 = new Obstacle(720,35,495,5);
	o79 = new Obstacle(1215,35,5,255);
	o80 = new Obstacle(1215,290,130,5);
	o81 = new Obstacle(720,345,5,255);
	o82 = new Obstacle(720,600,495,5);
	o83 = new Obstacle(1215,330,5,275);
	o84 = new Obstacle(1215,330,130,5);
	o85 = new Obstacle(720,435,40,5);
	o86 = new Obstacle(760,195,5,280);
	o87 = new Obstacle(760,75,5,80);
	o88 = new Obstacle(760,525,5,30);
	o89 = new Obstacle(760,75,100,5);
	o90 = new Obstacle(760,555,75,5);
	o91 = new Obstacle(800,75,5,40);
	o92 = new Obstacle(795,115,35,5);
	o93 = new Obstacle(795,115,5,255);
	o94 = new Obstacle(795,420,5,95);
	o95 = new Obstacle(795,515,170,5);
	o96 = new Obstacle(795,330,35,5);
	o97 = new Obstacle(830,155,5,75);
	o98 = new Obstacle(830,270,5,205);
	o99 = new Obstacle(830,475,45,5);
	o100 = new Obstacle(855,475,5,45);
	o101 = new Obstacle(830,155,285,5);
	o102 = new Obstacle(1110,160,5,45);
	o103 = new Obstacle(865,115,140,5);
	o104 = new Obstacle(1040,115,105,5);
	o105 = new Obstacle(900,75,150,5);
	o106 = new Obstacle(1085,75,95,5);
	o107 = new Obstacle(930,35,5,40);
	o108 = new Obstacle(1100,75,5,40);
	o109 = new Obstacle(1145,115,5,145);
	o110 = new Obstacle(1180,75,5,95);
	o111 = new Obstacle(1180,125,40,5);
	o112 = new Obstacle(965,115,5,40);
	o113 = new Obstacle(885,155,5,40);
	o114 = new Obstacle(865,195,50,5);
	o115 = new Obstacle(950,195,60,5);
	o116 = new Obstacle(1050,195,25,5);
	o117 = new Obstacle(1110,195,35,5);
	o118 = new Obstacle(865,195,5,180);
	o119 = new Obstacle(980,195,5,40);
	o120 = new Obstacle(1075,195,5,245);
	o121 = new Obstacle(900,235,145,5);
	o122 = new Obstacle(900,235,5,60);
	o123 = new Obstacle(1040,235,5,70);
	o124 = new Obstacle(935,270,20,5);
	o125 = new Obstacle(990,270,20,5);
	o126 = new Obstacle(935,270,5,85);
	o127 = new Obstacle(1005,270,5,85);
	o128 = new Obstacle(935,355,20,5);
	o129 = new Obstacle(990,355,20,5);
	o130 = new Obstacle(900,340,35,5);
	o131 = new Obstacle(900,340,5,55);
	o132 = new Obstacle(900,395,140,5);
	o133 = new Obstacle(1040,355,5,85);
	o134 = new Obstacle(1040,440,40,5);
	o135 = new Obstacle(865,420,5,20);
	o136 = new Obstacle(865,440,60,5);
	o137 = new Obstacle(965,440,35,5);
	o138 = new Obstacle(915,475,200,5);
	o139 = new Obstacle(980,440,5,40);
	o140 = new Obstacle(1110,250,5,135);
	o141 = new Obstacle(1110,430,5,45);
	o142 = new Obstacle(1075,320,40,5);
	o143 = new Obstacle(1180,210,5,230);
	o144 = new Obstacle(1145,305,5,210);
	o145 = new Obstacle(1005,515,145,5);
	o146 = new Obstacle(1145,235,40,5);
	o147 = new Obstacle(1145,390,40,5);
	o148 = new Obstacle(930,515,5,40);
	o149 = new Obstacle(870,555,210,5);
	o150 = new Obstacle(980,555,5,45);
	o151 = new Obstacle(1125,555,55,5);
	o152 = new Obstacle(1180,490,5,70);
	o153 = new Obstacle(480,420,35,5);
	o154 = new Obstacle(0,290,5,40);
	o155 = new Obstacle(1345,290,5,45);
    




	


		map.onload = function (){
		setInterval(boucle,20);
	    }

	    function boucle(){

	    if(clavier.w){
	    	musique.play();
	    }
	    if(clavier.x){
	    	musique.pause();
	    }
	    

	    if(clavier.droite){
	    	if(!o12.collision(x+2,y,25,25)&&
	    	   !o13.collision(x+2,y,25,25)&&
	    	   !o15.collision(x+2,y,25,25)&&
	    	   !o16.collision(x+2,y,25,25)&&
	    	   !o18.collision(x+2,y,25,25)&&
	    	   !o17.collision(x+2,y,25,25)&&
	    	   !o5.collision(x+2,y,25,25)&&
	    	   !o9.collision(x+2,y,25,25)&&
	    	   !o21.collision(x+2,y,25,25)&&
	    	   !o23.collision(x+2,y,25,25)&&
	    	   !o24.collision(x+2,y,25,25)&&
	    	   !o25.collision(x+2,y,25,25)&&
	    	   !o26.collision(x+2,y,25,25)&&
	    	   !o27.collision(x+2,y,25,25)&&
	    	   !o28.collision(x+2,y,25,25)&&
	    	   !o29.collision(x+2,y,25,25)&&
	    	   !o30.collision(x+2,y,25,25)&&
	    	   !o32.collision(x+2,y,25,25)&&
	    	   !o34.collision(x+2,y,25,25)&&
	    	   !o36.collision(x+2,y,25,25)&&
	    	   !o37.collision(x+2,y,25,25)&&
	    	   !o38.collision(x+2,y,25,25)&&
	    	   !o39.collision(x+2,y,25,25)&&
	    	   !o40.collision(x+2,y,25,25)&&
	    	   !o41.collision(x+2,y,25,25)&&
	    	   !o42.collision(x+2,y,25,25)&&
	    	   !o43.collision(x+2,y,25,25)&&
	    	   !o44.collision(x+2,y,25,25)&&
	    	   !o45.collision(x+2,y,25,25)&&
	    	   !o47.collision(x+2,y,25,25)&&
	    	   !o48.collision(x+2,y,25,25)&&
	    	   !o49.collision(x+2,y,25,25)&&
	    	   !o50.collision(x+2,y,25,25)&&
	    	   !o51.collision(x+2,y,25,25)&&
	    	   !o52.collision(x+2,y,25,25)&&
	    	   !o53.collision(x+2,y,25,25)&&
	    	   !o54.collision(x+2,y,25,25)&&
	    	   !o55.collision(x+2,y,25,25)&&
	    	   !o56.collision(x+2,y,25,25)&&
	    	   !o57.collision(x+2,y,25,25)&&
	    	   !o58.collision(x+2,y,25,25)&&
	    	   !o59.collision(x+2,y,25,25)&&
	    	   !o60.collision(x+2,y,25,25)&&
	    	   !o61.collision(x+2,y,25,25)&&
	    	   !o62.collision(x+2,y,25,25)&&
	    	   !o63.collision(x+2,y,25,25)&&
	    	   !o64.collision(x+2,y,25,25)&&
	    	   !o65.collision(x+2,y,25,25)&&
	    	   !o66.collision(x+2,y,25,25)&&
	    	   !o68.collision(x+2,y,25,25)&&
	    	   !o69.collision(x+2,y,25,25)&&
	    	   !o70.collision(x+2,y,25,25)&&
	    	   !o71.collision(x+2,y,25,25)&&
	    	   !o72.collision(x+2,y,25,25)&&
	    	   !o73.collision(x+2,y,25,25)&&
	    	   (!pgreen.collision(x+2,y,25,25)|| green==true)&&
	    	   (!pbleuclair.collision(x+2,y,25,25)|| bleuclair==true)&&
	    	   (!pbleufonce.collision(x+2,y,25,25)|| bleufonce==true)&&
	    	   (!pvertclair.collision(x+2,y,25,25)|| vertclair==true)&&
	    	   (!pinv5bis.collision(x+2,y,25,25)|| fake5==false)&&
	    	   (!pinv6bis.collision(x+2,y,25,25)|| fake6==false)&&
	    	    !limiteperso.collision(x+2,y,25,25)){
			
	    	   	x = x+2;
	    		pas++;dir=2;
	    	}

	    		
	    }
	    if(clavier.gauche){
	    	if(!o3.collision(x-2,y,25,25)&&
	    	   !o7.collision(x-2,y,25,25)&&
	    	   !o12.collision(x-2,y,25,25)&&
	    	   !o13.collision(x-2,y,25,25)&&
	    	   !o15.collision(x-2,y,25,25)&&
	    	   !o16.collision(x-2,y,25,25)&&
	    	   !o14.collision(x-2,y,25,25)&&
	    	   !o18.collision(x-2,y,25,25)&&
	    	   !o17.collision(x-2,y,25,25)&&
	    	   !o20.collision(x-2,y,25,25)&&
	    	   !o21.collision(x-2,y,25,25)&&
	    	   !o23.collision(x-2,y,25,25)&&
	    	   !o24.collision(x-2,y,25,25)&&
	    	   !o25.collision(x-2,y,25,25)&&
	    	   !o26.collision(x-2,y,25,25)&&
	    	   !o27.collision(x-2,y,25,25)&&
	    	   !o28.collision(x-2,y,25,25)&&
	    	   !o29.collision(x-2,y,25,25)&&
	    	   !o30.collision(x-2,y,25,25)&&
	    	   !o32.collision(x-2,y,25,25)&&
	    	   !o33.collision(x-2,y,25,25)&&
	    	   !o34.collision(x-2,y,25,25)&&
	    	   !o36.collision(x-2,y,25,25)&&
	    	   !o37.collision(x-2,y,25,25)&&
	    	   !o39.collision(x-2,y,25,25)&&
	    	   !o40.collision(x-2,y,25,25)&&
	    	   !o41.collision(x-2,y,25,25)&&
	    	   !o43.collision(x-2,y,25,25)&&
	    	   !o44.collision(x-2,y,25,25)&&
	    	   !o45.collision(x-2,y,25,25)&&
	    	   !o47.collision(x-2,y,25,25)&&
	    	   !o48.collision(x-2,y,25,25)&&
	    	   !o49.collision(x-2,y,25,25)&&
	    	   !o50.collision(x-2,y,25,25)&&
	    	   !o51.collision(x-2,y,25,25)&&
	    	   !o52.collision(x-2,y,25,25)&&
	    	   !o53.collision(x-2,y,25,25)&&
	    	   !o54.collision(x-2,y,25,25)&&
	    	   !o55.collision(x-2,y,25,25)&&
	    	   !o56.collision(x-2,y,25,25)&&
	    	   !o57.collision(x-2,y,25,25)&&
	    	   !o58.collision(x-2,y,25,25)&&
	    	   !o59.collision(x-2,y,25,25)&&
	    	   !o60.collision(x-2,y,25,25)&&
	    	   !o61.collision(x-2,y,25,25)&&
	    	   !o62.collision(x-2,y,25,25)&&
	    	   !o63.collision(x-2,y,25,25)&&
	    	   !o64.collision(x-2,y,25,25)&&
	    	   !o65.collision(x-2,y,25,25)&&
	    	   !o66.collision(x-2,y,25,25)&&
	    	   !o68.collision(x-2,y,25,25)&&
	    	   !o69.collision(x-2,y,25,25)&&
	    	   !o70.collision(x-2,y,25,25)&&
	    	   !o71.collision(x-2,y,25,25)&&
	    	   !o72.collision(x-2,y,25,25)&&
	    	   !o73.collision(x-2,y,25,25)&&
	    	   !o154.collision(x-2,y,25,25)&&
	    	   (!pinv5bis.collision(x-2,y,25,25)|| fake5==false)&&
	    	   (!pinv6bis.collision(x-2,y,25,25)|| fake6==false)){

	    		x = x-2;
	    		pas++;dir=1;
	    	}
	    	
	    }
	    if(clavier.haut){
	    	if(!o1.collision(x,y-2,25,25)&&
	    	   !o4.collision(x,y-2,25,25)&&
	    	   !o11.collision(x,y-2,25,25)&&
	    	   !o12.collision(x,y-2,25,25)&&
	    	   !o13.collision(x,y-2,25,25)&&
	    	   !o15.collision(x,y-2,25,25)&&
	    	   !o19.collision(x,y-2,25,25)&&
	    	   !o16.collision(x,y-2,25,25)&&
	    	   !o14.collision(x,y-2,25,25)&&
	    	   !o17.collision(x,y-2,25,25)&&
	    	   !o20.collision(x,y-2,25,25)&&
	    	   !o6.collision(x,y-2,25,25)&&
	    	   !o21.collision(x,y-2,25,25)&&
	    	   !o22.collision(x,y-2,25,25)&&
	    	   !o23.collision(x,y-2,25,25)&&
	    	   !o24.collision(x,y-2,25,25)&&
	    	   !o26.collision(x,y-2,25,25)&&
	    	   !o27.collision(x,y-2,25,25)&&
	    	   !o29.collision(x,y-2,25,25)&&
	    	   !o31.collision(x,y-2,25,25)&&
	    	   !o33.collision(x,y-2,25,25)&&
	    	   !o34.collision(x,y-2,25,25)&&
	    	   !o35.collision(x,y-2,25,25)&&
	    	   !o38.collision(x,y-2,25,25)&&
	    	   !o42.collision(x,y-2,25,25)&&
	    	   !o43.collision(x,y-2,25,25)&&
	    	   !o46.collision(x,y-2,25,25)&&
	    	   !o47.collision(x,y-2,25,25)&&
	    	   !o49.collision(x,y-2,25,25)&&
	    	   !o52.collision(x,y-2,25,25)&&
	    	   !o53.collision(x,y-2,25,25)&&
	    	   !o54.collision(x,y-2,25,25)&&
	    	   !o56.collision(x,y-2,25,25)&&
	    	   !o58.collision(x,y-2,25,25)&&
	    	   !o59.collision(x,y-2,25,25)&&
	    	   !o60.collision(x,y-2,25,25)&&
	    	   !o61.collision(x,y-2,25,25)&&
	    	   !o62.collision(x,y-2,25,25)&&
	    	   !o63.collision(x,y-2,25,25)&&
	    	   !o64.collision(x,y-2,25,25)&&
	    	   !o65.collision(x,y-2,25,25)&&
	    	   !o67.collision(x,y-2,25,25)&&
	    	   !o68.collision(x,y-2,25,25)&&
	    	   !o69.collision(x,y-2,25,25)&&
	    	   !o70.collision(x,y-2,25,25)&&
	    	   !o72.collision(x,y-2,25,25)&&
	    	   !o74.collision(x,y-2,25,25)&&
	    	   !o75.collision(x,y-2,25,25)&&
	    	   !o76.collision(x,y-2,25,25)&&
	    	   !o153.collision(x,y-2,25,25)&&
	    	   (!pyellow.collision(x,y-2,25,25)|| yellow==true)){
	    		y = y-2;
	    		pas++;dir=3;	
	    	}
	    	
	    	
	    }
	    if(clavier.bas){
	    	if(!o2.collision(x,y+2,25,25)&&
	    	   !o8.collision(x,y+2,25,25)&&
	    	   !o11.collision(x,y+2,25,25)&&
	    	   !o12.collision(x,y+2,25,25)&&
	    	   !o13.collision(x,y+2,25,25)&&
	    	   !o15.collision(x,y+2,25,25)&&
	    	   !o19.collision(x,y+2,25,25)&&
	    	   !o16.collision(x,y+2,25,25)&&
	    	   !o14.collision(x,y+2,25,25)&&
	    	   !o18.collision(x,y+2,25,25)&&
	    	   !o20.collision(x,y+2,25,25)&&
	    	   !o10.collision(x,y+2,25,25)&&
	    	   !o21.collision(x,y+2,25,25)&&
	    	   !o22.collision(x,y+2,25,25)&&
	    	   !o23.collision(x,y+2,25,25)&&
	    	   !o24.collision(x,y+2,25,25)&&
	    	   !o25.collision(x,y+2,25,25)&&
	    	   !o26.collision(x,y+2,25,25)&&
	    	   !o27.collision(x,y+2,25,25)&&
	    	   !o29.collision(x,y+2,25,25)&&
	    	   !o31.collision(x,y+2,25,25)&&
	    	   !o32.collision(x,y+2,25,25)&&
	    	   !o33.collision(x,y+2,25,25)&&
	    	   !o34.collision(x,y+2,25,25)&&
	    	   !o35.collision(x,y+2,25,25)&&
	    	   !o38.collision(x,y+2,25,25)&&
	    	   !o42.collision(x,y+2,25,25)&&
	    	   !o43.collision(x,y+2,25,25)&&
	    	   !o45.collision(x,y+2,25,25)&&
	    	   !o46.collision(x,y+2,25,25)&&
	    	   !o47.collision(x,y+2,25,25)&&
	    	   !o49.collision(x,y+2,25,25)&&
	    	   !o52.collision(x,y+2,25,25)&&
	    	   !o54.collision(x,y+2,25,25)&&
	    	   !o56.collision(x,y+2,25,25)&&
	    	   !o57.collision(x,y+2,25,25)&&
	    	   !o58.collision(x,y+2,25,25)&&
	    	   !o60.collision(x,y+2,25,25)&&
	    	   !o61.collision(x,y+2,25,25)&&
	    	   !o62.collision(x,y+2,25,25)&&
	    	   !o63.collision(x,y+2,25,25)&&
	    	   !o64.collision(x,y+2,25,25)&&
	    	   !o65.collision(x,y+2,25,25)&&
	    	   !o67.collision(x,y+2,25,25)&&
	    	   !o68.collision(x,y+2,25,25)&&
	    	   !o69.collision(x,y+2,25,25)&&
	    	   !o70.collision(x,y+2,25,25)&&
	    	   !o72.collision(x,y+2,25,25)&&
	    	   !o74.collision(x,y+2,25,25)&&
	    	   !o75.collision(x,y+2,25,25)&&
	    	   !o76.collision(x,y+2,25,25)&&
	    	   !o153.collision(x,y+2,25,25)){
	    		y = y+2
	    		pas++;dir=0;}
	    	
	    }
	    if(clavier.d){
	    	if(!o79.collision(w+2,z,25,25)&&
	    	   !o83.collision(w+2,z,25,25)&&
	    	   !o86.collision(w+2,z,25,25)&&
	    	   !o87.collision(w+2,z,25,25)&&
	    	   !o88.collision(w+2,z,25,25)&&
	    	   !o89.collision(w+2,z,25,25)&&
	    	   !o90.collision(w+2,z,25,25)&&
	    	   !o91.collision(w+2,z,25,25)&&
	    	   !o92.collision(w+2,z,25,25)&&
	    	   !o93.collision(w+2,z,25,25)&&
	    	   !o94.collision(w+2,z,25,25)&&
	    	   !o95.collision(w+2,z,25,25)&&
	    	   !o97.collision(w+2,z,25,25)&&
	    	   !o98.collision(w+2,z,25,25)&&
	    	   !o99.collision(w+2,z,25,25)&&
	    	   !o100.collision(w+2,z,25,25)&&
	    	   !o101.collision(w+2,z,25,25)&&
	    	   !o102.collision(w+2,z,25,25)&&
	    	   !o103.collision(w+2,z,25,25)&&
	    	   !o104.collision(w+2,z,25,25)&&
	    	   !o105.collision(w+2,z,25,25)&&
	    	   !o106.collision(w+2,z,25,25)&&
	    	   !o107.collision(w+2,z,25,25)&&
	    	   !o108.collision(w+2,z,25,25)&&
	    	   !o109.collision(w+2,z,25,25)&&
	    	   !o110.collision(w+2,z,25,25)&&
	    	   !o112.collision(w+2,z,25,25)&&
	    	   !o113.collision(w+2,z,25,25)&&
	    	   !o114.collision(w+2,z,25,25)&&
	    	   !o115.collision(w+2,z,25,25)&&
	    	   !o116.collision(w+2,z,25,25)&&
	    	   !o118.collision(w+2,z,25,25)&&
	    	   !o119.collision(w+2,z,25,25)&&
	    	   !o120.collision(w+2,z,25,25)&&
	    	   !o121.collision(w+2,z,25,25)&&
	    	   !o122.collision(w+2,z,25,25)&&
	    	   !o123.collision(w+2,z,25,25)&&
	    	   !o124.collision(w+2,z,25,25)&&
	    	   !o125.collision(w+2,z,25,25)&&
	    	   !o126.collision(w+2,z,25,25)&&
	    	   !o127.collision(w+2,z,25,25)&&
	    	   !o128.collision(w+2,z,25,25)&&
	    	   !o129.collision(w+2,z,25,25)&&
	    	   !o130.collision(w+2,z,25,25)&&
	    	   !o131.collision(w+2,z,25,25)&&
	    	   !o132.collision(w+2,z,25,25)&&
	    	   !o133.collision(w+2,z,25,25)&&
	    	   !o134.collision(w+2,z,25,25)&&
	    	   !o135.collision(w+2,z,25,25)&&
	    	   !o136.collision(w+2,z,25,25)&&
	    	   !o137.collision(w+2,z,25,25)&&
	    	   !o138.collision(w+2,z,25,25)&&
	    	   !o139.collision(w+2,z,25,25)&&
	    	   !o140.collision(w+2,z,25,25)&&
	    	   !o141.collision(w+2,z,25,25)&&
	    	   !o143.collision(w+2,z,25,25)&&
	    	   !o144.collision(w+2,z,25,25)&&
	    	   !o145.collision(w+2,z,25,25)&&
	    	   !o148.collision(w+2,z,25,25)&&
	    	   !o149.collision(w+2,z,25,25)&&
	    	   !o150.collision(w+2,z,25,25)&&
	    	   !o151.collision(w+2,z,25,25)&&
	    	   !o152.collision(w+2,z,25,25)&&
	    	   !o155.collision(w+2,z,25,25)&&
	    	   (!pinvbis.collision(w+2,z,25,25)|| fake==false)&&
	    	   (!pinv1bis.collision(w+2,z,25,25)|| fake1==false)&&
	    	   (!pinv2bis.collision(w+2,z,25,25)|| fake2==false)&&
	    	   (!pinv4bis.collision(w+2,z,25,25)|| fake4==false)){

	    		w = w+2;
	    		mv++;sens=2;
	    	}
	    	
	    }
	    if(clavier.q){
	    	if(!o77.collision(w-2,z,25,25)&&
	    	   !o81.collision(w-2,z,25,25)&&
	    	   !o86.collision(w-2,z,25,25)&&
	           !o87.collision(w-2,z,25,25)&&
	    	   !o88.collision(w-2,z,25,25)&&
	    	   !o89.collision(w-2,z,25,25)&&
	    	   !o90.collision(w-2,z,25,25)&&
	    	   !o91.collision(w-2,z,25,25)&&
	    	   !o92.collision(w-2,z,25,25)&&
	    	   !o93.collision(w-2,z,25,25)&&
	    	   !o94.collision(w-2,z,25,25)&&
	    	   !o95.collision(w-2,z,25,25)&&
	    	   !o97.collision(w-2,z,25,25)&&
	    	   !o98.collision(w-2,z,25,25)&&
	    	   !o99.collision(w-2,z,25,25)&&
	    	   !o100.collision(w-2,z,25,25)&&
	    	   !o101.collision(w-2,z,25,25)&&
	    	   !o102.collision(w-2,z,25,25)&&
	    	   !o103.collision(w-2,z,25,25)&&
	    	   !o104.collision(w-2,z,25,25)&&
	    	   !o105.collision(w-2,z,25,25)&&
	    	   !o106.collision(w-2,z,25,25)&&
	    	   !o107.collision(w-2,z,25,25)&&
	    	   !o108.collision(w-2,z,25,25)&&
	    	   !o109.collision(w-2,z,25,25)&&
	    	   !o110.collision(w-2,z,25,25)&&
	    	   !o112.collision(w-2,z,25,25)&&
	    	   !o113.collision(w-2,z,25,25)&&
	    	   !o114.collision(w-2,z,25,25)&&
	    	   !o115.collision(w-2,z,25,25)&&
	    	   !o116.collision(w-2,z,25,25)&&
	    	   !o118.collision(w-2,z,25,25)&&
	    	   !o119.collision(w-2,z,25,25)&&
	    	   !o120.collision(w-2,z,25,25)&&
	    	   !o121.collision(w-2,z,25,25)&&
	    	   !o122.collision(w-2,z,25,25)&&
	    	   !o123.collision(w-2,z,25,25)&&
	    	   !o124.collision(w-2,z,25,25)&&
	    	   !o125.collision(w-2,z,25,25)&&
	    	   !o126.collision(w-2,z,25,25)&&
	    	   !o127.collision(w-2,z,25,25)&&
	    	   !o128.collision(w-2,z,25,25)&&
	    	   !o129.collision(w-2,z,25,25)&&
	    	   !o130.collision(w-2,z,25,25)&&
	    	   !o131.collision(w-2,z,25,25)&&
	    	   !o132.collision(w-2,z,25,25)&&
	    	   !o133.collision(w-2,z,25,25)&&
	    	   !o134.collision(w-2,z,25,25)&&
	    	   !o135.collision(w-2,z,25,25)&&
	    	   !o136.collision(w-2,z,25,25)&&
	    	   !o137.collision(w-2,z,25,25)&&
	    	   !o138.collision(w-2,z,25,25)&&
	    	   !o139.collision(w-2,z,25,25)&&
	    	   !o140.collision(w-2,z,25,25)&&
	    	   !o141.collision(w-2,z,25,25)&&
	           !o143.collision(w-2,z,25,25)&&
	           !o144.collision(w-2,z,25,25)&&
	           !o145.collision(w-2,z,25,25)&&
	    	   !o148.collision(w-2,z,25,25)&&
	    	   !o149.collision(w-2,z,25,25)&&
	    	   !o150.collision(w-2,z,25,25)&&
	    	   !o151.collision(w-2,z,25,25)&&
	    	   !o152.collision(w-2,z,25,25)&&
	    	   (!pgrey.collision(w-2,z,25,25)|| grey==true)&&
	    	   (!pred.collision(w-2,z,25,25)|| red==true)&&
	    	   (!ppurple.collision(w-2,z,25,25)|| purple==true)&&
	    	   (!pretourbloque.collision(w-2,z,25,25)||retourbloque==false)&&
	    	   (!pmarronclair.collision(w-2,z,25,25)|| marronclair==true)&&
	    	   (!pinvbis.collision(w-2,z,25,25)|| fake==false)&&
	    	   (!pinv1bis.collision(w-2,z,25,25)|| fake1==false)&&
	    	   (!pinv2bis.collision(w-2,z,25,25)|| fake2==false)&&
	    	   (!pinv4bis.collision(w-2,z,25,25)|| fake4==false)&&
	    	    !limiteperso2.collision(w-2,z,25,25)){

	    		w = w-2;
	    		mv++;sens=1;
	    	}

	    	
	    }
	    if(clavier.z){
	    	if(!o6.collision(w,z-2,25,25)&&
	    	   !o77.collision(w,z-2,25,25)&&
	    	   !o78.collision(w,z-2,25,25)&&
	    	   !o80.collision(w,z-2,25,25)&&
	    	   !o85.collision(w,z-2,25,25)&&
	    	   !o86.collision(w,z-2,25,25)&&
	    	   !o87.collision(w,z-2,25,25)&&
	    	   !o88.collision(w,z-2,25,25)&&
	    	   !o89.collision(w,z-2,25,25)&&
	    	   !o90.collision(w,z-2,25,25)&&
	    	   !o92.collision(w,z-2,25,25)&&
	    	   !o93.collision(w,z-2,25,25)&&
	    	   !o94.collision(w,z-2,25,25)&&
	    	   !o95.collision(w,z-2,25,25)&&
	    	   !o96.collision(w,z-2,25,25)&&
	    	   !o97.collision(w,z-2,25,25)&&
	    	   !o98.collision(w,z-2,25,25)&&
	    	   !o99.collision(w,z-2,25,25)&&
	    	   !o101.collision(w,z-2,25,25)&&
	    	   !o102.collision(w,z-2,25,25)&&
	    	   !o103.collision(w,z-2,25,25)&&
	    	   !o104.collision(w,z-2,25,25)&&
	    	   !o105.collision(w,z-2,25,25)&&
	    	   !o106.collision(w,z-2,25,25)&&
	    	   !o109.collision(w,z-2,25,25)&&
	    	   !o110.collision(w,z-2,25,25)&&
	    	   !o111.collision(w,z-2,25,25)&&
	    	   !o114.collision(w,z-2,25,25)&&
	    	   !o115.collision(w,z-2,25,25)&&
	    	   !o116.collision(w,z-2,25,25)&&
	    	   !o117.collision(w,z-2,25,25)&&
	    	   !o118.collision(w,z-2,25,25)&&
	    	   !o120.collision(w,z-2,25,25)&&
	    	   !o121.collision(w,z-2,25,25)&&
	    	   !o122.collision(w,z-2,25,25)&&
	    	   !o123.collision(w,z-2,25,25)&&
	    	   !o124.collision(w,z-2,25,25)&&
	    	   !o125.collision(w,z-2,25,25)&&
	    	   !o126.collision(w,z-2,25,25)&&
	    	   !o127.collision(w,z-2,25,25)&&
	    	   !o128.collision(w,z-2,25,25)&&
	    	   !o129.collision(w,z-2,25,25)&&
	    	   !o130.collision(w,z-2,25,25)&&
	    	   !o131.collision(w,z-2,25,25)&&
	    	   !o132.collision(w,z-2,25,25)&&
	    	   !o133.collision(w,z-2,25,25)&&
	    	   !o134.collision(w,z-2,25,25)&&
	    	   !o135.collision(w,z-2,25,25)&&
	    	   !o136.collision(w,z-2,25,25)&&
	    	   !o137.collision(w,z-2,25,25)&&
	    	   !o138.collision(w,z-2,25,25)&&
	    	   !o140.collision(w,z-2,25,25)&&
	    	   !o141.collision(w,z-2,25,25)&&
	    	   !o142.collision(w,z-2,25,25)&&
	    	   !o143.collision(w,z-2,25,25)&&
	    	   !o144.collision(w,z-2,25,25)&&
	    	   !o145.collision(w,z-2,25,25)&&
	    	   !o146.collision(w,z-2,25,25)&&
	    	   !o147.collision(w,z-2,25,25)&&
	    	   !o149.collision(w,z-2,25,25)&&
	    	   !o150.collision(w,z-2,25,25)&&
	    	   !o151.collision(w,z-2,25,25)&&
	    	   (!ppink.collision(w,z-2)|| pink==true)&&
	    	   (!pinv1bis.collision(w,z-2,25,25)|| fake1==false)&&
	    	   (!pinv3bis.collision(w,z-2,25,25)|| fake3==false)&&
	    	   (!pinv7bis.collision(w,z-2,25,25)|| fake7==false)){
	    		z = z-2;
	    		mv++;sens=3;
	    	}
	    	
	    }
	    if(clavier.s){
	    	if(!o10.collision(w,z+2,25,25)&&
	    		!o82.collision(w,z+2,25,25)&&
	    		!o84.collision(w,z+2,25,25)&&
	    		!o85.collision(w,z+2,25,25)&&
	    		!o86.collision(w,z+2,25,25)&&
	    		!o87.collision(w,z+2,25,25)&&
	    		!o88.collision(w,z+2,25,25)&&
	    		!o89.collision(w,z+2,25,25)&&
	    		!o90.collision(w,z+2,25,25)&&
	    		!o92.collision(w,z+2,25,25)&&
	    		!o93.collision(w,z+2,25,25)&&
	    		!o94.collision(w,z+2,25,25)&&
	    		!o95.collision(w,z+2,25,25)&&
	    		!o96.collision(w,z+2,25,25)&&
	    		!o97.collision(w,z+2,25,25)&&
	    		!o98.collision(w,z+2,25,25)&&
	    		!o99.collision(w,z+2,25,25)&&
	    		!o101.collision(w,z+2,25,25)&&
	    		!o102.collision(w,z+2,25,25)&&
	    		!o103.collision(w,z+2,25,25)&&
	    		!o104.collision(w,z+2,25,25)&&
	    		!o105.collision(w,z+2,25,25)&&
	    		!o106.collision(w,z+2,25,25)&&
	    		!o109.collision(w,z+2,25,25)&&
	    		!o110.collision(w,z+2,25,25)&&
                !o111.collision(w,z+2,25,25)&&
                !o114.collision(w,z+2,25,25)&&
                !o115.collision(w,z+2,25,25)&&
                !o116.collision(w,z+2,25,25)&&
                !o117.collision(w,z+2,25,25)&&
                !o118.collision(w,z+2,25,25)&&
                !o120.collision(w,z+2,25,25)&&
                !o121.collision(w,z+2,25,25)&&
                !o122.collision(w,z+2,25,25)&&
                !o123.collision(w,z+2,25,25)&&
                !o124.collision(w,z+2,25,25)&&
                !o125.collision(w,z+2,25,25)&&
                !o126.collision(w,z+2,25,25)&&
                !o127.collision(w,z+2,25,25)&&
                !o128.collision(w,z+2,25,25)&&
                !o129.collision(w,z+2,25,25)&&
                !o130.collision(w,z+2,25,25)&&
                !o131.collision(w,z+2,25,25)&&
                !o132.collision(w,z+2,25,25)&&
                !o133.collision(w,z+2,25,25)&&
                !o134.collision(w,z+2,25,25)&&
                !o135.collision(w,z+2,25,25)&&
                !o136.collision(w,z+2,25,25)&&
                !o137.collision(w,z+2,25,25)&&
                !o138.collision(w,z+2,25,25)&&
                !o140.collision(w,z+2,25,25)&&
                !o141.collision(w,z+2,25,25)&&
                !o142.collision(w,z+2,25,25)&&
	    	    !o143.collision(w,z+2,25,25)&&
	    	    !o144.collision(w,z+2,25,25)&&
	    	    !o145.collision(w,z+2,25,25)&&
	    	    !o146.collision(w,z+2,25,25)&&
	    	    !o147.collision(w,z+2,25,25)&&
	    	    !o149.collision(w,z+2,25,25)&&
	    	    !o151.collision(w,z+2,25,25)&&
	    	    !o152.collision(w,z+2,25,25)&&
	    	    (!pinv1bis.collision(w,z+2,25,25)|| fake1==false)&&
	    	    (!pinv3bis.collision(w,z+2,25,25)|| fake3==false)&&
	    	    (!pinv7bis.collision(w,z+2,25,25)|| fake7==false)){
	    		z = z+2;
	    		mv++;sens=0;
	    	}


	    	
	    }
	   

	    if(pas>=4){
			pas=0
		}
		if(mv>=4){
			mv=0;
		}


		//collisions avec les boutons
		if(btngreen.collision(w,z,25,25)&&green==false){
			green = true
			sonporte.play();
		}
		if(btnpink.collision(x,y,25,25)&&pink==false){
			pink = true
			sonporte.play();
		}
		if(btnyellow.collision(w,z,25,25)&&yellow==false){
			yellow = true;
			sonporte.play();
		}
		if(btngrey.collision(x,y,25,25)&&grey==false){
			grey = true
			sonporte.play();
		}
		if(btnbleuclair.collision(w,z,25,25)&&bleuclair==false){
			bleuclair = true
			sonporte.play();
		}
		if(btnred.collision(x,y,25,25)&&red==false){
			red = true
			sonporte.play();
		}
		if(btnpurple.collision(x,y,25,25)&&purple==false){
			purple = true
			sonporte.play();
		}
		if(btnbleufonce.collision(w,z,25,25)&&bleufonce==false){
			bleufonce = true;
			sonporte.play();
		}
		if(btnmarronclair.collision(x,y,25,25)&&marronclair==false){
			marronclair = true;
			sonporte.play();
		}
		if(btnvertclair.collision(w,z,25,25)&&vertclair==false){
			vertclair = true;
			sonporte.play();
		}
		if(desactivation==false){
			if(retourbloqueinv.collision(w,z,25,25)){
			retourbloque = true;
			desactivation = true;
			
		}
		
		}
		if(btnorange.collision(x,y,25,25)&&retourbloque==true){
			retourbloque = false;
			sonporte.play();
		}

		//collision avec les portes invisible qui ferme les passges du labirynthe
		if(pinv.collision(w,z,25,25)){
			fake = true;
		}
		if(pinv1.collision(w,z,25,25)){
			fake1 = true;
		}
		if(pinv2.collision(w,z,25,25)){
			fake2 = true;
		}
		if(pinv3.collision(w,z,25,25)){
			fake3 = true;
		}
		if(pinv4.collision(w,z,25,25)){
			fake4 = true
		}
		if(pinv5.collision(x,y,25,25)){
			fake5 = true;
		}
		if(pinv6.collision(x,y,25,25)){
			fake6 = true
		}
		
		if(pinv7.collision(w,z,25,25)){
			fake7 = true
		}





		ctx.drawImage(map,0,0,1350,635);
		ctx.drawImage(trophee,645,290,50,55);

	    ctx.fillStyle ="#1000CE"
	    ctx.fillRect(1185,110,15,15)
	    if(bleufonce==false){
	    	ctx.fillRect(510,320,5,45)
	    }
	    
	    

	    ctx.fillStyle = "black"
	    if(fake==true){
	    	ctx.fillRect(1180,440,5,50);
	    }

	    

	    ctx.fillStyle = "black"
	    if(fake1==true){
	    	ctx.fillRect(930,475,5,40)
	    }

	    

	    ctx.fillStyle = "black"
	    if(fake2==true){
	    	ctx.fillRect(1040,440,5,40)
	    }

	    ctx.fillStyle = "black"
	    if(fake3==true){
	    	ctx.fillRect(950,270,40,5)
	    }

	    ctx.fillStyle = "black"
	    if(fake4==true){
	    	ctx.fillRect(995,235,5,35)
	    }

	    ctx.fillStyle = "black"
	    if(fake5==true){
	    	ctx.fillRect(225,400,5,40)
	    }

	    
	    ctx.fillStyle = "black"
	    if(fake6==true){
	    	ctx.fillRect(385,440,5,40)
		}

		
		ctx.fillStyle ="black"
		if(fake7==true){
			ctx.fillRect(830,440,35,5)
		}
		
	    
		//disparition des portes
		ctx.fillStyle ="green";	
		ctx.fillRect(1105,80,15,15);
		if(green==false){
			ctx.fillRect(155,470,5,50);
		}

		ctx.fillStyle = "pink";
		ctx.fillRect(585,515,15,15)
		if(pink==false){
			ctx.fillRect(1080,555,45,5)
		}

		ctx.fillStyle ="yellow"
		ctx.fillRect(1165,240,15,15);
		if(yellow==false){
			ctx.fillRect(195,435,35,5);
		}

		ctx.fillStyle = "grey"
		ctx.fillRect(405,40,15,15)
		if(grey==false){
			ctx.fillRect(1050,155,5,40)
		}

		ctx.fillStyle ="#00fff0"
		ctx.fillRect(965,305,15,15)
		if(bleuclair==false){
			ctx.fillRect(225,215,5,40)
		}

		ctx.fillStyle ="red"
		ctx.fillRect(530,120,15,15)
		if(red==false){
			ctx.fillRect(865,375,5,45)
		}

		ctx.fillStyle ="purple"
		ctx.fillRect(230,465,15,15)
		if(purple==false){
			ctx.fillRect(830,230,5,40)
		}
	    
	    ctx.fillStyle ="orange"
	    ctx.fillRect(390,280,15,15)
	    if(retourbloque==true){
	    	ctx.fillRect(965,75,5,40)
	    }

	    ctx.fillStyle ="#855151"
	    ctx.fillRect(600,215,15,15)
	    if(marronclair==false){
	    	ctx.fillRect(770,35,5,40)
	    }

	    ctx.fillStyle ="#A2FF00"
	    ctx.fillRect(965,560,15,15)
	    if(vertclair==false){
	    	ctx.fillRect(580,465,5,45)
	    }

	    
		ctx.drawImage(perso,pas*40,dir*40,40,40,x,y,25,25);
		ctx.drawImage(perso2,mv*65,sens*65,65,65,w,z,25,25);

		
		ctx.fillStyle = "black"
		ctx.fillRect(0,290,115,5)//1
		ctx.fillRect(0,330,115,5)//2
		ctx.fillRect(115,35,5,260)//3
		ctx.fillRect(120,35,500,5)//4
		ctx.fillRect(615,35,5,250)//5
		ctx.fillRect(615,285,105,5)//6
		ctx.fillRect(115,330,5,270)//7
		ctx.fillRect(115,600,500,5)//8
		ctx.fillRect(615,345,5,260)//9
		ctx.fillRect(615,345,105,5)//10
		ctx.fillRect(120,180,35,5)//11
		ctx.fillRect(155,160,5,310)//12
		ctx.fillRect(155,75,5,40)//13
		ctx.fillRect(155,75,285,5)//14
		ctx.fillRect(155,520,5,40)//15
		ctx.fillRect(155,560,245,5)//16
		ctx.fillRect(190,115,5,185)//17
		ctx.fillRect(190,340,5,180)//18
		ctx.fillRect(160,430,35,5)//19
		ctx.fillRect(190,115,50,5)//20
		ctx.fillRect(190,520,95,5)//21
		ctx.fillRect(195,270,35,5)//22
		ctx.fillRect(225,255,5,145)//23
		ctx.fillRect(225,155,5,60)//24
		ctx.fillRect(225,435,5,45)//25
		ctx.fillRect(225,480,180,5)//26
		ctx.fillRect(225,155,155,5)//27
		ctx.fillRect(290,440,5,45)//28
		ctx.fillRect(260,440,45,5)//29
		ctx.fillRect(260,340,5,100)//30
		ctx.fillRect(260,340,40,5)//31
		ctx.fillRect(295,235,5,110)//32
		ctx.fillRect(300,235,20,5)//33
		ctx.fillRect(260,195,5,100)//34
		ctx.fillRect(265,195,210,5)//35
		ctx.fillRect(260,560,5,45)//36
		ctx.fillRect(320,115,5,45)//37
		ctx.fillRect(290,115,255,5)//38
		ctx.fillRect(390,75,5,45)//39
		ctx.fillRect(420,35,5,45)//40
		ctx.fillRect(385,480,5,40)//41
		ctx.fillRect(325,520,220,5)//42
		ctx.fillRect(445,560,140,5)//43
		ctx.fillRect(500,520,5,45)//44
		ctx.fillRect(295,380,5,20)//45
		ctx.fillRect(295,395,55,5)//46
		ctx.fillRect(360,235,80,5)//47
		ctx.fillRect(390,235,5,40)//48
		ctx.fillRect(330,275,80,5)//49
		ctx.fillRect(330,275,5,80)//50
		ctx.fillRect(405,275,5,80)//51
		ctx.fillRect(330,355,20,5)//52
		ctx.fillRect(350,355,5,45)//53
		ctx.fillRect(385,355,25,5)//54
		ctx.fillRect(385,355,5,40)//55
		ctx.fillRect(385,395,50,5)//56
		ctx.fillRect(435,380,5,20)//57
		ctx.fillRect(475,195,5,245)//58
		ctx.fillRect(440,235,5,100)//59
		ctx.fillRect(340,440,140,5)//60
		ctx.fillRect(430,155,80,5)//61
		ctx.fillRect(450,155,5,45)//62
		ctx.fillRect(510,155,5,55)//63
		ctx.fillRect(510,255,5,65)//64
		ctx.fillRect(510,365,5,115)//65
		ctx.fillRect(450,480,65,5)//66
		ctx.fillRect(510,285,35,5)//67
		ctx.fillRect(545,115,5,300)//68
		ctx.fillRect(545,465,5,60)//69
		ctx.fillRect(490,75,90,5)//70
		ctx.fillRect(580,75,5,20)//71
		ctx.fillRect(580,145,5,320)//72
		ctx.fillRect(580,510,5,50)//73
		ctx.fillRect(580,95,40,5)//74
		ctx.fillRect(580,230,40,5)//75
		ctx.fillRect(580,510,40,5)//76
		ctx.fillRect(720,35,5,255)//77
		ctx.fillRect(720,35,495,5)//78
		ctx.fillRect(1215,35,5,255)//79
		ctx.fillRect(1215,290,130,5)//80
		ctx.fillRect(720,345,5,255)//81
		ctx.fillRect(720,600,495,5)//82
		ctx.fillRect(1215,330,5,275)//83
		ctx.fillRect(1215,330,130,5)//84
		ctx.fillRect(720,435,40,5)//85
		ctx.fillRect(760,195,5,280)//86
		ctx.fillRect(760,75,5,80)//87
		ctx.fillRect(760,525,5,30)//88
		ctx.fillRect(760,75,100,5)//89
		ctx.fillRect(760,555,75,5)//90
		ctx.fillRect(800,75,5,40)//91
		ctx.fillRect(795,115,35,5)//92
		ctx.fillRect(795,115,5,255)//93
		ctx.fillRect(795,420,5,95)//94
		ctx.fillRect(795,515,170,5)//95
		ctx.fillRect(795,330,35,5)//96
		ctx.fillRect(830,155,5,75)//97
		ctx.fillRect(830,270,5,205)//98
		ctx.fillRect(830,475,45,5)//99
		ctx.fillRect(855,475,5,45)//100
		ctx.fillRect(830,155,285,5)//101
		ctx.fillRect(1110,160,5,45)//102
		ctx.fillRect(865,115,140,5)//103
		ctx.fillRect(1040,115,105,5)//104
		ctx.fillRect(900,75,150,5)//105
		ctx.fillRect(1085,75,95,5)//106
		ctx.fillRect(930,35,5,40)//107
		ctx.fillRect(1100,75,5,40)//108
		ctx.fillRect(1145,115,5,145)//109
		ctx.fillRect(1180,75,5,95)//110
		ctx.fillRect(1180,125,40,5)//111
		ctx.fillRect(965,115,5,40)//112
		ctx.fillRect(885,155,5,40)//113
		ctx.fillRect(865,195,50,5)//114
		ctx.fillRect(950,195,60,5)//115
		ctx.fillRect(1050,195,25,5)//116
		ctx.fillRect(1110,195,35,5)//117
		ctx.fillRect(865,195,5,180)//118
		ctx.fillRect(980,195,5,40)//119
		ctx.fillRect(1075,195,5,245)//120
		ctx.fillRect(900,235,145,5)//121
		ctx.fillRect(900,235,5,60)//122
		ctx.fillRect(1040,235,5,70)//123
		ctx.fillRect(935,270,20,5)//124
		ctx.fillRect(990,270,20,5)//125
		ctx.fillRect(935,270,5,85)//126
		ctx.fillRect(1005,270,5,85)//127
		ctx.fillRect(935,355,20,5)//128
		ctx.fillRect(990,355,20,5)//129
		ctx.fillRect(900,340,35,5)//130
		ctx.fillRect(900,340,5,55)//131
		ctx.fillRect(900,395,140,5)//132
		ctx.fillRect(1040,355,5,85)//133
		ctx.fillRect(1040,440,40,5)//134
		ctx.fillRect(865,420,5,20)//135
		ctx.fillRect(865,440,60,5)//136
		ctx.fillRect(965,440,35,5)//137
		ctx.fillRect(915,475,200,5)//138
		ctx.fillRect(980,440,5,40)//139
		ctx.fillRect(1110,250,5,135)//140
		ctx.fillRect(1110,430,5,45)//141
		ctx.fillRect(1075,320,40,5)//142
		ctx.fillRect(1180,210,5,230)//143
		ctx.fillRect(1145,305,5,210)//144
		ctx.fillRect(1005,515,145,5)//145
		ctx.fillRect(1145,235,40,5)//146
		ctx.fillRect(1145,390,40,5)//147
		ctx.fillRect(930,515,5,40)//148
		ctx.fillRect(870,555,210,5)//149
		ctx.fillRect(980,555,5,45)//150
		ctx.fillRect(1125,555,55,5)//151
		ctx.fillRect(1180,490,5,70)//152
		ctx.fillRect(480,420,35,5)//153
		ctx.fillRect(0,290,5,40)//154
		ctx.fillRect(1345,290,5,45)//155


		if(zonefin.collision(x,y,25,25)&&
	       zonefin.collision(w,z,25,25)){
	    		ctx.drawImage(imgfin,0,0,1350,635);
	    		sonfin.play();
	    }
	}
}

	