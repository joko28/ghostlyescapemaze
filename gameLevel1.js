function gameLevel1() {

  walls = new Group();

//border wall
wall[0] = createSprite(300, 50, 600, 20); //top
wall[0].shapeColor = color(153, 51, 255);
walls.add(wall[0]);

wall[1] = createSprite(10, 280, 20, 440); //left
wall[1].shapeColor = color(153, 51, 255);
walls.add(wall[1]);

wall[2] = createSprite(590, 240, 20, 380); //right
wall[2].shapeColor = color(153, 51, 255);
walls.add(wall[2]);

wall[3] = createSprite(300, 490, 600, 20); //bottom
wall[3].shapeColor = color(153, 51, 255);
walls.add(wall[3]);

//maze layout
//vertical
wall[4] = createSprite(85, 100, 30, 100); //1stLeftTopV
wall[4].shapeColor = color(153, 51, 255);
walls.add(wall[4]);

wall[5] = createSprite(85, 275, 30, 150); //1stLeftMiddleV
wall[5].shapeColor = color(153, 51, 255);
walls.add(wall[5]);

wall[6] = createSprite(165, 175, 30, 110); //2ndLeftTopV
wall[6].shapeColor = color(153, 51, 255);
walls.add(wall[6]);

wall[7] = createSprite(165, 420, 30, 120); //1stBottomLeftV
wall[7].shapeColor = color(153, 51, 255);
walls.add(wall[7]);

wall[8] = createSprite(215, 255, 30, 110); //2ndLeftMiddleV
wall[8].shapeColor = color(153, 51, 255);
walls.add(wall[8]);

wall[9] = createSprite(245, 175, 30, 110); //3rdLeftTopV
wall[9].shapeColor = color(153, 51, 255);
walls.add(wall[9]);

wall[10] = createSprite(245, 460, 30, 50); //2ndLeftBottomV
wall[10].shapeColor = color(153, 51, 255);
walls.add(wall[10]);

wall[11] = createSprite(325, 335, 30, 110); //3rdLeftMiddleV
wall[11].shapeColor = color(153, 51, 255);
walls.add(wall[11]);

wall[12] = createSprite(325, 460, 30, 50); //3rdLeftBottomV
wall[12].shapeColor = color(153, 51, 255);
walls.add(wall[12]);

wall[13] = createSprite(415, 100, 30, 100); //4thLeftTopV
wall[13].shapeColor = color(153, 51, 255);
walls.add(wall[13]);

wall[14] = createSprite(415, 400, 30, 80); //4thLeftBottomV
wall[14].shapeColor = color(153, 51, 255);
walls.add(wall[14]);

wall[15] = createSprite(505, 160, 30, 80); //5thLeftTopV
wall[15].shapeColor = color(153, 51, 255);
walls.add(wall[15]);

wall[16] = createSprite(505, 430, 30, 110); //5thLeftBottomV
wall[16].shapeColor = color(153, 51, 255);
walls.add(wall[16]);

//horizontal
wall[17] = createSprite(50, 215, 100, 30); //1stLeftMiddleH
wall[17].shapeColor = color(153, 51, 255);
walls.add(wall[17]);

wall[18] = createSprite(50, 410, 100, 30); //1stBottomH
wall[18].shapeColor = color(153, 51, 255);
walls.add(wall[18]);

wall[19] = createSprite(120, 135, 100, 30); //1stTopH
wall[19].shapeColor = color(153, 51, 255);
walls.add(wall[19]);

wall[20] = createSprite(110, 295, 80, 30); //2ndMiddleH
wall[20].shapeColor = color(153, 51, 255);
walls.add(wall[20])

wall[21] = createSprite(250, 215, 200, 30); //3rdMiddleH
wall[21].shapeColor = color(153, 51, 255);
walls.add(wall[21]);

wall[22] = createSprite(290, 135, 120, 30); //2ndTopH
wall[22].shapeColor = color(153, 51, 255);
walls.add(wall[22]);

wall[23] = createSprite(285, 375, 110, 30); //2ndBottomH
wall[23].shapeColor = color(153, 51, 255);
walls.add(wall[23]);

wall[24] = createSprite(350, 295, 140, 30); //4thMiddleH
wall[24].shapeColor = color(153, 51, 255);
walls.add(wall[24]);

wall[25] = createSprite(460, 215, 120, 30); //5thMiddleH
wall[25].shapeColor = color(153, 51, 255);
walls.add(wall[25]);

wall[26] = createSprite(460, 375, 120, 30); //3rdBottomH
wall[26].shapeColor = color(153, 51, 255);
walls.add(wall[26]);

wall[27] = createSprite(530, 295, 100, 30); //6thMiddleH
wall[27].shapeColor = color(153, 51, 255);
walls.add(wall[27]);

}
