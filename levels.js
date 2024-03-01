const isMobile = 'ontouchstart' in window
const win_width = window.innerWidth
let win_height = isMobile  ? window.innerHeight * 0.9 : window.innerHeight

const platform_width = win_width > 800 ? 0.1*win_width : 0.2*win_width 

function level0()
{
    instructions.innerHTML = isMobile ? "Press Left or Right joystick to move" : ("Use Left and Right arrows to move")
    platforms = []
    portals = []
    exit = new exit_door(0.85*win_width, win_height)
}
function level1()
{
    instructions.innerHTML = isMobile ? "Touch the game screen to jump" : ("Use Up arrow to jump")
    platforms = [
        new platform(0.2*win_width,0.9*win_height, platform_width),
        new platform(0.4*win_width,0.8*win_height, platform_width),
        new platform(0.6*win_width,0.7*win_height, platform_width),
        new platform(0.8*win_width,0.6*win_height, platform_width)
    ]
    exit = new exit_door(0.85*win_width,0.6*win_height)
}
function level2()
{
    platforms = [
        new platform(0.2*win_width,0.9*win_height, platform_width),
        new platform(0.4*win_width,0.8*win_height, platform_width),
        new platform(0.6*win_width,0.7*win_height, platform_width),
        new platform(0.8*win_width,0.6*win_height, platform_width),

        new platform(0.6*win_width,0.5*win_height, platform_width),
        new platform(0.4*win_width,0.4*win_height, platform_width),
        new platform(0.2*win_width,0.3*win_height, platform_width),
    ]
    exit = new exit_door(0.25*win_width,0.3*win_height)
}
function level3()
{
    instructions.innerHTML = ("You can now double jump")
    platforms = [
        new platform(0.8*win_width,0.85*win_height, platform_width),
        new platform(0.2*win_width,0.7*win_height, platform_width),
        new platform(0.5*win_width,0.5*win_height, platform_width),
        new platform(0.7*win_width,0.3*win_height, platform_width),
    ]
    exit = new exit_door(0.75*win_width,0.3*win_height)
}
function level4()
{
    platforms = [
        new platform(0.6*win_width,0.85*win_height, platform_width),
        new platform(0.3*win_width,0.70*win_height, platform_width),
        new platform(0.6*win_width,0.55*win_height, platform_width),
        new platform(0.3*win_width,0.40*win_height, platform_width),
        new platform(0.45*win_width,0.30*win_height, platform_width),
    ]
    exit = new exit_door(0.5*win_width,0.3*win_height)
}
function level5()
{
    platforms = [
        new platform(0*win_width,0.9*win_height, platform_width/2),
        new platform(0.3*win_width - (platform_width/4),0.7*win_height, platform_width/2),
        new platform(0.6*win_width,0.5*win_height, platform_width/2),
        new platform(0.8*win_width,0.3*win_height, platform_width/2)
    ]
    exit = new exit_door(0.8*win_width+platform_width/4,0.3*win_height)
}
function level6()
{
    platforms = [
        new platform(0*win_width,0.9*win_height, platform_width*2),
        new platform(win_width-(platform_width*2),0.2*win_height, platform_width*2),
    ]
    portals = [

        new portal(
            {
                x:20, 
                y:0.9*win_height
            },
            {
                x:win_width-15, 
                y:0.2*win_height
            }
        ),
    ]

    exit = new exit_door(0.8*win_width+platform_width/4,0.2*win_height)
}
function level7()
{
    platforms = [
        new platform(0*win_width,0.9*win_height, platform_width*2),
        new platform(0.5*win_width,0.7*win_height, platform_width*2),
        new platform(0.5*win_width,0.3*win_height, platform_width*2),
        new platform(win_width-(platform_width*2),0.15*win_height, platform_width*2),
    ]
    portals = [

        new portal(
            {
                x:0.5*win_width+platform_width/2, 
                y:0.7*win_height
            },
            {
                x:0.5*win_width+platform_width/2, 
                y:0.3*win_height
            }
        ),
    ]

    exit = new exit_door(0.8*win_width+platform_width/4,0.15*win_height)
}