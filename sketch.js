function setup() {
    createCanvas(1820, 1080);
    background(33, 55, 138);
  }
  
  function draw() {
    

//sol
stroke(0, 0, 0);
strokeWeight(1);
fill (255,213,0);
ellipse (900, 0, 450,450);

//sol 2
stroke(0, 0, 0);
strokeWeight(1);
fill (255,213,0);
ellipse (0, 0, 450,450);

//sol 3
stroke(0, 0, 0);
strokeWeight(1);
fill (255,213,0);
ellipse (1820, 0, 450,450);

//luna 1
stroke(0, 0, 0);
strokeWeight(1);
fill (92,178,223);
ellipse (350, 380, 150,150);

//luna 2
stroke(0, 0, 0);
strokeWeight(1);
fill (92,178,223);
ellipse (1470, 380, 150,150);

    // ojo izquierdo
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (0,0,0);
    ellipse (600, 200, 200,200);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (125,28,28);
    ellipse (600, 200, 200, 50);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (62, 4,4);
    ellipse (600, 200, 50, 50);
    stroke(250, 250, 250);
    strokeWeight(1);
    fill (255,0,0);
    ellipse (600, 200, 10, 10);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (255,255,255);
    rectMode (CENTER);
    rect (600, 278, 5, 105)

    //ojo derecho

    stroke(0, 0, 0);
    strokeWeight(1);
    fill (0,0,0);
    ellipse (1200, 200, 200,200);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (125,28,28);
    ellipse (1200, 200, 200, 50);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (62, 4,4);
    ellipse (1200, 200, 50, 50);
    stroke(250, 250, 250);
    strokeWeight(1);
    fill (255,0,0);
    ellipse (1200, 200, 10, 10);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (255,255,255);
    rectMode (CENTER);
    rect (1200, 278, 5, 105)

    //trinagulo der
    noFill ();
    rectMode (CENTER);
    stroke(143, 0, 215);
    strokeWeight(5)
    triangle ( 1150, 405, 1200, 330, 1250, 350);

    // triangulo izq
    noFill ();
    rectMode (CENTER);
    stroke(143, 0, 215);
    strokeWeight(5)
    triangle ( 650, 405, 600, 330, 550, 350,);

    //rectángulo pata izquierda
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (255,255,255);
    rectMode (CENTER);
    rect (655, 465, 5, 105)

     //rectángulo pata derecha
     stroke(0, 0, 0);
     strokeWeight(1);
     fill (255,255,255);
     rectMode (CENTER);
     rect (1145, 465, 5, 105)

     //Conexion circular izq 
     stroke(143, 0, 215);
    strokeWeight(5);
    noFill ();
    ellipse (680, 530, 50, 50);

     //Conexion circular der
     stroke(143, 0, 215);
    strokeWeight(5);
    noFill ();
    ellipse (1120, 530, 50, 50);

    //cuerpo 
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (0,0,0);
    ellipse (900, 1150, 2500, 1200);

    //boca
    stroke(255, 255, 255);
    strokeWeight(1);
    fill (125,28,28);
    ellipse (900, 1150, 1800, 1000);

    //fondo
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (189, 60,60);
    ellipse (900, 800, 300, 250);

    //lengua
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (62, 4,4);
    ellipse (900, 1500, 1200, 1400);

    //diente izquierda
    fill (255, 255,255);
    rectMode (CENTER);
    stroke(255, 0, 0);
    strokeWeight(2)
    triangle ( 625, 825, 600, 680, 550, 690,);

    //diente derecha
    fill (255, 255,255);
    rectMode (CENTER);
    stroke(255, 0, 0);
    strokeWeight(2)
    triangle ( 1150, 825, 1200, 680, 1250, 690);

    //cosa de la garganta
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (255,0,0);
    rectMode (CENTER);
    rect (900, 685, 5, 20)

    //bola de cosa de la garganta
    stroke(0, 0, 0);
    strokeWeight(1);
    fill (255, 0,0);
    ellipse (900, 705, 20, 30);
    

    




    
  }
 