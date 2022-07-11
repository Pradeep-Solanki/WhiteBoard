var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");



function getThing() {
    var getC = document.getElementById("C").value;
    var getS = document.getElementById("S").value;

    return {
        getC,
        getS
    };
}


function clearAll() {
    canvas.width = canvas.width;
}

function draw(e) {
    if (drawing == false) return;
    let editor = getThing();
    ctx.lineWidth = editor.getS;
    ctx.strokeStyle = editor.getC;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.moveTo(e.clientX, e.clientY);
    ctx.stroke();

}

function startDraw(e) {
    drawing = true;
    draw(e);
}

function overDraw() {
    drawing = false;
    ctx.beginPath();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", overDraw);
canvas.addEventListener("mousemove", draw);
