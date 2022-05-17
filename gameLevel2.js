function gameLevel2() {

walls2 = new Group();

//border wall
wall2[0] = createSprite(300, 50, 600, 20); //top
wall2[0].shapeColor = color(153, 51, 255);
walls2.add(wall2[0]);

wall2[1] = createSprite(10, 280, 20, 440); //left
wall2[1].shapeColor = color(153, 51, 255);
walls2.add(wall2[1]);

wall2[2] = createSprite(590, 240, 20, 400); //right
wall2[2].shapeColor = color(153, 51, 255);
walls2.add(wall2[2]);

wall2[3] = createSprite(300, 490, 600, 20); //bottom
wall2[3].shapeColor = color(153, 51, 255);
walls2.add(wall2[3]);

}
