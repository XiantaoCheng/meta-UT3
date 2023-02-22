var shape, pt, eulers;


pt=[-50.0, -50.0, 0.0];
pt1=[-pt[1],pt[2],-pt[0]];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addCylinder(10.0,150.0,pt[0],pt[1],pt[2]+150.0/2);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');
world_3D.setRotationByEuler(shape,0.0, 0.0, 0.0);
world_3D.rotateInWorld(shape,pt1,eulers[2],'Y');
world_3D.rotateInWorld(shape,pt1,-eulers[1],'Z');
world_3D.rotateInWorld(shape,pt1,eulers[0],'Y');


pt=[50.0, -50.0, 0.0];
pt1=[-pt[1],pt[2],-pt[0]];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addCylinder(10.0,150.0,pt[0],pt[1],pt[2]+150.0/2);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');
world_3D.setRotationByEuler(shape,0.0, 0.0, 0.0);
world_3D.rotateInWorld(shape,pt1,eulers[2],'Y');
world_3D.rotateInWorld(shape,pt1,-eulers[1],'Z');
world_3D.rotateInWorld(shape,pt1,eulers[0],'Y');


shape=world_3D.addSphere(30.0,0.0, 0.0, 80.0);
world_3D.setRotationByEuler(shape,0.0, 0.0, -0.0);
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');
pt=[0.0, 0.0, 0.0];
eulers=[0.0, 0.0, -0.0];
shape=world_3D.addBox(50.0,50.0,50.0,pt[0],pt[1],pt[2]+50.0/2);
world_3D.rotateInWorld(shape,[0.0, 0.0, 0.0],eulers[2],'Z');
world_3D.rotateInWorld(shape,[0.0, 0.0, 0.0],eulers[1],'X');
world_3D.rotateInWorld(shape,[0.0, 0.0, 0.0],eulers[0],'Z');
world_3D.rotateInWorld(shape,[0,0,0],-90,'X');
world_3D.rotateInWorld(shape,[0,0,0],90,'Y');




animate_3D();
world_3D.update();
