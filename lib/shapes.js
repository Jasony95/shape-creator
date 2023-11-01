class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.textFontSize = "60";
    this.textAnchor = "middle";
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.cx = "150";
    this.cy = "100";
    this.r = "80";
    this.x = "150";
    this.y = "125";
    this.textFontSize = "60";
    this.textAnchor = "middle";
  }
  setShapeColor(color) {
    this.shapeColor = color;
  }
  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill='${this.shapeColor}' />`
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.points = "160, 10 260, 130 60, 130";
    this.textx = "150";
    this.texty = "125";
    this.textFontSize = "60";
    this.textAnchor = "middle";
  }
  setShapeColor(color) {
    this.shapeColor = color;
  }
  render() {
    return `<polygon points='${this.points}' fill='${this.shapeColor}'/>`
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.x = "75";
    this.y = "50";
    this.width = "150";
    this.height = "125";
    this.textx = "150";
    this.texty = "125";
    this.textFontSize = "60";
    this.textAnchor = "middle";
  }
  setShapeColor(color) {
    this.shapeColor = color;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill='${this.shapeColor}'/>`
  }
}

module.exports = { Shape, Circle, Triangle, Square };