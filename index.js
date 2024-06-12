function drawHeart(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + height / 4);
    ctx.quadraticCurveTo(x, y, x + width / 4, y);
    ctx.quadraticCurveTo(x + width / 2, y, x + width / 2, y + height / 4);
    ctx.quadraticCurveTo(x + width / 2, y, x + (width * 3) / 4, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + height / 4);
    ctx.quadraticCurveTo(
      x + width,
      y + (height * 2) / 3,
      x + width / 2,
      y + height
    );
    ctx.quadraticCurveTo(x, y + (height * 2) / 3, x, y + height / 4);
    ctx.fill();
  }