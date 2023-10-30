const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
  {
    type: "default",
    name: "text",
    message: "Type in up to three characters: "
  },
  {
    type: "default",
    name: "text-color",
    message: "Type in a color or a hexadecimal number: "
  },
  {
    type: "list",
    name: "shape",
    message: "Choose one of the following shapes: ",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "default",
    name: "shape-color",
    message: "Type in a color or a hexadecimal number: "
  },
]

