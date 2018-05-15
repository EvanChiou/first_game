alert("成功")
var Game = Engine('stage');
for (var GameAttr in Game) {
    window[GameAttr] = Game[GameAttr]
}

Game.set({
    width: 640, // Default: 640px
    height: 480, // Default: 480px
    debugMode: true // Default: false
});
sound.play("1 Hour of Ancient Egyptian Music.mp3", true);
Game.preload([
    "第二關.png", "未命.png", "13.jpg", "r3-1.png", "陶罐_斧頭-1.png", "藥水33.png", "100000.png", "牆壁.png", "壁.png", "數-題目.png", "數-草紙.png", "數-格.jpg", "數-卷軸-1.png", "數-卷軸.png", "暗格2.jpg", "暗格1.jpg", "開門16.png", "開門15.png", "開門14.png", "開門13.png", "開門12.png", "開門11.png", "開門10.png", "開門9.png", "開門8.png", "開門7.png", "開門6.png", "開門5.png", "開門4.png", "開門3.png", "開門2.png", "開門1-3.png", "開門1-2.png", "開門1-1.png", "象形文字紙捲打開.png", "象形文字紙捲.png", "畫2.jpg", "鳥.png", "陶罐底圖-1.png", "陶罐_斧頭-6.png", "陶罐_斧頭-5.png", "陶罐_斧頭-4.png", "陶罐_斧頭-3.png", "陶罐_斧頭-2.png", "陶罐.png", "陶器碎片-1.png", "閉門-1.png", "閉門.png", "蛇.png", "眼睛.png", "密碼.png", "素材.png", "神像4-器-1.png", "神像4-器.png", "神像4-無.png", "神像4-有.png", "神像3-器-1.png", "神像3-器.png", "神像3-無.png", "神像3-有.png", "神像2-器-1.png", "神像2-器.png", "神像2-無.png", "神像2-有.png", "神像1-器-1.png", "神像1-器.png", "神像1-無.png", "神像1-有.png", "書(闔起).png", "書(開).png", "生命之符-點取位置.png", "火爐小圖.png", "火爐大圖.png", "火把小圖.png", "火把2.png", "火把.png", "木乃伊(開.png", "木乃伊(閉).png", "十字.png", "XX.png", "r2-1mummy.png", "r2-1(有火把)-1光束.png", "r-2.png", "r1-1-1.png", "eye3-黃色路線2.png", "eye1透明路線.png", "587925.png", "998.png", "888.png", "887.png", "886.png", "859.png", "10000.png", "1000.png", "100.png", "10.png", "1.png", "寶箱底圖-1.png", "寶箱底圖.png", "寶箱小圖101.png", "寶箱小圖.png", "寶箱大圖打開.png", "寶箱大圖1.png", "寶箱大圖.png", "寶箱大圖(開).png", "寶石-斜.png", "寶石-正-1.png", "寶石-正.png", "藥水-1.png", "藥水.png", "5555.png", "189.png", "96.png", "5858.png", "5.png", "XXX.mp3", "OOO.mp3", "123.png", "123.gif", "XXX.mp3", "OOO.mp3", "9987.png", "777.png", "555.png", "88.jpg", "XXX.mp3", "OOO.mp3", "1371648876-640563658.png", "777.png", "753.png", "666.gif", "555.png", "88.png", "1 Hour of Ancient Egyptian Music.mp3","end.png"
], function () {
    Game.start();
});
var level = 0;
var sprites = [];
var time = 0
setInterval(function(){
    time++
},1000)
function level_1() {
    var play = createSprite({
        x: 280,
        y: 250,
        scale: 0.8, // 1.2倍大
        costumes: ["首頁.png"]
    });
    var playing = createSprite({
        x: 320,
        y: 250,
        scale: 0.8,
        costumes: ["1~2.png"]
    })
    setBackdrop("13.jpg");
    var stair = 0
    var Ra = createSprite("1371648876-640563658.png");
    Ra.x = 70
    Ra.y = 400
    Ra.hidden = true
    var Shu = createSprite("555.png");
    Shu.x = 200
    Shu.y = 370
    Shu.hidden = true
    var Osiris = createSprite("777.png");
    Osiris.x = 300
    Osiris.y = 370
    Osiris.hidden = true
    var Isis = createSprite("神像4-有.png");
    Isis.x = 400
    Isis.y = 370
    Isis.hidden = true
    var Seth = createSprite("753.png");
    Seth.x = 500
    Seth.y = 370
    Seth.hidden = true
    stair = 0
    playing.hidden = true


    sprites = [playing, play, Ra, Shu, Osiris, Isis, Seth];


    forever(function () {
        if (level != 1) {
            return
        }
        if (stair == 6) {
            playing.hidden = false
            setBackdrop("13.jpg")
        }
        if (stair == 1) {
            print("俄西里斯是冥王，卻同時是豐饒與繁殖之神。", 25, 120, "white", 30)
        };
        if (stair == 2) {
            print("賽特是風暴之神、沙漠之神、外國之神。", 25, 120, "white", 30)
        };
        if (stair == 3) {
            print("拉是埃及的太陽神，也是創世之神，是埃及", 25, 100, "white", 30)
            print("是埃及所有神祇的源頭。", 25, 130, "white", 30)
        };
        if (stair == 4) {
            print("伊西絲是生命與健康女神。", 25, 120, "white", 30)
        }
        if (stair == 5) {
            print("舒是風神和空氣之神，也是拉Ra的兒子。", 25, 120, "white", 30)
        };
    });
    when("click", function () {
        if (stair == 0) {
            setBackdrop("88.jpg");
            play.destroy()
            Ra.hidden = false
            Shu.hidden = false
            Isis.hidden = false
            Osiris.hidden = false
            Seth.hidden = false
            stair = 1
        }
        if (stair == 6) {
            next_level()
            stair = 7
        }
    });
    function check(ss, s) {
        if (stair == s) {
            sound.play("OOO.mp3")
            ss.destroy()
            stair += 1
        } else {
            sound.play("XXX.mp3")
        }
    }
    Shu.when("click", function () {
        check(Shu, 5)
    });
    Osiris.when("click", function () {
        check(Osiris, 1)
    });
    Isis.when("click", function () {
        check(Isis, 4)
    });
    Ra.when("click", function () {
        check(Ra, 3)
    });
    Seth.when("click", function () {
        check(Seth, 2)
    });
}



