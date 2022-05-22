function gameLevel2() {

walls2 = new Group();

//border wall
wall2[0] = createSprite(300, 50, 600, 20); //top
wall2[0].shapeColor = color(153, 51, 255);
walls2.add(wall2[0]);

wall2[1] = createSprite(10, 280, 20, 440); //left
wall2[1].shapeColor = color(153, 51, 255);
walls2.add(wall2[1]);

wall2[2] = createSprite(590, 240, 20, 380); //right
wall2[2].shapeColor = color(153, 51, 255);
walls2.add(wall2[2]);

wall2[3] = createSprite(300, 490, 600, 20); //bottom
wall2[3].shapeColor = color(153, 51, 255);
walls2.add(wall2[3]);

//maze layout
  //vertical
wall2[4] = createSprite(85, 160, 30, 80); //1TV
wall2[4].shapeColor = color(153, 51, 255);
walls2.add(wall2[4]);

wall2[5] = createSprite(165, 125, 30, 150); //2TV
wall2[5].shapeColor = color(153, 51, 255);
walls2.add(wall2[5]);

wall2[6] = createSprite(325, 195, 30, 150); //3TV
wall2[6].shapeColor = color(153, 51, 255);
walls2.add(wall2[6]);

wall2[7] = createSprite(165, 445, 30, 80); //1BV
wall2[7].shapeColor = color(153, 51, 255);
walls2.add(wall2[7]);

wall2[8] = createSprite(245, 315, 30, 230); //2MV
wall2[8].shapeColor = color(153, 51, 255);
walls2.add(wall2[8]);

wall2[9] = createSprite(165, 300, 30, 60); //1MV
wall2[9].shapeColor = color(153, 51, 255);
walls2.add(wall2[9]);

wall2[10] = createSprite(325, 365, 30, 80); //2MBV
wall2[10].shapeColor = color(153, 51, 255);
walls2.add(wall2[10]);

wall2[11] = createSprite(405, 295, 30, 70); //3MV
wall2[11].shapeColor = color(153, 51, 255);
walls2.add(wall2[11]);

wall2[12] = createSprite(405, 450, 30, 80); //2BV
wall2[12].shapeColor = color(153, 51, 255);
walls2.add(wall2[12]);

wall2[13] = createSprite(500, 150, 30, 60); //5TV
wall2[13].shapeColor = color(153, 51, 255);
walls2.add(wall2[13]);

wall2[14] = createSprite(405, 90, 30, 80); //4TV
wall2[14].shapeColor = color(153, 51, 255);
walls2.add(wall2[14]);

wall2[15] = createSprite(495, 370, 30, 60); //4MBV
wall2[15].shapeColor = color(153, 51, 255);
walls2.add(wall2[15]);

  //horizontal
wall2[16] = createSprite(50, 130, 100, 30); //1TH
wall2[16].shapeColor = color(153, 51, 255);
walls2.add(wall2[16]);

wall2[17] = createSprite(50, 265, 100, 30); //1MH
wall2[17].shapeColor = color(153, 51, 255);
walls2.add(wall2[17]);

wall2[18] = createSprite(280, 135, 100, 30); //2TH
wall2[18].shapeColor = color(153, 51, 255);
walls2.add(wall2[18]);

wall2[19] = createSprite(195, 265, 90, 30); //3MH
wall2[19].shapeColor = color(153, 51, 255);
walls2.add(wall2[19]);

wall2[20] = createSprite(280, 215, 100, 30); //3TMH
wall2[20].shapeColor = color(153, 51, 255);
walls2.add(wall2[20])

wall2[21] = createSprite(125, 340, 110, 30); //2MH
wall2[21].shapeColor = color(153, 51, 255);
walls2.add(wall2[21]);

wall2[22] = createSprite(50, 420, 100, 30); //1BH
wall2[22].shapeColor = color(153, 51, 255);
walls2.add(wall2[22]);

wall2[23] = createSprite(365, 340, 110, 30); //4MH
wall2[23].shapeColor = color(153, 51, 255);
walls2.add(wall2[23]);

wall2[24] = createSprite(285, 415, 110, 30); //2BH
wall2[24].shapeColor = color(153, 51, 255);
walls2.add(wall2[24]);

wall2[25] = createSprite(453, 195, 124, 30); //3TH
wall2[25].shapeColor = color(153, 51, 255);
walls2.add(wall2[25]);

wall2[26] = createSprite(530, 275, 100, 30); //5MH
wall2[26].shapeColor = color(153, 51, 255);
walls2.add(wall2[26]);

wall2[27] = createSprite(530, 415, 100, 30); //3BH
wall2[27].shapeColor = color(153, 51, 255);
walls2.add(wall2[27]);

}
