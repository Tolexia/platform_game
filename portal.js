class portal {
    // coords start from bottom
    constructor(entrance_coords, exit_coords)
    {
        this.width = 40
        this.height = 55
        
        this.entrance = {
            x_start : entrance_coords.x-this.width,
            y_start : entrance_coords.y-this.height,
            x_end : entrance_coords.x,
            y_end : entrance_coords.y,
        }
        this.exit = {
            x_end : exit_coords.x,
            y_end : exit_coords.y,
            x_start : exit_coords.x-this.width,
            y_start : exit_coords.y-this.height,
        }
        this.entrance.bound = this.exit
        this.exit.bound = this.entrance
    }
    draw(){
        ctx.fillStyle = "cyan"
        ctx.fillRect(this.entrance.x_start+this.width/2, this.entrance.y_start, this.width, this.height);
        ctx.fillRect(this.exit.x_start+this.width/2, this.exit.y_start, this.width, this.height);
    }
}