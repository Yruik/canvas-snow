function Canvas(){
    if(this.isntance){
        return this.isntance;
    }else{
        this.snows = new Array();
        return this;
    }
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
// 生成雪花
Canvas.prototype.generateSnow = function (){
    var canvas = this.canvas;
    var snow = {
        startX=Math.random()*canvas.width;
    }
}
// 绘制雪花
Canvas.prototype.drawSnow = function(){
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.font = "50px 宋体";
    ctx.fillStyle = "white";
    ctx.fillText("❄",50,500);
    ctx.closePath();

}
var canvas = new Canvas()
canvas.Init();
