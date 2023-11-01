const inquirer = require("inquirer");
const fs = require('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shapes.js');

const questions = [
  {
    type: "default",
    name: "text",
    message: "Type in up to three characters: ",
  },
  {
    type: "default",
    name: "textColor",
    message: "Type in a color or a hexadecimal number for the text color: ",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose one of the following shapes: ",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "default",
    name: "shapeColor",
    message: "Type in a color or a hexadecimal number for the shape: ",
  },
]

function createShape(data) {
  if (data.shape == "Circle") {
    const newCircle = new Circle(
      `${data.text}`,
      `${data.textColor}`,
      `${data.shapeColor}`
    );
    console.log(newCircle);
    return newCircle;
  }
  else if (data.shape == "Triangle") {
    const newTriangle = new Triangle(
      `${data.text}`,
      `${data.textColor}`,
      `${data.shapeColor}`
    );
    console.log(newTriangle);
    return newTriangle;
  }
  else if (data.shape == "Square") {
    const newSquare = new Square(
      `${data.text}`,
      `${data.textColor}`,
      `${data.shapeColor}`,
    );
    console.log(newSquare);
    return newSquare;
  }

}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Created File'));
}

function renderShape(Shape) {
  if (Shape instanceof Circle) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="${Shape.cx}" cy="${Shape.cy}" r="${Shape.r}" fill='${Shape.shapeColor}' />

    <text x="${Shape.x}" y="${Shape.y}" font-size="${Shape.textFontSize}" text-anchor="${Shape.textAnchor}" fill='${Shape.textColor}'>${Shape.text}</text>

    </svg>
    `
  }
  else if (Shape instanceof Triangle) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points='${Shape.points}' fill='${Shape.shapeColor}'/>

    <text x="${Shape.textx}" y="${Shape.texty}" font-size="${Shape.textFontSize}" text-anchor="${Shape.textAnchor}" fill='${Shape.textColor}'>${Shape.text}</text>

    </svg>
    `
  }
  else if (Shape instanceof Square) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="${Shape.x}" y="${Shape.y}" width="${Shape.width}" height="${Shape.height}" fill='${Shape.shapeColor}'/>

    <text x="${Shape.textx}" y="${Shape.texty}" font-size="${Shape.textFontSize}" text-anchor="${Shape.textAnchor}" fill='${Shape.textColor}'>${Shape.text}</text>

    </svg>
    `
  }
}

function init() {
  inquirer.prompt(questions).then(data => {
    console.log(data);

    const Shape = new createShape(data);
    
    writeToFile('./examples/Shapes.svg', renderShape(Shape));

  })
}

init();