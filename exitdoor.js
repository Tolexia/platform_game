class exit_door {
    // coords start from bottom
    constructor(x,y){
        this.x_end = x
        this.y_end = y
        this.width = 40
        this.height = 55
        this.x_start = this.x_end-this.width
        this.y_start = this.y_end-this.height
    }
    draw(){
        ctx.fillStyle = "rgb(255, 0, 0)"
        ctx.fillRect(this.x_start+this.width/2, this.y_start, this.width, this.height);
    }
}