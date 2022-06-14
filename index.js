
let gravity = 1;


const shape = new Shape();
const shapes = [];
const shapesAmountText = document.querySelector("#shapesAmount");
function addShape() {
    setInterval(() => {
            let shapeEl = shape.generateShape();
            shapeEl.position.set(Math.random()*400, 0);
            shapeEl.interactive = true;
            shapeEl.buttonMode = true;
            shapeEl.on("pointerdown", function handleShape(e) {
                e.target.dead = true;
            });

            shapes.push(shapeEl);
            app.stage.addChild(shapeEl);

    }, 600);
}

addShape();

app.stage.interactive = true;

app.ticker.add(() => {
    for (let i = 0; i <= shapes.length; i++) {
        let shape = shapes[i];

        if (shape) {
            shape.y += gravity;
            if (shape.y > 700) {
                shape.dead = true;
            }
        }
    }

    for (let i = 0; i <= shapes.length; i++) {
        if (shapes[i] && shapes[i].dead) {
            app.stage.removeChild(shapes[i]);
            shapes.splice(i, 1);
        }
    }


    shapesAmountText.textContent = shapes.length;
});


