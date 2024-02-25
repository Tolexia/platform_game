const isMobile = 'ontouchstart' in window
const win_width = window.innerWidth
let win_height = isMobile  ? window.innerHeight * 0.9 : window.innerHeight

function level0()
{
    instructions.innerHTML = isMobile ? "Press Left or Right joystick to move" : ("Use Left and Right arrows to move")
    platforms = []
    exit = new exit_door(0.85*win_width, win_height)
}
function level1()
{
    instructions.innerHTML = isMobile ? "Touch the game screen to jump" : ("Use Up arrow to jump")
    platforms = [
        new platform(0.2*win_width,0.9*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.4*win_width,0.8*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.6*win_width,0.7*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.8*win_width,0.6*win_height, 0.1*win_width, ball.radius * 5)
    ]
    exit = new exit_door(0.85*win_width,0.6*win_height)
}
function level2()
{
    platforms = [
        new platform(0.2*win_width,0.9*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.4*win_width,0.8*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.6*win_width,0.7*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.8*win_width,0.6*win_height, 0.1*win_width, ball.radius * 5),

        new platform(0.6*win_width,0.5*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.4*win_width,0.4*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.2*win_width,0.3*win_height, 0.1*win_width, ball.radius * 5),
    ]
    exit = new exit_door(0.25*win_width,0.3*win_height)
}
function level3()
{
    instructions.innerHTML = ("You can now double jump")
    platforms = [
        new platform(0.2*win_width,0.7*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.5*win_width,0.5*win_height, 0.1*win_width, ball.radius * 5),
        new platform(0.7*win_width,0.3*win_height, 0.1*win_width, ball.radius * 5),
    ]
    exit = new exit_door(0.75*win_width,0.3*win_height)
}