function gameLevel3() {

 walls3 = new Group();

     //border wall
 wall3[0] = createSprite(300, 50, 600, 20); //top
 wall3[0].shapeColor = color(153, 51, 255);
 walls3.add(wall3[0]);

 wall3[1] = createSprite(10, 280, 20, 440); //left
 wall3[1].shapeColor = color(153, 51, 255);
 walls3.add(wall3[1]);

 wall3[2] = createSprite(590, 240, 20, 380); //right
 wall3[2].shapeColor = color(153, 51, 255);
 walls3.add(wall3[2]);

 wall3[3] = createSprite(300, 490, 600, 20); //bottom
 wall3[3].shapeColor = color(153, 51, 255);
 walls3.add(wall3[3]);

 //maze layout
   //vertical
 wall3[4] = createSprite(85, 90, 30, 60); //1TV
 wall3[4].shapeColor = color(153, 51, 255);
 walls3.add(wall3[4]);

 wall3[5] = createSprite(170, 135, 30, 170); //2TV
 wall3[5].shapeColor = color(153, 51, 255);
 walls3.add(wall3[5]);

 wall3[6] = createSprite(345, 155, 30, 90); //3TV
 wall3[6].shapeColor = color(153, 51, 255);
 walls3.add(wall3[6]);

 wall3[7] = createSprite(85, 240, 30, 80); //1TMV
 wall3[7].shapeColor = color(153, 51, 255);
 walls3.add(wall3[7]);

 wall3[8] = createSprite(255, 240, 30, 80); //2MV
 wall3[8].shapeColor = color(153, 51, 255);
 walls3.add(wall3[8]);

 wall3[9] = createSprite(170, 320, 30, 80); //1MBV
 wall3[9].shapeColor = color(153, 51, 255);
 walls3.add(wall3[9]);

 wall3[10] = createSprite(170, 465, 30, 60); //1BV
 wall3[10].shapeColor = color(153, 51, 255);
 walls3.add(wall3[10]);

 wall3[11] = createSprite(255, 465, 30, 60); //2BV
 wall3[11].shapeColor = color(153, 51, 255);
 walls3.add(wall3[11]);

 wall3[12] = createSprite(345, 365, 30, 130); //2MBV
 wall3[12].shapeColor = color(153, 51, 255);
 walls3.add(wall3[12]);

 wall3[13] = createSprite(435, 100, 30, 80); //4TV
 wall3[13].shapeColor = color(153, 51, 255);
 walls3.add(wall3[13]);

 wall3[14] = createSprite(435, 250, 30, 100); //3MV
 wall3[14].shapeColor = color(153, 51, 255);
 walls3.add(wall3[14]);

 wall3[15] = createSprite(435, 465, 30, 60); //3BV
 wall3[15].shapeColor = color(153, 51, 255);
 walls3.add(wall3[15]);

 wall3[16] = createSprite(515, 380, 30, 60); //4MBV
 wall3[16].shapeColor = color(153, 51, 255);
 walls3.add(wall3[16]);

   //horizontal
 wall3[17] = createSprite(50, 185, 100, 30); //1TH
 wall3[17].shapeColor = color(153, 51, 255);
 walls3.add(wall3[17]);

 wall3[18] = createSprite(285, 125, 90, 30); //2TH
 wall3[18].shapeColor = color(153, 51, 255);
 walls3.add(wall3[18]);

 wall3[19] = createSprite(345, 205, 210, 30); //1TMH
 wall3[19].shapeColor = color(153, 51, 255);
 walls3.add(wall3[19]);

 wall3[20] = createSprite(50, 345, 100, 30); //1MBH
 wall3[20].shapeColor = color(153, 51, 255);
 walls3.add(wall3[20])

 wall3[21] = createSprite(300, 285, 120, 30); //2MH
 wall3[21].shapeColor = color(153, 51, 255);
 walls3.add(wall3[21]);

 wall3[22] = createSprite(50, 420, 100, 30); //1BH
 wall3[22].shapeColor = color(153, 51, 255);
 walls3.add(wall3[22]);

 wall3[23] = createSprite(213, 365, 115, 30); //2MBH
 wall3[23].shapeColor = color(153, 51, 255);
 walls3.add(wall3[23]);

 wall3[24] = createSprite(545, 125, 70, 30); //3TH
 wall3[24].shapeColor = color(153, 51, 255);
 walls3.add(wall3[24]);

 wall3[25] = createSprite(545, 205, 70, 30); //2TMH
 wall3[25].shapeColor = color(153, 51, 255);
 walls3.add(wall3[25]);

 wall3[26] = createSprite(545, 285, 70, 30); //3MH
 wall3[26].shapeColor = color(153, 51, 255);
 walls3.add(wall3[26]);

 wall3[27] = createSprite(470, 365, 100, 30); //3MBH
 wall3[27].shapeColor = color(153, 51, 255);
 walls3.add(wall3[27]);

 wall3[28] = createSprite(540, 415, 80, 30); //3BH
 wall3[28].shapeColor = color(153, 51, 255);
 walls3.add(wall3[28]);
}
