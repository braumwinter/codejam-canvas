let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = new Image(512, 512);

ctx.fillRect(0, 0, canvas.width, canvas.height);

function FirstImage() {
    for (let row_canvas = 0; row_canvas < 4; row_canvas++) {
        for (let column_canvas = 0; column_canvas < 4; column_canvas++) {
            let color = "#" + little_img[row_canvas][column_canvas];
            ctx.fillStyle = color;
            ctx.fillRect(128 * row_canvas, 128 * column_canvas, 128, 128);
        }
    }
}

function SecondImage() {
    for (let row_canvas = 0; row_canvas < 32; row_canvas++) {
        for (let column_canvas = 0; column_canvas < 32; column_canvas++) {
            let color = "rgb(" + middle_img[row_canvas][column_canvas][0] + "," + middle_img[row_canvas][column_canvas][1] + "," + middle_img[row_canvas][column_canvas][2] + ")";
            ctx.fillStyle = color;
            ctx.fillRect(16 * row_canvas, 16 * column_canvas, 16, 16);
        }
    }
}

function ThirdImage() {
    let image = document.getElementById('image_canvas');
    ctx.drawImage(image, 0, 0, 512, 512);
}