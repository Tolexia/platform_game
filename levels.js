const isMobile = 'ontouchstart' in window
const win_width = window.innerWidth
let win_height = isMobile  ? window.innerHeight * 0.9 : window.innerHeight

const platform_width = win_width > 800 ? 0.1*win_width : 0.2*win_width 
const big_platform = win_width < 800 ? platform_width : platform_width*2

let countLvls = 0;
for (let index = 0; index < 50; index++) {
    if(!window["level"+index])
        break;
    countLvls++;
}
function level0()
{
    instructions.innerHTML = isMobile ? "Press Left or Right joystick to move" : ("Use Left and Right arrows to move")
    platforms = []
    portals = []
    gravity_inverters = []
    exit = new exit_door(0.85*win_width, win_height)
}
function level1()
{
    instructions.innerHTML = isMobile ? "Touch the spacebar to jump" : ("Use Up arrow to jump")
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
        new platform(0.5*win_width,0.85*win_height, platform_width),
        new platform(0.2*win_width,0.7*win_height, platform_width),
        new platform(0.5*win_width,0.5*win_height, platform_width),
        new platform(0.7*win_width,0.3*win_height, platform_width),
    ]
    exit = new exit_door(0.7*win_width + platform_width/2,0.3*win_height)
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
    instructions.innerHTML = ("Say hello to Portals")

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
        new platform(0.2*win_width,0.8*win_height, platform_width),
        new platform(0.5*win_width-(platform_width/2),0.6*win_height, platform_width*2),
        new platform(0.5*win_width-(platform_width/2),0.3*win_height, platform_width*2),
        new platform(win_width-(platform_width*2),0.15*win_height, platform_width),
    ]
    portals = [

        new portal(
            {
                x:0.5*win_width+platform_width/2, 
                y:0.6*win_height
            },
            {
                x:0.5*win_width+platform_width/2, 
                y:0.3*win_height
            }
        ),
    ]

    exit = new exit_door(win_width-(platform_width*1.5),0.15*win_height)
}
function level8()
{
    platforms = [
        new platform(win_width-(1.5*platform_width),0.8*win_height, platform_width),
        new platform(0.5*win_width,0.6*win_height, platform_width),
        new platform(0.25*win_width,0.4*win_height, platform_width),
        new platform(0 ,0.2*win_height, platform_width),
        new platform(0.25*win_width ,0.06*win_height, platform_width),
        new platform(0.7*win_width ,0.06*win_height, platform_width),
        new platform(win_width-platform_width ,0.15*win_height, platform_width),
    ]
    portals = [

        new portal(
            {
                x:0.25*win_width+platform_width/2, 
                y:0.06*win_height
            },
            {
                x:0.7*win_width+platform_width/2, 
                y:0.06*win_height
            }
        ),
    ]

    exit = new exit_door(win_width-(platform_width/4),0.15*win_height)
}
function level9()
{
    platforms = [
        new platform(0,0.8*win_height, platform_width),
        new platform(0.6*win_width + platform_width,0.4*win_height, platform_width),
        new platform(0.5*win_width-(platform_width/2),0.2*win_height, platform_width),
    ]
    portals = [

        new portal(
            {
                x:0.2*win_width+platform_width/2, 
                y:0.7*win_height
            },
            {
                x:0.6*win_width, 
                y:0.4*win_height
            }
        ),
    ]

    exit = new exit_door(0.5*win_width-(platform_width/4),0.2*win_height)
}
function level10()
{
    platforms = [
        new platform(0,0.8*win_height, platform_width),
    ]
    portals = [
        new portal(
            {
                x:0.2*win_width+platform_width/2, 
                y:0.7*win_height
            },
            {
                x:0.6*win_width, 
                y:0.4*win_height
            }
        ),
    ]

    exit = new exit_door(0.6*win_width+80,0.24*win_height)
}
function level11()
{
    instructions.innerHTML = ("Newton's worst nightmare")
    portals = []
    platforms = [
        new platform(
            0,
            0.8*win_height, 
            platform_width
        ),
        new platform(
            platform_width+20, 
            0.6*win_height, 
            win_width - (2 * (platform_width+20))
        ),
        new platform(
            win_width-platform_width,
            (0.4*win_height), 
            platform_width
        ),
    ]

    gravity_inverters = [
        new gravity_inverter(
            platform_width+20, 
            0.6*win_height, 
            win_width - (2 * (platform_width+20))
        )
    ]

    exit = new exit_door(
        win_width-30,
        (0.4*win_height)
    )
}
function level12()
{
    portals = []
    platforms = [
        new platform(
            (win_width/2)-(big_platform/2),
            0.8*win_height, 
            big_platform
        ),
        new platform( // g_i
            0, 
            0.65*win_height, 
            win_width/3.33
        ),
        new platform(
            (win_width/2)-(big_platform/2),
            0.45*win_height, 
            big_platform
        ),
        new platform( // g_i
            win_width-(win_width/3.33),
            0.45*win_height, 
            win_width/3.33
        ),
        new platform(
            0,
            0.1*win_height, 
            win_width-(2*big_platform),
        ),
    ]

    gravity_inverters = [
        new gravity_inverter(
            0, 
            0.65*win_height, 
            win_width/3.33
        ),
        new gravity_inverter(
            win_width-(win_width/3.33),
            0.45*win_height, 
            win_width/3.33
        )
    ]

    exit = new exit_door(
        30,
        0.1*win_height, 
    )
}

