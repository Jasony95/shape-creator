const { Shape, Circle, Triangle, Square } = require('./shapes');

describe('Shape Colors', () => {
  describe('Circle Color', () => {
    test('should return the line of code that forms the circle along with the color', () => {
      const newCircle = new Circle('CIR', 'Pink', 'Orange');
      newCircle.setShapeColor('Brown');
      expect(newCircle.render()).toEqual(`<circle cx="${newCircle.cx}" cy="${newCircle.cy}" r="${newCircle.r}" fill='${newCircle.shapeColor}' />`);
    })
  })
  describe('Triangle Color', () => {
    test('should return the line of code that forms the triangle along with the color', () => {
      const newTriangle = new Triangle('TRI', 'Yellow', 'Blue');
      newTriangle.setShapeColor('Purple');
      expect(newTriangle.render()).toEqual(`<polygon points='${newTriangle.points}' fill='${newTriangle.shapeColor}'/>`);
    })
  })
  describe('Square Color', () => {
    test('should return the line of code that forms the square along with the color', () => {
      const newSquare = new Square("SQU", "Gray", "Black");
      newSquare.setShapeColor('Blue');
      expect(newSquare.render()).toEqual(`<rect x="${newSquare.x}" y="${newSquare.y}" width="${newSquare.width}" height="${newSquare.height}" fill='${newSquare.shapeColor}'/>`);
    })
  })
})
