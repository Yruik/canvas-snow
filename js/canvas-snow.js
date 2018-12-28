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
    canvas.style.background= "linear-gradient(skyblue,grey,grey,grey,#7888aa)";
    canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}

// 生成雪花
Canvas.prototype.generateSnow = function (){
    if(this.snows.length<300){
        var canvas = this.canvas;
        var snow = {
            cX:Math.random()*canvas.width,
            cY:Math.random()*20,
            cO:1,
            sX:Math.random()*2-1,
            sY:Math.floor(Math.random()*2)+1,
            sO:Math.random()*0.01,
            size:Math.floor(Math.random()*40+10)
        }
        // 添加到天上
        this.snows.push(snow);
    }
}

// 绘制雪花
Canvas.prototype.drawSnow = function(){
    var ctx = this.ctx;
    var canvas = this.canvas;
    var snows = this.snows;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<snows.length;i++){
        ctx.beginPath();
        ctx.font = snows[i].size+"px 宋体";
        ctx.fillStyle = "rgba(255,255,255,"+snows[i].cO+")";
        ctx.fillText("❄",snows[i].cX,snows[i].cY);
        ctx.closePath();
        snows[i].cO -=snows[i].sO;
        snows[i].cX +=snows[i].sX;
        snows[i].cY +=snows[i].sY;
        if(snows[i].cO<=0||snows[i].cY>=canvas.height || snows[i].cX<=0 || snows[i].cX >=canvas.width){
            snows.splice(i,1);
            i=i-1;
            this.generateSnow();
        }
    }  
}

// 简单封装开始函数
Canvas.prototype.Start = function(){
    var e = this;
    setInterval(function(){
        e.generateSnow();
        e.drawSnow();
    },30);
}

var canvas = new Canvas();
canvas.Init();
canvas.Start();