function level13()
{
    portals = []
    platforms = [
        new platform( // g_i
            0, 
            win_height-(25), 
            win_width/3.33
        ),
        new platform(
            (win_width/2),
            0.3*win_height, 
            30,
            0.7*win_height
        ),
        new platform( // exit
            win_width-(win_width/3),
            0.1*win_height, 
            (win_width/3),
        ),
        new platform(
            win_width-big_platform,
            0.75*win_height, 
            big_platform,
        ),
        new platform(
            (win_width/2),
            0.5*win_height, 
            big_platform,
        ),
    ]

    gravity_inverters = [
        new gravity_inverter(
            0, 
            win_height-(25), 
            win_width/3.33
        ),
    ]

    exit = new exit_door(
        win_width-20,
        0.1*win_height, 
    )
}
function level14()
{
    platforms = [
        new platform( // g_i
            win_width/5, 
            win_height*0.8, 
            big_platform
        ),
        new platform( // portal 1
            (win_width/5)+big_platform,
            win_height*0.5, 
            big_platform
        ),
        new platform(  // ||
            (win_width/5)+(2*big_platform),
            win_height*0.35, 
            ball.radius*5,
            (win_height*0.15)+(ball.radius*5), 
        ),
        new platform( // portal 1
            (win_width/5)-20,
            win_height*0.35, 
            (2*big_platform)+45,
        ),
        new platform( // ||
            (win_width/5)+big_platform,
            win_height*0.25, 
            ball.radius*5,
            (win_height*0.1)+ ball.radius*5, 
        ),
        new platform( // ||
            (win_width/5)+big_platform+45,
            0, 
            ball.radius*5,
            (win_height*0.1)+(ball.radius*5), 
        ),
        new platform( // =
            (win_width/5)+big_platform+45,
            win_height*0.1, 
            big_platform
        ),
        new platform( // =
            (win_width/5)+big_platform*2.75,
            win_height*0.2, 
            platform_width
        ),
        // Exit
        new platform( // ||
            win_width - (2*big_platform)-ball.radius*5,
            (win_height*0.85), 
            ball.radius*5,
            (win_height*0.15), 
        ),
        new platform( // =
            win_width - (2*big_platform)-ball.radius*5,
            (win_height*0.85), 
            2*big_platform+ball.radius*5
        ),
    ]
    portals = [
        new portal(
            {
                x:(win_width/5)+big_platform+30+ball.radius*5+(platform_width/2), 
                y:win_height*0.1, 
            },
            {
                x:win_width-30, 
                y:win_height
            }
        ),
        new portal(
            {
                x:(win_width/5)+(1.75*big_platform), 
                y:win_height*0.5, 
            },
            {
                x:win_width/5, 
                y:0.35*win_height
            }
        ),
    ]
    gravity_inverters = [
        new gravity_inverter(
            win_width/5, 
            win_height*0.8, 
            big_platform
        ),
    ]

    exit = new exit_door(
        win_width-big_platform-20,
        win_height, 
    )
}