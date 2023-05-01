const {Triangle,Circle,Square} = require("./shapes")
class SVG {
    constructor ( message, color, shape) {
        this.message = message;
        this.color = color;
        this.shape = shape;
    }
    setText(message, color) {
        this.message = message;
        this.color = color;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.message}</text>
        </svg>`
    }
    setShape(shape) {
        this.shape = shape;
    }
}

const createSVG = (message,color,shape) => {
    if(message.length > 4 || typeof message !== "string"){
        throw Error("Message must be of type string")
    }
    if(!(shape instanceof Circle || shape instanceof Square || shape instanceof Triangle)){
        throw Error("Shape must be an instance of shape")
    }
    return new SVG(message,color,shape)
}

module.exports = {createSVG,SVG};
