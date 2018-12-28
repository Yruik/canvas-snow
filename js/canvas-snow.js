function Canvas(){
}
//初始化canvas
Canvas.prototype.Init = function(){
    // 清除默认边距样式
    document.styleSheets.length || document.head.appendChild(document.createElement('style'));
    document.styleSheets[0].addRule("*","margin:0px;padding:0px;");
    // 创建画布
    const canvas = document.createElement("canvas");
    // 设置画布样式
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    canvas.style.backgroundColor = "grey";
    canvas.style.position = "absolute";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}
var canvas = new Canvas()
canvas.Init();
canvas.ctx.beginPath();
canvas.ctx.font = "50px 宋体";
canvas.ctx.fillStyle = "white";
canvas.ctx.fillText("❄",50,500);
canvas.ctx.closePath();