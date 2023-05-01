const inquirer = require("inquirer");
const {createSVG} = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
class CLI {
  async run() {
      try {
        const data = await inquirer.prompt([
          {
            name: "text",
            type: "input",
            message: "What text do you want on your SVG?",
            validate: validateInput
          },
          {
            name: "foregroundColor",
            type: "input",
            message: "What color do you want the text to be?",
          },
          {
            name: "shape",
            type: "list",
            message: "What background shape would you like?",
            choices: ["circle", "triangle", "square"],
          },
          {
            name: "backgroundColor",
            type: "input",
            message: "What color do you want the background to be?",
          },
        ])

        function validateInput (input) {
          if (input.length <= 3) {
            return true;
          }
          console.log (' Please enter 3 or less characters.')
          return false;
        };

        const { text, foregroundColor, shape, backgroundColor} = data
var svg;
        switch (shape) {
          case 'circle' :
            svg = createSVG(text,foregroundColor, new Circle(backgroundColor))
            break;
          case 'triangle' :
            svg = createSVG(text,foregroundColor, new Triangle(backgroundColor))
            break;
          case 'square' :
            svg = createSVG(text,foregroundColor, new Square(backgroundColor))
            break;
        }
        await writeFile("./generated_SVGs/logo.svg",svg.render());
      } catch (err) {
      console.log(err);
      }
  }
}

module.exports = CLI;
