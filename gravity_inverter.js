class gravity_inverter {
    constructor(x,y,width,height = ball.radius*5 ){
        this.x_start = x
        this.y_start = y
        this.width = width
        this.height = height
        this.x_end = x+width
        this.y_end = y+height
    }
    draw(){
           ctx.beginPath();
           ctx.moveTo(this.x_start, this.y_start);
           ctx.lineTo(this.x_end, this.y_start);
           ctx.lineWidth = 10;
           ctx.strokeStyle = 'orange';
           ctx.stroke();
    }
}