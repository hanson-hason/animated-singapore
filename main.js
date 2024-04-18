//Canvas SET UP!!!!

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 800;

//Red Base

let xBase = 0;
let r = 0;
let rStar = 0;
let tStar = 0;

requestAnimationFrame(drawBase);
function drawBase() {
  xBase = xBase + 50;

  if (r <= 150) {
    r = r + 5;
  }

  if (rStar < 50 && r >= 150) {
    rStar++;
  }

  if (tStar < 20 && r >= 150) {
    tStar++;
  }

  ctx.fillStyle = "rgb(238, 37, 54)";
  ctx.fillRect(0, 0, xBase, 400);

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(300, 200, r, 0, 2 * Math.PI);
  ctx.fill();

  //Red Circle

  ctx.fillStyle = "rgb(238, 37, 54)";
  ctx.beginPath();
  ctx.arc(360, 200, r, 0, 2 * Math.PI);
  ctx.fill();

  drawStar(ctx, 320, 180, rStar, 5, tStar);
  drawStar(ctx, 500, 180, rStar, 5, tStar);
  drawStar(ctx, 410, 115, rStar, 5, tStar);
  drawStar(ctx, 355, 285, rStar, 5, tStar);
  drawStar(ctx, 465, 285, rStar, 5, tStar);

  requestAnimationFrame(drawBase);
}

function drawStar(ctx, x, y, radius, numPoints, innerRadius) {
  const rotation = -Math.PI / 2; // Rotate 90 degrees to make the star upright
  ctx.beginPath();
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = rotation + (Math.PI / numPoints) * i;
    const r = i % 2 === 0 ? radius : innerRadius;
    ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
  }
  ctx.closePath();
  ctx.fillStyle = "white"; // Change color as needed
  ctx.fill();
}
