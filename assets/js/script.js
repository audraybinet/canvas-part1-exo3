const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");
(function draw(){
  ctx.fillStyle = "#A7D7E7";
  ctx.fillRect(135 ,170, 120, 30);
})();
(function draw(){
  ctx.fillStyle = "black";
  ctx.fillRect(100 ,200, 180, 40);
})();
(function drawCircle(){
ctx.fullStyle = "#EC407A";
ctx.beginPath();
ctx.arc(130, 250, 25,0 , Math.PI *2, false);
ctx.fill();
})();

(function drawCircle(){
ctx.fullStyle = "#EC407A";
ctx.beginPath();
ctx.arc(250, 250, 25,0 , Math.PI *2, false);
ctx.fill();
})();
