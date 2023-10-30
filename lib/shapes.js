function Shape(text, textColor, shapeColor) {
  this.text = text;
  this.textColor = textColor;
  this.shapeColor = shapeColor;
}

function Circle(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
}

function Triangle(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
}

function square(text, textColor, shapeColor) {
  Shape.call(this, text, textColor, shapeColor);
}