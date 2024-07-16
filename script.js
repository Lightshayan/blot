//Hack Club Dinobox Van

const width = 125;
const height = 125;

setDocDimensions(width, height);

const t = new bt.Turtle()
const size = 100;
const rand = bt.randInRange(0,2);
//horizon Line
t.jump([0,30])
t.forward(125)
t.up()
if (rand === 1) {
t.jump([90,45])
t.down()
t.forward(10)
t.left(90)
t.forward(16)
t.left(73)
t.forward(19)
t.right(48)
t.forward(18)
t.left(65)
t.forward(57)
t.left(90)
t.forward(38)
t.left(90)
t.forward(5)
t.left(45)
t.forward(8)
t.right(45)
t.forward(8)
t.right(45)
t.forward(8)
t.left(45)
t.forward(29)
t.left(45)
t.forward(8)
t.right(45)
t.forward(8)
t.right(45)
t.forward(8)
  
drawLines(t.lines())
} else {
t.jump([40,45])
t.down()
t.forward(10)
t.left(90)
t.forward(16)
t.left(73)
t.forward(19)
t.right(48)
t.forward(18)
t.left(65)
t.forward(57)
t.left(90)
t.forward(38)
t.left(90)
t.forward(5)
t.left(45)
t.forward(8)
t.right(45)
t.forward(8)
t.right(45)
t.forward(8)
t.left(45)
t.forward(29)
t.left(45)
t.forward(8)
t.right(45)
t.forward(8)
t.right(45)
t.forward(8)
  
drawLines(t.lines())
}