function level_2() {
    setTimeout(function  (){
        setBackdrop("第二關.png");

        var text_1 = '';
        var text_2 = '';
        var text_3 = '';
        var text_4 = '';
        var text_5 = '';
        var text_6 = '';
        var playing = createSprite({
            x: 320,
            y: 250,
            scale: 0.8,
            costumes: ["2~3.png"],
            layer: 1000000
        })
        var q1 = createSprite({
            x: 200,
            y: 100,
            scale: 0.7,
            costumes: ["1.png"],
            hidden: true
        });
        var q2 = createSprite({
            x: 200,
            y: 250,
            scale: 0.7,
            costumes: ["10.png"],
            hidden: true
        });
        var q3 = createSprite({
            x: 200,
            y: 400,
            scale: 0.7,
            costumes: ["100.png"],
            hidden: true
        });
        var q4 = createSprite({
            x: 450,
            y: 100,
            scale: 0.7,
            costumes: ["1000.png"],
            hidden: true
        });
        var q5 = createSprite({
            x: 450,
            y: 250,
            scale: 0.7,
            costumes: ["10000.png"],
            hidden: true
        });
        var q6 = createSprite({
            x: 450,
            y: 400,
            scale: 0.7,
            costumes: ["100000.png"],
            hidden: true
        });
        playing.hidden = true
        var stair = 0;
        sprites = [playing, q1, q2, q3, q4, q5, q6]
        forever(function () {
            if (level != 2) {
                return
            }
            if (text_1 == 1 && text_2 == 10 && text_3 == 100 && text_4 == 1000 && text_5 == 10000 && text_6 == 100000) {
                playing.hidden = false
                stair = 2
            }
            if (stair == 1) {
                print(text_1, q1.x - 15, q1.y + 35, "white", 45);
                print(text_2, q2.x - 25, q2.y + 35, "white", 45);
                print(text_3, q3.x - 40, q3.y + 35, "white", 45);
                print(text_4, q4.x - 50, q4.y + 35, "white", 45);
                print(text_5, q5.x - 60, q5.y + 35, "white", 45);
                print(text_6, q6.x - 70, q6.y + 35, "white", 45);
            }
        });
        when("click", function () {
            if (level == 3) {
                return
            }
            if (text_1 == 1 && text_2 == 10 && text_3 == 100 && text_4 == 1000 && text_5 == 10000 && text_6 == 100000) {
                setBackdrop("white")
                next_level()
            }
        })
        when("click", function () {
            if (stair == 1) {
                return

            }
            setBackdrop("#D9B06A");
            stair++
            q1.hidden = false;
            q2.hidden = false;
            q3.hidden = false;
            q4.hidden = false;
            q5.hidden = false;
            q6.hidden = false;
        });

        q1.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 1) {
                sound.play("OOO.mp3");
                text_1 = "1";
            } else {
                sound.play("XXX.mp3");
                text_1 = "";
            }
        });
        q2.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 10) {
                sound.play("OOO.mp3");
                text_2 = "10";
            } else {
                sound.play("XXX.mp3");
                text_2 = "";
            }
        });
        q3.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 100) {
                sound.play("OOO.mp3");
                text_3 = "100";
            } else {
                sound.play("XXX.mp3");
                text_3 = "";
            }
        });
        q4.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 1000) {
                sound.play("OOO.mp3");
                text_4 = "1000";
            } else {
                sound.play("XXX.mp3");
                text_4 = "";
            }
        });
        q5.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 10000) {
                sound.play("OOO.mp3");
                text_5 = "10000";
            } else {
                sound.play("XXX.mp3");
                text_5 = "";
            }
        });
        q6.when("click", function () {
            var answer = prompt("請輸入阿拉伯數字");
            if (answer == 100000) {
                sound.play("OOO.mp3");
                text_6 = "100000";
            } else {
                sound.play("XXX.mp3");
                text_6 = "";
            }
        });
    }, 1000)
}
function level_3() {
    setBackdrop("white")
    var lllooolll = 0
    var lllooolll2 = 0
    var lolPassed = false;
    var and = 0
    var bed = 0
    var poq = 0
    var xs = 0
    var oo7 = 0
    var adj = 0
    var o12 = 0
    var lll = 0
    var ppe2 = 0
    var ppe3 = 0
    var ppe4 = 0
    var ppe5 = 0
    var QQ2 = 0
    var Isis_jj2 = 0
    var Seth_jj2 = 0
    var jj = 0
    var kk = 0
    var gg = 0
    var ii = 0
    var ppw = 0
    var oWo = 0
    var qwe = 0
    var ms = 0
    var edlp = 0
    var ai = 0
    var r = createSprite({
        x: 320,
        y: 280,
        scale: 0.35, // 1.2倍大
        costumes: ["r1-1-1.png", "r-2.png", "r3-1.png", "壁.png", "牆壁.png", "火爐大圖.png"
            , "書(開).png", "寶箱底圖-1.png", "5.png", "陶罐底圖-1.png", "陶罐_斧頭-1.png "
            , "陶罐_斧頭-2.png", " 陶罐_斧頭-3.png", "陶罐_斧頭-4.png", "陶罐_斧頭-5.png"
            , "陶罐_斧頭-6.png", "eye1透明路線.png", "eye3-黃色路線2.png", "r2-1(有火把)-1光束.png",
            "數-格.jpg", "寶箱底圖.png", "閉門.png", " 閉門-1.png", " 開門1-1.png", " 開門1-2.png",
            "開門1-3.png", "開門2.png", " 開門3.png", " 開門4.png", " 開門5.png", " 開門6.png",
            "開門7.png", "開門8.png", " 開門9.png", "開門10.png", " 開門11.png", " 開門12.png",
            "開門13.png", " 開門14.png", " 開門15.png", " 開門16.png"]
    });
    var way1 = createSprite({
        x: 600,
        y: 290,
        scale: 0.25, // 1.2倍大
        costumes: ["888.png"]
    });
    var way2 = createSprite({
        x: 40,
        y: 290,
        scale: 0.25, // 1.2倍大
        costumes: ["5858.png"]
    });
    var r3s = createSprite({
        x: 560,
        y: 350,
        scale: 0.35, // 1.2倍大
        costumes: ["96.png"]
    });
    var r3o = createSprite({
        x: 100,
        y: 415,
        scale: 0.35, // 1.2倍大
        costumes: ["859.png"]
    });
    var elig = createSprite({
        x: 320,
        y: 48,
        scale: 1, // 1.2倍大
        costumes: ["素材.png"]
    });
    var jf = createSprite({
        x: 50,
        y: 260,
        scale: 0.185, // 1.2倍大
        costumes: ["5555.png"]
    });
    var jjp = createSprite({
        x: 300,
        y: 290,
        scale: 0.8, // 1.2倍大
        costumes: ["畫2.jpg"]
    });
    var iew = createSprite({
        x: 310,
        y: 290,
        scale: 0.48, // 1.2倍大
        costumes: ["暗格1.jpg", "暗格2.jpg"]
    });
    var XX = createSprite({
        x: 585,
        y: 150,
        scale: 0.7, // 1.2倍大
        costumes: ["XX.png"]
    });
    var ddv = createSprite({
        x: 70,
        y: 245,
        scale: 0.25, // 1.2倍大
        costumes: ["火把小圖.png"]
    });
    var ppe = createSprite({
        x: 320,
        y: 240,
        scale: 0.7, // 1.2倍大
        costumes: ["886.png", "887.png", "火把.png", "火把2.png"]
    });
    var tt = createSprite({
        x: 497,
        y: 350,
        scale: 0.35, // 1.2倍大
        costumes: ["火爐小圖.png"]
    });
    var QQ = createSprite({
        x: 310,
        y: 300,
        scale: 0.7, // 1.2倍大
        costumes: ["象形文字紙捲.png"]
    });
    var QQget = createSprite({
        x: 320,
        y: 240,
        scale: 0.35,
        costumes: ["象形文字紙捲打開.png"],
        layer: 1000000
    })
    var book = createSprite({
        x: 317,
        y: 270,
        scale: 0.05,
        costumes: ["書(闔起).png"]
    })
    var cou = createSprite({
        x: 30,
        y: 390,
        scale: 0.24, // 1.2倍大
        costumes: ["寶箱小圖.png"]
    });
    var cco = createSprite({
        x: 320,
        y: 320,
        scale: 0.45,
        costumes: ["寶箱大圖.png", "寶箱大圖打開.png"]
    })
    var Isis = createSprite({
        x: 380,
        y: 315,
        scale: 0.3,
        costumes: ["神像4-無.png", "神像4-有.png"]
    })
    var Isis_jj = createSprite({
        x: cco.x + 20,
        y: cco.y - 20,
        scale: 1,
        costumes: ["神像4-器.png", "神像4-器-1.png"]
    })
    var Shu = createSprite({
        x: 260,
        y: 310,
        scale: 0.3,
        costumes: ["神像2-無.png", "神像2-有.png"]
    })
    var Osiris = createSprite({
        x: 440,
        y: 315,
        scale: 0.3,
        costumes: ["神像3-無.png", "神像3-有.png"]
    })
    var Seth = createSprite({
        x: 200,
        y: 310,
        scale: 0.3,
        costumes: ["神像1-有.png", "神像1-無.png"]
    })
    var lol = createSprite({
        x: 410,
        y: 309,
        scale: 0.18,
        costumes: ["十字.png", "眼睛.png", "蛇.png", "鳥.png"]
    })
    var lol2 = createSprite({
        x: 440,
        y: 312,
        scale: 0.18,
        costumes: ["十字.png", "眼睛.png", "蛇.png", "鳥.png"]
    })
    var lol3 = createSprite({
        x: 470,
        y: 315,
        scale: 0.18,
        costumes: ["十字.png", "眼睛.png", "蛇.png", "鳥.png"]
    })
    var lol4 = createSprite({
        x: 500,
        y: 318,
        scale: 0.18,
        costumes: ["十字.png", "眼睛.png", "蛇.png", "鳥.png"]
    })
    var mummy = createSprite({
        x: 320,
        y: 305,
        scale: 0.5,
        costumes: ["r2-1mummy.png"]
    })
    var mummy_up = createSprite({
        x: 320,
        y: 320,
        scale: 0.5,
        costumes: ["木乃伊(閉).png", "木乃伊(開.png"]
    })
    var minecraft = createSprite({
        x: 265,
        y: 327,
        scale: 0.1,
        costumes: ["藥水.png", "藥水-1.png", "藥水33.png"],
        layer: 100000000000000
    })
    var Seth_jj = createSprite({
        x: 310,
        y: 45,
        scale: 0.3,
        costumes: ["神像1-器.png", "神像1-器-1.png"]
    })
    var pot = createSprite({
        x: 292,
        y: 285,
        scale: 0.1,
        costumes: ["陶罐.png", "陶器碎片-1.png"]
    })
    var ppot = createSprite({
        x: pot.x + 10,
        y: pot.y + 20,
        scale: pot.scale, // 1.2倍大
        costumes: ["陶器碎片-1.png"]
    });
    var pot_jj = createSprite({
        x: 328,
        y: 383,
        scale: 0.5, // 1.2倍大
        costumes: ["寶石-斜.png", " 寶石-正.png", "寶石-正-1.png"]
    });
    var eye = createSprite({
        x: 573,
        y: 313,
        scale: 0.5, // 1.2倍大
        costumes: ["587925.png"]
    });
    var D = createSprite({
        x: 260,
        y: 305,
        scale: 0.2, // 1.2倍大
        costumes: ["998.png"]
    });
    var lp = createSprite({
        x: 78,
        y: 315,
        scale: 0.1, // 1.2倍大
        costumes: ["生命之符-點取位置.png", "神像2-器.png", "神像2-器-1.png"]
    });
    var uj = createSprite({
        x: 163,
        y: 295,
        scale: 0.6, // 1.2倍大
        costumes: ["189.png"]
    });
    var uj_jj = createSprite({
        x: 320,
        y: 300,
        scale: 0.7, // 1.2倍大
        costumes: ["數-卷軸.png", "數-卷軸-1.png"]
    });
    var xo = createSprite({
        x: 320,
        y: 240,
        scale: 0.4, // 1.2倍大
        costumes: ["數-草紙.png", "數-題目.png"],
        layer: 100000
    });
    var o3o = createSprite({
        x: 470,
        y: 326,
        scale: 0.35, // 1.2倍大
        costumes: ["寶箱小圖101.png"]
    });
    var o3o_jj = createSprite({
        x: 330,
        y: 300,
        scale: 0.3, // 1.2倍大
        costumes: ["寶箱大圖1.png", "寶箱大圖(開).png"]
    });
    var llol = createSprite({
        x: 355,
        y: 330,
        scale: 0.2, // 1.2倍大
        costumes: ["密碼.png"]
    });
    var llol2 = createSprite({
        x: 300,
        y: 330,
        scale: 0.2, // 1.2倍大
        costumes: ["密碼.png"]
    });
    var Osiris_jj = createSprite({
        x: 320,
        y: 302,
        scale: 0.2, // 1.2倍大
        costumes: ["神像3-器.png", "神像3-器-1.png"]
    });
    way2.hidden = true
    ppot.hidden = true
    D.hidden = true
    pot_jj.hidden = true
    mummy_up.hidden = true
    r3s.hidden = true
    r3o.hidden = true
    jf.hidden = true
    Osiris_jj.hidden = true
    pot.hidden = true
    xo.hidden = true
    jjp.hidden = true
    iew.hidden = true
    o3o_jj.hidden = true
    XX.hidden = true
    ddv.hidden = true
    ppe.hidden = true
    QQ.hidden = true
    QQget.hidden = true
    book.hidden = true
    uj.hidden = true
    way2.hidden = true
    cco.hidden = true
    Isis_jj.hidden = true
    lol.hidden = true
    lol2.hidden = true
    lol3.hidden = true
    lol4.hidden = true
    mummy.hidden = true
    llol.hidden = true
    llol2.hidden = true
    minecraft.hidden = true
    Seth_jj.hidden = true
    eye.hidden = true
    lp.hidden = true
    uj_jj.hidden = true
    o3o.hidden = true
    minecraft.direction -= 90
    mummy_up.costumeId = 0
    D.direction -= 90
    forever(function () {
        if (level != 3) {
            return
        }
        if (edlp == 1) {
            minecraft.hidden = false
        }
        if (Isis_jj2 == 1) {
            Isis_jj.hidden = false
        }
        if (key.space) {
            pot_jj.x = 292
            pot_jj.y = 320
        }
        if (oWo == 1) {
            setInterval(function () {
                if (pot_jj.touched(cursor)) {
                    pot_jj.y = cursor.y
                    pot_jj.x = cursor.x
                }
                if (r.touched(pot_jj)) {
                    pot_jj.y = 345
                    pot_jj.x = 521
                }
            }, 1000)
            if (D.touched(pot_jj)) {
                r.costumeId = 17
                D.destroy()
                pot_jj.destroy()
                qwe = 1
            }
        }
        if (llol.hidden == false && llol2.hidden == false) {
            if (bed == 1) {
                return
            }
            print(lllooolll, llol.x - 10, llol.y - 10, "black")
            print(lllooolll2, llol2.x - 10, llol2.y - 10, "black")
        }
        if (lllooolll == 7 && lllooolll2 == 8 && o12 == 1) {
            Osiris_jj.hidden = false
            o3o_jj.costumeId = 1
            llol.destroy()
            llol2.destroy()
            bed = 1
        }
        if (Seth.costumeId == 0 && Shu.costumeId == 1 && Osiris.costumeId == 1 && Isis.costumeId == 1 && and == 0) {
            and = 1
            way2.destroy()
            D.destroy()
            pot_jj.destroy()
            mummy_up.destroy()
            r3s.destroy()
            r3o.destroy()
            jf.destroy()
            Osiris_jj.destroy()
            pot.destroy()
            xo.destroy()
            jjp.destroy()
            iew.destroy()
            o3o_jj.destroy()
            XX.destroy()
            ddv.destroy()
            ppe.destroy()
            QQ.destroy()
            QQget.destroy()
            book.destroy()
            uj.destroy()
            way2.destroy()
            cco.destroy()
            Isis_jj.destroy()
            lol.destroy()
            lol2.destroy()
            lol3.destroy()
            lol4.destroy()
            mummy.destroy()
            llol.destroy()
            llol2.destroy()
            minecraft.destroy()
            Seth_jj.destroy()
            eye.destroy()
            lp.destroy()
            uj_jj.destroy()
            o3o.destroy()
            Isis.destroy()
            Shu.destroy()
            Seth.destroy()
            Osiris.destroy()
            cou.destroy()
            tt.destroy()
            way1.destroy()
            elig.destroy()
            r.hidden = true
            next_level()
        }
    });
    when("click", function () {
        if (way1.touched(cursor) && r.costumeId == 0) {
            tt.hidden = true
            eye.hidden = false
            cou.hidden = true
            r.costumeId = 1
            r3s.hidden = false
            mummy.hidden = false
            book.hidden = false
            way1.hidden = true
            uj.hidden = false
            way2.hidden = false
            ddv.hidden = false
            Isis.hidden = true
            Shu.hidden = true
            Seth.hidden = true
            Osiris.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (way2.touched(cursor) && r.costumeId == 1) {
            r.costumeId = 0
            cou.hidden = false
            Isis.hidden = false
            Shu.hidden = false
            eye.hidden = true
            Osiris.hidden = false
            Seth.hidden = false
            book.hidden = true
            uj.hidden = true
            mummy.hidden = true
            tt.hidden = false
            r3s.hidden = true
            way2.hidden = true
            way1.hidden = false
            ddv.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (r3s.touched(cursor) && r.costumeId == 1) {
            r.costumeId = 2
            eye.hidden = true
            way1.hidden = true
            o3o.hidden = false
            uj.hidden = true
            way2.hidden = true
            r3s.hidden = true
            mummy.hidden = true
            r3o.hidden = false
            book.hidden = true
            jf.hidden = false
            pot.hidden = false
            if (ii == 1) {
                ppot.hidden = false
            }
            ddv.hidden = true
            tt.hidden = true
            ppe.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (r3o.touched(cursor)) {
            book.hidden = false
            uj.hidden = false
            eye.hidden = false
            r.costumeId = 1
            way1.hidden = true
            tt.hidden = true
            way2.hidden = false
            r3o.hidden = true
            r3s.hidden = false
            o3o.hidden = true
            mummy.hidden = false
            jf.hidden = true
            pot.hidden = true
            if (ii == 1) {
                ppot.hidden = true
            }
            ddv.hidden = false
            ppe.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (jf.touched(cursor)) {
            r.costumeId = 3
            way2.hidden = true
            tt.hidden = true
            r3s.hidden = true
            r3o.hidden = true
            jf.hidden = true
            o3o.hidden = true
            pot.hidden = true
            if (ii == 1) {
                ppot.hidden = true
            }
            jjp.hidden = false
            iew.hidden = true
            XX.hidden = false
            ddv.hidden = true
            ppe.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (jjp.touched(cursor)) {
            jjp.x = -100
            way2.hidden = true
            r3s.hidden = true
            tt.hidden = true
            r3o.hidden = true
            jf.hidden = true
            pot.hidden = true
            if (ii == 1) {
                ppot.hidden = true
            }
            iew.hidden = false
            XX.hidden = false
            ddv.hidden = true
            ppe.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (XX.touched(cursor)) {
            if (r.costumeId == 6) {
                r.scale = 0.35
                XX.hidden = true
                tt.hidden = true
                r.costumeId = 1
                r3s.hidden = false
                mummy.hidden = false
                way1.hidden = true
                book.hidden = false
                eye.hidden = false
                uj.hidden = false
                way2.hidden = false
                ddv.hidden = false
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
            }
            if (r.costumeId == 4) {
                r.costumeId = 1
                book.hidden = false
                uj.hidden = false
                r3s.hidden = false
                mummy.hidden = false
                eye.hidden = false
                way1.hidden = true
                tt.hidden = true
                way2.hidden = false
                ddv.hidden = false
                XX.hidden = true
                if (ppe2 == 1) {
                    ddv.destroy()
                }
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {
                    Isis_jj.hidden = true
                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (Isis_jj2 == 0) {

                }
            }
            if (r.costumeId == 3) {
                r.costumeId = 2
                r.scale = 0.35
                way2.hidden = true
                r3s.hidden = true
                o3o.hidden = false
                mummy.hidden = true
                r3o.hidden = false
                jf.hidden = false
                pot.hidden = false
                if (ii == 1) {
                    ppot.hidden = false
                }
                jjp.x = 300
                jjp.hidden = true
                iew.hidden = true
                tt.hidden = true
                XX.hidden = true
                ddv.hidden = true
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
            }
            if (QQget.hidden == false) {
                QQget.hidden = true
                XX.hidden = true
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
            }
            if (r.costumeId == 5) {
                r.costumeId = 0
                Isis.hidden = false
                Shu.hidden = false
                Osiris.hidden = false
                Seth.hidden = false
                cou.hidden = false
                r3s.hidden = true
                mummy.hidden = true
                way1.hidden = false
                tt.hidden = false
                way2.hidden = true
                XX.hidden = true
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
            }
            if (r.costumeId == 7) {
                r.costumeId = 0
                Shu.hidden = false
                Osiris.hidden = false
                Seth.hidden = false
                cco.hidden = true
                cou.hidden = false
                r3s.hidden = true
                mummy.hidden = true
                way1.hidden = false
                Isis.hidden = false
                tt.hidden = false
                way2.hidden = true
                XX.hidden = true
                lol.hidden = true
                lol2.hidden = true
                lol3.hidden = true
                lol4.hidden = true
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (Isis_jj2 == 1) {
                    Isis_jj.hidden = false
                } else {
                    Isis_jj.hidden = true
                }
            }
            if (r.costumeId == 8) {
                r.costumeId = 1
                book.hidden = false
                ddv.hidden = false
                uj.hidden = false
                r3s.hidden = false
                mummy.hidden = false
                way1.hidden = true
                tt.hidden = true
                way2.hidden = false
                XX.hidden = true
                mummy_up.hidden = true
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (edlp == 0) {
                    minecraft.hidden = true
                } else {
                    minecraft.hidden = false
                }
            }
            if (r.costumeId == 9) {
                kk = 0
                pot.y = 285
                r.costumeId = 2
                pot.costumeId = 0
                r.scale = 0.35
                way2.hidden = true
                r3s.hidden = true
                mummy.hidden = true
                o3o.hidden = false
                r3o.hidden = false
                jf.hidden = false
                pot.hidden = false
                if (ii == 1) {
                    ppot.hidden = false
                }
                jjp.x = 300
                jjp.hidden = true
                pot.scale = 0.1
                iew.hidden = true
                tt.hidden = true
                XX.hidden = true
                ddv.hidden = true
                pot.x = 292
                pot.y = 285
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (ii == 1) {
                    pot.destroy()
                    ppot.hidden = false
                }
            }
            if (r.costumeId == 16) {
                r.costumeId = 1
                D.hidden = true
                ddv.hidden = false
                book.hidden = false
                uj.hidden = false
                eye.hidden = false
                r3s.hidden = false
                mummy.hidden = false
                way1.hidden = true
                tt.hidden = true
                way2.hidden = false
                XX.hidden = true
                mummy_up.hidden = true
                r.scale = 0.35
                r.x = 320
                r.y = 280
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (edlp == 0) {
                    minecraft.hidden = true
                } else {
                    minecraft.hidden = false
                }
            }
            if (r.costumeId == 17) {
                D.hidden = true
                book.hidden = false
                uj.hidden = false
                eye.hidden = false
                r3s.hidden = false
                mummy.hidden = false
                way1.hidden = true
                tt.hidden = true
                way2.hidden = false
                XX.hidden = true
                mummy_up.hidden = true
                XX.hidden = true
                lp.hidden = false
                r.scale = 0.35
                r.x = 320
                r.y = 280
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (edlp == 0) {
                    minecraft.hidden = true
                } else {
                    minecraft.hidden = false
                }
                r.costumeId = 18
            }
            if (r.costumeId == 19) {
                r.costumeId = 1
                book.hidden = false
                ddv.hidden = false
                uj.hidden = false
                r3s.hidden = false
                mummy.hidden = false
                way1.hidden = true
                tt.hidden = true
                way2.hidden = false
                eye.hidden = false
                XX.hidden = true
                mummy_up.hidden = true
                r.scale = 0.35
                if (ppe2 !== 1) {
                    ppe.hidden = true
                } else {
                    ppe.hidden = false
                }
                if (Isis_jj2 == 0) {

                } else {
                    Isis_jj.hidden = false
                }
                if (QQ2 == 0) {
                    QQ.hidden = true
                } else {
                    QQ.hidden = false
                }
                if (ii == 0) {
                    pot_jj.hidden = true
                } else {
                    pot_jj.hidden = false
                }
                if (edlp == 0) {
                    minecraft.hidden = true
                } else {
                    minecraft.hidden = false
                }
                if (adj == 0) {
                    uj_jj.hidden = true
                } else {
                    uj_jj.hidden = false
                }
            }
            if (xo.hidden == false && adj == 1) {
                xo.hidden = true
                XX.hidden = true
            }
            if (r.costumeId == 20) {
                r.costumeId = 2
                r3o.hidden = false
                jf.hidden = false
                o3o_jj.hidden = true
                pot.hidden = false
                if (ii == 1) {
                    ppot.hidden = false
                }
                o3o.hidden = false
                XX.hidden = true
                llol.hidden = true
                llol2.hidden = true
            }
        }
        if (ddv.touched(cursor)) {
            way2.hidden = true
            r3s.hidden = true
            mummy.hidden = true
            ddv.hidden = true
            book.hidden = true
            ppe.hidden = false
            eye.hidden = true
            XX.hidden = false
            tt.hidden = true
            uj.hidden = true
            r.costumeId = 4
            r.scale = 0.5
        }
        if (ppe.touched(cursor) && ppe2 == 0) {
            ppe.scale = 0.3
            ppe.x = 50
            ppe.y = 50
            ppe2 = 1
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
        }
        if (ppe.touched(cursor) && ppe2 == 1 && ppe3 == 0 && ppe4 == 0) {
            ppe.costumeId = 1
            ppe3 = 1
        } else if (ppe3 == 1 && ppe.touched(cursor) && ppe4 == 0) {
            ppe3 = 0
            ppe.costumeId = 0
        }
        if (ppe.touched(cursor) && ppe2 == 1 && ppe3 == 0 && ppe4 == 1) {
            ppe.costumeId = 3
            ppe3 = 1
        } else if (ppe3 == 1 && ppe.touched(cursor) && ppe4 == 1) {
            ppe3 = 0
            ppe.costumeId = 2
        }

        if (tt.touched(cursor)) {
            cou.hidden = true
            way2.hidden = true
            r3s.hidden = true
            mummy.hidden = true
            r3o.hidden = true
            jf.hidden = true
            pot.hidden = true
            jjp.hidden = true
            iew.hidden = true
            XX.hidden = false
            ddv.hidden = true
            if (ppe2 == 0) {
                ppe.hidden = true
            } else if (ppe2 == 1) {
                ppe.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }

            way1.hidden = true
            tt.hidden = true
            Isis.hidden = true
            Shu.hidden = true
            Osiris.hidden = true
            Seth.hidden = true
            r.costumeId = 5
            r.scale = 0.5
        }
        if (ppe3 == 1 && ppe2 == 1 && (r.touched(cursor) && r.costumeId == 5)) {
            ppe.x = 440
            ppe.y = 300
            ppe.costumeId = 0
            ppe.scale = 0.7
            setTimeout(function () {
                ppe.costumeId = 2
                ppe4 = 1
            }, 1000);
            setTimeout(function () {
                ppe.x = 50
                ppe.y = 50
                ppe.scale = 0.35
            }, 2000);

        }
        if (iew.touched(cursor) && ppe2 == 1 && ppe3 == 1 && ppe4 == 1 && ppe5 == 0) {
            ppe.x = 400
            ppe.y = 300
            ppe.costumeId = 2
            ppe.scale = 0.7
            setTimeout(function () {
                QQ.hidden = false
                iew.costumeId = 1
                ppe.x = 50
                ppe.y = 50
                ppe.scale = 0.35
                ppe5++
            }, 1000);
        }
        if (QQ.touched(cursor) && r.costumeId == 3) {
            QQ.x = 120
            QQ.y = 50
            QQ.scale = 0.3
            QQ2 = 1
        } else if (QQ.touched(cursor) && QQ2 == 1) {
            QQget.hidden = false
            XX.hidden = false
        }
        if (book.touched(cursor)) {
            r.costumeId = 6
            r.scale = 0.5
            r3s.hidden = true
            mummy.hidden = true
            iew.hidden = true
            eye.hidden = true
            uj.hidden = true
            book.hidden = true
            XX.hidden = false
            ddv.hidden = true
            QQget.hidden = true
            way2.hidden = true
            if (ppe2 == 0) {
                ppe.hidden = true
            } else if (ppe2 == 1) {
                ppe.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
        }
        if (cou.touched(cursor)) {
            r.costumeId = 7
            r.scale = 0.45
            Isis.hidden = true
            Shu.hidden = true
            Osiris.hidden = true
            Seth.hidden = true
            cco.hidden = false
            XX.hidden = false
            way1.hidden = true
            cou.hidden = true
            tt.hidden = true
            lol.hidden = false
            lol2.hidden = false
            lol3.hidden = false
            lol4.hidden = false
            /*
            if (Isis_jj2 == 1) {
                Isis_jj.hidden = false
            }*/
            if (lolPassed == true) {  
                Isis_jj.hidden = false
            }
            if (ppe2 == 0) {
                ppe.hidden = true
            } else if (ppe2 == 1) {
                ppe.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
        if (lol.costumeId == 3 && lol2.costumeId == 0 && lol3.costumeId == 2 && lol4.costumeId == 1) {
            lol.destroy()
            lol2.destroy()
            lol3.destroy()
            lol4.destroy()
            cco.costumeId = 1
            lol.costumeId = 0
            lol2.costumeId = 0
            lol3.costumeId = 0
            lol4.costumeId = 0
            cco.x += 20
            cco.y -= 50
            Isis_jj.hidden = false
            Isis_jj.direction += 90
			lolPassed = true;
        }
        if (mummy.touched(cursor)) {
            mummy_up.x = 320
            mummy_up.y = 320
            way2.hidden = true
            r3s.hidden = true
            mummy.hidden = true
            ddv.hidden = true
            XX.hidden = false
            mummy_up.hidden = false
            tt.hidden = true
            eye.hidden = true
            way2.hidden = true
            uj.hidden = true
            book.hidden = true
            r.costumeId = 8
        }
        if (pot.touched(cursor) && kk == 0) {
            XX.hidden = false
            pot.costumeId = 0
            kk += 1
            r.costumeId = 9
            r.scale = 0.5
            pot.scale = 0.5
            pot.y = 335
            way2.hidden = true
            tt.hidden = true
            r3s.hidden = true
            o3o.hidden = true
            r3o.hidden = true
            jf.hidden = true
            pot.hidden = false
            if (ii == 1) {
                ppot.hidden = false
            }
            iew.hidden = true
            ddv.hidden = true
            ppe.hidden = true
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        } else if (pot.touched(cursor) && kk == 1 && Seth_jj2 == 1) {
            pot.hidden = true
            Seth_jj.hidden = true
            r.animate([10, 11, 12, 13, 14, 15], 10);
            kk = 2
        } else if (kk == 2) {
            pot_jj.y = 50
            pot_jj.x = 350
            pot.hidden = false
            pot_jj.scale = 0.3
            pot_jj.costumeId = 1
            pot.y += 50
            pot.x += 50
            r.costumeId = 9
            Seth_jj.hidden = false
            Seth_jj.costumeId = 0
            ii = 1
            kk--
            pot.costumeId = 1
            pot_jj.costumeId = 1
            if (ppe2 !== 1) {
                ppe.hidden = true
            } else {
                ppe.hidden = false
            }
            if (Isis_jj2 == 0) {

            } else {
                Isis_jj.hidden = false
            }
            if (QQ2 == 0) {
                QQ.hidden = true
            } else {
                QQ.hidden = false
            }
            if (ii == 0) {
                pot_jj.hidden = true
            } else {
                pot_jj.hidden = false
            }
        }
    })
    lol.when("click", function () {
        if (lol.costumeId != 3) {
            this.costumeId++
        } else {
            this.costumeId = 0
        }
    });
    lol2.when("click", function () {
        if (lol2.costumeId != 3) {
            this.costumeId++
        } else {
            this.costumeId = 0
        }
    });
    lol3.when("click", function () {
        if (lol3.costumeId != 3) {
            this.costumeId++
        } else {
            this.costumeId = 0
        }
    });
    lol4.when("click", function () {
        if (lol4.costumeId != 3) {
            this.costumeId++
        } else {
            this.costumeId = 0
        }
    });
    Isis_jj.when("click", function () {
        if (Isis_jj2 == 0) {
            Isis_jj2 = 1
            Isis_jj.x = 230
            Isis_jj.y = 50
            Isis_jj.scale = 0.3
        } else if (Isis_jj2 = 1) {
            if (Isis_jj.costumeId == 0) {
                Isis_jj.costumeId++
                jj++
            } else if (Isis_jj.costumeId == 1) {
                Isis_jj.costumeId--
                jj--
            }
        }
    });
    Isis.when("click", function () {
        if (jj == 1) {
            if (Isis.costumeId == 1) {
                return
            }
            Isis_jj.destroy()
            Isis.costumeId++
        }
    });
    mummy_up.when("click", function () {
        if (mummy_up.costumeId == 0) {
            mummy_up.costumeId++
            mummy_up.y += 50
            minecraft.hidden = false
        } else if (mummy_up.costumeId == 1) {
            setTimeout(function () {
                if (edlp == 0) {
                    minecraft.hidden = true
                }
                if (edlp == 1) {
                    minecraft.hidden = false
                }
            })

            mummy_up.costumeId--
            mummy_up.y -= 50
        }
    });
    Seth.when("click", function () {
        if (Seth_jj.hidden == true) {
            Seth.costumeId = 1
            Seth_jj.hidden = false
            Seth_jj.costumeId = 0
        } else if (Seth_jj2 == 1) {
            Seth.costumeId = 0
            Seth_jj.hidden = true
        }
    });
    Seth_jj.when("click", function () {
        if (Seth_jj.costumeId == 0 && Seth_jj2 == 0) {
            Seth_jj.costumeId = 1
            Seth_jj2++
        } else {
            Seth_jj.costumeId = 0
            Seth_jj2--
        }
    });
    pot_jj.when("click", function () {
        if (ii = 1) {
            if (pot_jj.costumeId == 1) {
                pot_jj.costumeId++
                ppw++
            } else if (pot_jj.costumeId == 2) {
                pot_jj.costumeId--
                ppw--
            }
        }
    });
    lp.when("click", function () {
        if (ms = 1) {
            if (lp.costumeId == 1) {
                lp.costumeId = 2
                xs = 1
            } else if (lp.costumeId == 2) {
                lp.costumeId = 1
                xs = 0
            }
        }
    });
    eye.when("click", function () {
        r.costumeId = 16
        r3s.hidden = true
        mummy.hidden = true
        iew.hidden = true
        uj.hidden = true
        book.hidden = true
        ddv.hidden = true
        QQget.hidden = true
        XX.hidden = false
        way2.hidden = true
        eye.hidden = true
        r.scale = 0.5
        if (ppe2 == 0) {
            ppe.hidden = true
        } else if (ppe2 == 1) {
            ppe.hidden = false
        }
        if (QQ2 == 0) {
            QQ.hidden = true
        } else {
            QQ.hidden = false
        }
        if (ii == 0) {
            pot_jj.hidden = true
        } else {
            pot_jj.hidden = false
        }
        if (Isis_jj2 == 0) {

        } else {
            Isis_jj.hidden = false
        }
    });
    r.when("click", function () {
        if (r.costumeId == 16 && ppw == 1) {
            D.hidden = false
            pot_jj.x = 521
            pot_jj.scale = 1
            pot_jj.y += 50
            setTimeout(function () {
                pot_jj.scale = 0.4
                pot_jj.y += 100
            }, 1000);
            setTimeout(function () {
                pot_jj.scale = 0.2
                pot_jj.y += 100
            }, 2000);
            setTimeout(function () {
                pot_jj.scale = 0.1
                pot_jj.y = 345
                pot_jj.x = 521
                r.scale = 0.5
                alert("請使用游標把綠寶石送入眼球部位你就能得到生命之符(PS:不能碰到黑線")
                oWo = 1
            }, 3000);
        }
    });
    lp.when("click", function () {
        if (qwe == 1) {
            r.costumeId = 1
            lp.costumeId = 1
            lp.y = 50
            lp.x = 350
            lp.scale = 0.3
            qwe = 0
            ms = 1
        }
    });
    Shu.when("click", function () {
        if (xs == 1) {
            if (Shu.costumeId == 1) {
                return
            }
            lp.destroy()
            Shu.costumeId++
        }
    });
    minecraft.when("click", function () {
        if (edlp == 0) {
            edlp = 1
            minecraft.y = 50
            minecraft.x = 400
            minecraft.direction += 90
            minecraft.hidden = false
        }
        if (edlp = 1) {
            minecraft.scale = 0.2
            if (minecraft.costumeId == 0) {
                minecraft.costumeId = 1
                ai = 1
            } else if (minecraft.costumeId == 1) {
                minecraft.costumeId = 0
                ai = 0
            }
        }
    });
    uj.when("click", function () {
        r.costumeId = 19
        way2.hidden = true
        r3s.hidden = true
        mummy.hidden = true
        uj_jj.hidden = false
        ddv.hidden = true
        eye.hidden = true
        book.hidden = true
        ppe.hidden = true
        XX.hidden = false
        tt.hidden = true
        uj.hidden = true
        r.scale = 0.7
    });
    uj_jj.when("click", function () {
        if (adj == 0) {
            uj_jj.x = 470
            uj_jj.y = 50
            uj_jj.scale = 0.2
            setTimeout(function () {
                adj = 1
            }, 500)
            uj_jj.hidden = false
        }
        if (adj == 1) {
            xo.hidden = false
            XX.hidden = false
        }
    });
    xo.when("click", function () {
        if (ai == 1) {
            o12 = 1
            minecraft.x = 455
            minecraft.y = 130
            setTimeout(function () {
                minecraft.costumeId = 2
                minecraft.scale = 0.5
            }, 1000)
            setTimeout(function () {
                o12 = 1
                minecraft.destroy()
                xo.costumeId = 1
            }, 2000)
        }
    });
    o3o.when("click", function () {
        r.costumeId = 20
        r3o.hidden = true
        jf.hidden = true
        pot.hidden = true
        if (ii == 1) {
            ppot.hidden = true
        }
        o3o.hidden = true
        o3o_jj.hidden = false
        XX.hidden = false
        llol.hidden = false
        llol2.hidden = false
    });
    o3o_jj.when("click", function () {
        if (lll == 1) {
            o3o.costumeId = 1
        }
    });
    llol.when("click", function () {
        if (lllooolll <= 8) {
            lllooolll++
        } else {
            lllooolll = 0
        }
    });
    llol2.when("click", function () {
        if (lllooolll2 <= 8) {
            lllooolll2++
        } else {
            lllooolll2 = 0
        }
    });
    Osiris_jj.when("click", function () {
        if (oo7 == 0) {
            Osiris_jj.x = 400
            Osiris_jj.y = 50
            Osiris_jj.scale = 0.15
            oo7 = 1
        } else {
            if (Osiris_jj.costumeId == 0) {
                Osiris_jj.costumeId = 1
                poq = 1
            } else if (Osiris_jj.costumeId == 1) {
                Osiris_jj.costumeId = 0
                poq = 0
            }
        }
    });
    Osiris.when("click", function () {
        if (poq == 1) {
            Osiris.costumeId = 1
            Osiris_jj.destroy()
        }
    });
    r.when("click", function () {
        if (and == 0) {
            return
        }
    });
}

function level_4() {
    setBackdrop("white")
    alert("點擊說謊的神像，答對後你就能逃出密室，若點錯...你將永遠被困在密室")
    setBackdrop("13.jpg");
    var Shu = createSprite("神像4-有.png");
    Shu.x = 100
    Shu.y = 370
    Shu.hidden = true
    var Osiris = createSprite("777.png");
    Osiris.x = 300
    Osiris.y = 370
    Osiris.hidden = true
    var Isis = createSprite("555.png");
    Isis.x = 500
    Isis.y = 370
    Isis.hidden = true
    var jjk = createSprite({
        x: 300,
        y: 400,
        scale: 0.4, // 1.2倍大
        costumes: ["9987.png"]
    });
    Shu.hidden = true
    Osiris.hidden = true
    Isis.hidden = true
    jjk.hidden = true
    var stairs = Math.floor(Math.random() * 3)
    forever(function () {
        if (stairs == 0) {
            stairs++
        }
        Shu.hidden = false
        Osiris.hidden = false
        Isis.hidden = false
        if (stairs == 6) {
            print("YOU WIN!!!", 55, 100, "white", 100)
        }
        if (stairs == 1) {
            print("舒:伊西絲說的可能是真話或是假話", 100, 30, "white", 30)
            print("俄西里斯:舒說的是假話", 100, 90, "white", 30)
            print("伊西絲:俄西里斯說的是假話", 100, 150, "white", 30)
        }
        if (stairs == 2) {
            print("舒:我們三個當中有人說真話", 100, 30, "white", 30)
            print("俄西里斯:有人說真話有人說假話", 100, 90, "white", 30)
            print("伊西絲:我們三個當中沒有人說假話", 100, 150, "white", 30)
        }
        if (stairs == 3) {
            print("舒:你們倆一個說的真話一個說的假話", 100, 30, "white", 30)
            print("俄西里斯:舒說的是假話", 100, 90, "white", 30)
            print("伊西絲:舒說的是真話", 100, 150, "white", 30)
        }
        if (stairs == 4) {
            Isis.destroy()
            Shu.destroy()
            Osiris.destroy()
            jjk.destroy()
        }
    });
    when("click", function () {
        if (stairs == 1) {
            if (Osiris.touched(cursor)) {
                sound.play("OOO.mp3")
                next_level();
                stairs = 4
            };
            if (Shu.touched(cursor) || Isis.touched(cursor)) {
                sound.play("XXX.mp3")
                stop();
            };
        } else if (stairs == 2) {
            if (Osiris.touched(cursor)) {
                sound.play("OOO.mp3")
                next_level();
                stairs = 4
            };
            if (Shu.touched(cursor) || Isis.touched(cursor)) {
                sound.play("XXX.mp3")
                stop();
            }
        }
    });
}
function level_5() {
    setBackdrop("white")
    var r = createSprite({
        x: 320,
        y: 280,
        scale: 0.35, // 1.2倍大
        costumes: ["r1-1-1.png", "r-2.png", "r3-1.png", "壁.png", "牆壁.png", "火爐大圖.png"
            , "書(開).png", "寶箱底圖-1.png", "5.png", "陶罐底圖-1.png", "陶罐_斧頭-1.png "
            , "陶罐_斧頭-2.png", " 陶罐_斧頭-3.png", "陶罐_斧頭-4.png", "陶罐_斧頭-5.png"
            , "陶罐_斧頭-6.png", "eye1透明路線.png", "eye3-黃色路線2.png", "r2-1(有火把)-1光束.png",
            "數-格.jpg", "寶箱底圖.png", "閉門.png", " 閉門-1.png", " 開門1-1.png", " 開門1-2.png",
            "開門1-3.png", "開門2.png", " 開門3.png", " 開門4.png", " 開門5.png", " 開門6.png",
            "開門7.png", "開門8.png", " 開門9.png", "開門10.png", " 開門11.png", " 開門12.png",
            "開門13.png", " 開門14.png", " 開門15.png", " 開門16.png"]
    });
    var playing = createSprite({
        x:320,
        y:250,
        scale:0.8,
        costumes:["end.png"]
    })
    var ppap = 0
    playing.hidden = true
    r.hidden = false
    setBackdrop("white");
    r.costumeId = 21
    r.animate([22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 8, function () {
        playing.hidden = false
        ppap = 1
    });
    forever(function(){
        if(ppap == 1){
            print(time,320,240,60,"black")
	    stop()
        }
    })
}

function next_level() {
    level++;
    for (var i = 0; i < sprites.length; i++) {
        sprites[i].destroy();
    }
    if (level == 1) level_1();
    if (level == 2) level_2();
    if (level == 3) level_3();
    if (level == 4) level_4();
    if (level == 5) level_5();
}
next_level()
