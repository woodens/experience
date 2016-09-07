function tick() {
	ctx.clearRect(0, 0, cw, ch),
		ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH),
		ctx.save(),
		ctx.globalAlpha = .05,
		ctx.globalCompositeOperation = "lighter",
		drawRays(current) ? (current++, current = Math.min(current, txtW), window.requestAnimationFrame(tick)) : fadeOut(),
		ctx.restore()
}
function fadeOut() {
	ctx.clearRect(0, 0, cw, ch),
		ctx.globalAlpha *= .95,
		ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH),
		ctx.globalAlpha > .01 ? window.requestAnimationFrame(fadeOut) : window.setTimeout(restart, 500)
}
function restart() {
	for (var t = 0; t < rays.length; t++) rays[t].reset();
	ctx.globalAlpha = 1,
		buffer.clearRect(0, 0, txtW, txtH),
		current = 0,
		tick()
}
function drawRays(t) {
	var a = 0;
	ctx.beginPath();
	for (var r = 0; r < rays.length; r++) {
		var e = rays[r];
		e.col < t && (a += e.draw())
	}
	return ctx.stroke(), a !== rays.length
}
function Ray(t, a, r) {
	this.col = a,
		this.row = t;
	var e = sx + a,
		i = sy + t,
		n = r,
		x = txtH / 1.5,
		o = pi2 * (this.row - .5 * x) / x;
	0 === o && (o = (Math.random() - .5) * pi2);
	var c = .02 * Math.sign(o),
		s = 2 * pi * (this.col - .5 * txtW) / txtW;
	0 === s && (s = (Math.random() - .5) * pi);
	var l = .02 * Math.sign(s);
	c += .005 * (Math.random() - .5);
	var h = 0,
		d = 2 * Math.random() + 2,
		f = !1;
	this.reset = function () {
		s = 2 * pi * (this.col - .5 * txtW) / txtW,
			o = pi2 * (this.row - .5 * x) / x,
		0 === o && (o = .5 * -pi2),
			h = 0,
			f = !1
	};
	this.draw = function () {
		return 0 > h ? (f || (buffer.fillStyle = n, buffer.fillRect(this.col, this.row, 1, 1), f = !0), 1) : (ctx.moveTo(e, i), ctx.quadraticCurveTo(e + Math.cos(s) * h * .5, i + Math.sin(s) * h * .5, e + Math.cos(o) * h, i + Math.sin(o) * h), o += c, s += l, h += Math.cos(o) * d, 0)
	}
}
var txt = "canvas 渲染字体",
	txtH = 50,
	font = "sans-serif",
	bg = "#000",
	rayColor1 = "#f50057",
	rayColor2 = "#e040fb",
	rayColor3 = "#ffff00",
	canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	cw = canvas.width = window.innerWidth,
	ch = canvas.height = window.innerHeight * 0.5,
	w2 = cw / 2,
	h2 = ch / 2,
	pi = Math.PI,
	pi2 = .5 * pi,
	txtCanvas = document.createElement("canvas"),
	txtCtx = txtCanvas.getContext("2d");
txtCtx.font = txtH + "px " + font,
	txtCtx.textBaseline = "middle";
var txtW = Math.floor(txtCtx.measureText(txt).width);
txtCanvas.width = txtW,
	txtCanvas.height = 1.2 * txtH;
var gradient = ctx.createRadialGradient(w2, h2, 0, w2, h2, txtW);
gradient.addColorStop(0, rayColor3),
	gradient.addColorStop(.5, rayColor2),
	gradient.addColorStop(1, rayColor1),
	ctx.strokeStyle = gradient,
	txtCtx.fillStyle = gradient,
	txtCtx.font = txtH + "px " + font,
	txtCtx.textBaseline = "middle",
	txtCtx.fillText(txt, 0, .5 * txtH)
txtH *= 1.5;
var bufferCanvas = document.createElement("canvas");
bufferCanvas.width = txtW,
	bufferCanvas.height = txtH;
for (var buffer = bufferCanvas.getContext("2d"), sx = .5 * (cw - txtW), sy = .5 * (ch - txtH), rays = [], txtData = txtCtx.getImageData(0, 0, txtW, txtH), i = 0; i < txtData.data.length; i += 4) {
	var ii = i / 4,
		row = Math.floor(ii / txtW),
		col = ii % txtW,
		alpha = txtData.data[i + 3];
	if (0 !== alpha) {
		var c = "rgba(";
		c += [txtData.data[i], txtData.data[i + 1], txtData.data[i + 2], alpha / 255],
			c += ")",
			rays.push(new Ray(Math.floor(ii / txtW), ii % txtW, c))
	}
}
var current = 0;
tick();
