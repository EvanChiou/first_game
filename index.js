var Game = Engine('stage');
var createSprite = Game.createSprite
var forever = Game.forever
var when = Game.when
var setBackdrop = Game.setBackdrop
var cursor = Game.cursor
var key = Game.key
var print = Game.print
var sound = Game.sound
Game.start();
var play = createSprite("./asseds/未命名.png");
setBackdrop("./asseds/123.jpg");
var stair = 0
var setcursor = createSprite("./asseds/cursur_011-384x440.png");
var Ra = createSprite("./asseds/1371648876-640563658.png");
Ra.x = 70
Ra.y = 400
Ra.hidden = true
var Shu = createSprite("./asseds/555.png");
Shu.x = 200
Shu.y = 370
Shu.hidden = true
var Osiris = createSprite("./asseds/777.png");
Osiris.x = 300
Osiris.y = 370
Osiris.hidden = true
var Isis = createSprite("./asseds/321.png");
Isis.x = 400
Isis.y = 370
Isis.hidden = true
var Seth = createSprite("./asseds/753.png");
Seth.x = 500
Seth.y = 370
Seth.hidden = true
stair = 0    
forever(function(){
    if(stair == 6) {
        print("YOU WIN!!!",55,100,"red",100)
    }
    if(stair != 0 && stair != 6) {
        var 關卡 = print("第"+stair+"題",50,100,"white",60)
    }
    setcursor.moveTo(cursor)
    setcursor.scale = 0.2
    if(key.space) {
        play.destroy()
        Ra.hidden = false
        Shu.hidden = false
        Isis.hidden = false
        Osiris.hidden = false
        Seth.hidden = false
        stair = 1
    }
    if(stair == 1) {
        print("冥王，卻同時是豐饒與繁殖之神。",200,120,"white",30)
    };
    if(stair == 2) {
        print("風暴之神、沙漠之神、外國之神。",200,120,"white",30)
    };
    if(stair == 3) {
        print("埃及的太陽神，也是創世之神，",200,100,"white",30)
        print("是埃及所有神祇的源頭。",200,130,"white",30)
    };
    if(stair == 4) {
        print("黑暗與死亡之神，同時也是屋宇",200,100,"white",30)
        print("的守護神。",200,130,"white",30)
    };
    if(stair == 5) {
        print("風神和空氣之神，也是拉Ra的",200,100,"white",30)
        print("兒子。",200,130,"white",30)
    };
});
when("click", function() { 
        if((Ra.touched(cursor)||Seth.touched(cursor)||Isis.touched(cursor)||Shu.touched(cursor))&&stair == 1){
            sound.play("./asseds/XXX.mp3");
        }
        if(Osiris.touched(cursor)&&stair == 1){
            sound.play("./asseds/OOO.mp3")
            Osiris.destroy()
            stair +=1
        }
        if((Ra.touched(cursor)||Isis.touched(cursor)||Shu.touched(cursor))&&stair == 2){
            sound.play("./asseds/XXX.mp3");
        }
        if(Seth.touched(cursor)&&stair == 2){
            sound.play("./asseds/OOO.mp3")
            Seth.destroy()
            stair +=1
        }
        if((Isis.touched(cursor)||Shu.touched(cursor))&&stair == 3){
            sound.play("./asseds/XXX.mp3");
        }
        if(Ra.touched(cursor)&&stair == 3){
            sound.play("./asseds/OOO.mp3")
            Ra.destroy()
            stair +=1
        }
        if(Shu.touched(cursor)&&stair == 4){
            sound.play("./asseds/XXX.mp3");
        }
        if(Isis.touched(cursor)&&stair == 4){
            sound.play("./asseds/OOO.mp3")
            Isis.destroy()
            stair +=1
        }
        if(Shu.touched(cursor)&&stair == 5){
            sound.play("./asseds/OOO.mp3")
            Shu.destroy()
            stair +=1
        }
});