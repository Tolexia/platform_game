class platform {
    constructor(x,y,width,height){
        this.x_start = x
        this.y_start = y
        this.width = width
        this.height = height
        this.x_end = x+width
        this.y_end = y+height
    }
    draw(){
        ctx.fillStyle = "black"
        ctx.fillRect(this.x_start, this.y_start, this.width, this.height);
    }
}