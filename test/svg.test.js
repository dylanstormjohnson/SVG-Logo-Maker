const {createSVG, SVG} = require("../lib/svg");
const { Circle, Triangle, Square } = require("../lib/shapes");

const targetText = "AAA";
const targetColor = "blue"
const targetShape = "circle"

describe("SVG", () => {
  it("it has the property message", () => {
    const exampleSVG = new SVG(targetText);
    expect(exampleSVG.message).toEqual(targetText);
  });

  it("has the property color", () => {
    const exampleSVG = new SVG(targetText,targetColor);
    expect(exampleSVG.color).toEqual(targetColor)
  });
  
  it("has the property shape", () => {
    const exampleSVG = new SVG(targetText,targetColor,targetShape);
    expect(exampleSVG.shape).toEqual(targetShape)
  });
});

describe("createSVG", () => {
  it("it should generate an SVG with the following properties: text=AAA, textcolor=blue, shape=circle, shapecolor=red.", () => {
    const targetSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AAA</text>
        </svg>`
    const exampleSVG = createSVG(targetText, targetColor, new Circle('red'));
    expect(exampleSVG.render()).toEqual(targetSVG);
  });
});
