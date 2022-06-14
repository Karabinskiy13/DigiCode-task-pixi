
const shapesTypes = [
    "Circle",
    "Ellipse",
    "Triangle",
    "Rectangles",
    "Hexagon"
];

class Shape extends PIXI.Graphics {
    constructor() {
        super();
        this.color = this.getRandomColor();
        this.speed = 10;
        this.dead = false;
        this.position = this.getPosition();
        this.name=name;
    }

    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "0x";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getPosition() {
        return { x: (Math.random() * window.innerWidth) / 2, y: -100 };
    }

    updatePosition() {
        this.position = this.getPosition();
    }

    createCircle() {
        const shape = new PIXI.Graphics();
        shape.beginFill(this.getRandomColor());
        shape.drawCircle(this.position.x, this.position.y, 40);
        shape.endFill();

        return shape;
    }

    createEllipse() {
        const ellipse = new PIXI.Graphics();
        ellipse.beginFill(this.getRandomColor());
        ellipse.drawEllipse(this.position.x, this.position.y, 50, 20);
        ellipse.endFill();


        return ellipse;
    }

    createTriangle() {
        let triangle = new PIXI.Graphics();
        triangle.beginFill(this.getRandomColor());

        triangle.drawPolygon([
            -32,
            64,
            32,
            64,
            0,
            0,
        ]);

        triangle.endFill();

        triangle.x = this.position.x;
        triangle.y = this.position.y;

        return triangle;
    }

    createRectangle() {
        let rectangle = new PIXI.Graphics();
        rectangle.lineStyle(4, this.getRandomColor(), 1);
        rectangle.beginFill(this.getRandomColor());
        rectangle.drawRect(this.position.x, this.position.y, 64, 64);
        rectangle.endFill();


        return rectangle;
    }

    Hexagon() {
        const hexagonRadius = 60;
        const hexagonHeight = hexagonRadius * Math.sqrt(3);

        let hexagon = new PIXI.Graphics();
        hexagon.lineStyle(4, this.getRandomColor(), 1);
        hexagon.beginFill(this.getRandomColor());
        hexagon.drawPolygon([
            -hexagonRadius, 0,
            -hexagonRadius/2, hexagonHeight/2,
            hexagonRadius/2, hexagonHeight/2,
            hexagonRadius, 0,
            hexagonRadius/2, -hexagonHeight/2,
            -hexagonRadius/2, -hexagonHeight/2,
        ])
        hexagon.endFill();

        return hexagon;
    }

    randomShapeName() {
        return shapesTypes[Math.floor(Math.random() * shapesTypes.length)];
    }

    generateShape(name) {

        if (!shapesTypes.includes(name)){
            name = this.randomShapeName();
        }

        switch (name) {
            case "Circle":
                return this.createCircle();
            case "Ellipse":
                return this.createEllipse();
            case "Triangle":
                return this.createTriangle();
            case "Rectangles":
                return this.createRectangle();
            case "Hexagon":
                return this.Hexagon();
            default:
                return;
        }
    }
}
