var shx=[10,10,20,20,30,30,40,40];
var shy=[0,10,10,20,20,30,30,0];

var shape0=world_3D.addBox(100,100,10,100,10,0);
var shape1=world_3D.addCylinder(5,500,0,65,0);
var shape2=world_3D.addSphere(10,0,65,0);
var shape3=world_3D.addExtrudePolygon(shx,shy,300,0,0,0)


var angle=120;
var pt=[100,0,0];
//world_3D.rotateInWorld(shape0,pt,angle,'Y');

animate_3D();
world_3D.update();
