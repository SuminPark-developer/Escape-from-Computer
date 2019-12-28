class first_scene extends Phaser.Scene {
  constructor() {
    super({ key: "first_scene" });
  }
  preload() {
    this.load.image("game_title", "images/game_title.png");
    this.load.image("start_button", "images/start_button.png");
    this.load.image("press_start", "images/press_start.png");
    this.load.image("window", "images/window.png");
    this.load.image("window1", "images/window1.png");
    this.load.image("jongryo_button", "images/jongryo_button.png");
    this.load.image("restart_button", "images/restart_button.jpg");
    this.load.image("end_button", "images/end_button.jpg");
    this.load.image("jongryo", "images/jongryo.jpg");
    this.load.image("gameover", "images/gameover.jpg");
    this.load.image("chrome_no_bg", "images/chrome_no_bg.png");
    this.load.image("memojang", "images/memojang.png");
    this.load.image("button_exit", "images/button_exit.png");
    this.load.image("transparent", "images/transparent1.png");
    //////////////////////////////////////////////////////////////////////////
    for (var i = 1; i < 6; i++) {
      this.load.image("start_scenario" + i, "images/scenario_" + i + ".jpg");
    }
    for (var i = 1; i < 12; i++) {
      this.load.image("chrome_scenario_" + i, "images/chrome_scenario_" + i + ".jpg");
    }
    for (var i = 1; i < 13; i++) {
      this.load.image("dinosaur_scenario_" + i, "images/dinosaur_scenario_" + i + ".jpg");
    }
    for (var i = 1; i < 10; i++) {
      this.load.image("bug_scenario_" + i, "images/bug_scenario_" + i + ".jpg");
    }
    //////////////////////////////////////////////////////////////////////////
    this.load.image("icon_chrome", "images/icon_chrome.png");
    this.load.image("icon_edge", "images/icon_edge.png");
    this.load.image("icon_kakaotalk", "images/icon_kakaotalk.png");
    this.load.image("icon_newfolder", "images/icon_newfolder.png");
    this.load.image("icon_hugetong", "images/icon_hugetong.png");
    //////////////////////////////////////////////////////////////////////////
    this.load.image("txt_clickanywhere", "images/txt_clickanywhere.png");
    this.load.image("txt_gameover", "images/txt_gameover.png");
    this.load.image("txt_gamestart", "images/txt_gamestart.png");
    this.load.image("txt_getitems_0", "images/txt_getitems_0.png");
    this.load.image("txt_getitems_1", "images/txt_getitems_1.png");
    this.load.image("txt_getitems_2", "images/txt_getitems_2.png");
    this.load.image("txt_getitems_3", "images/txt_getitems_3.png");
    this.load.image("txt_googlehint", "images/txt_googlehint.png");
    this.load.image("txt_getstar_0", "images/txt_getstar_0.png");
    this.load.image("txt_getstar_1", "images/txt_getstar_1.png");
    this.load.image("txt_getmagnifier_0", "images/txt_getmagnifier_0.png");
    this.load.image("txt_getmagnifier_1", "images/txt_getmagnifier_1.png");
    this.load.image("txt_magnifier_hint", "images/txt_magnifier_hint.png");
    this.load.image("txt_gettrash_0", "images/txt_gettrash_0.png");
    this.load.image("txt_gettrash_1", "images/txt_gettrash_1.png");
    this.load.image("txt_googleface", "images/txt_googleface.png");
    //////////////////////////////////////////////////////////////////////////
    this.load.image("chrome", "images/chrome.png");
    this.load.image("google_face", "images/google_face.png");
    this.load.image("chrome_back", "images/chrome_back.png");
    this.load.image("chrome_exit", "images/chrome_exit.png");
    this.load.image("chrome_logo", "images/chrome_logo.png");
    this.load.image("chrome_home_search1", "images/chrome_home_search1.png");
    this.load.image("chrome_home_search_transparent", "images/chrome_home_search_transparent.png");
    this.load.image("chrome_home_search2", "images/chrome_home_search2.png");

    this.load.image("chrome_home_search_keyword1", "images/chrome_home_search_keyword1.png");
    this.load.image("chrome_home_search_keyword2", "images/chrome_home_search_keyword2.png");
    this.load.image("chrome_home_search_keyword3", "images/chrome_home_search_keyword3.png");
    this.load.image("chrome_home_search_keyword11", "images/chrome_home_search_keyword11.png");

    this.load.image("chrome_search1", "images/chrome_search1.png");
    this.load.image("chrome_search2", "images/chrome_search2.png");
    this.load.image("chrome_search_result", "images/chrome_search_result.png");
    this.load.image("chrome_top_name1", "images/chrome_top_name1.png");
    this.load.image("chrome_top_name2", "images/chrome_top_name2.png");
    this.load.image("chrome_top_name3", "images/chrome_top_name3.png");

    //와이파이 연결 이미지
    this.load.image("internet_connect", "images/internet_connect.png");
    this.load.image("internet_disconnect", "images/internet_disconnect.png");
    this.load.image("wifi_sejong_connect", "images/wifi_sejong_connect.png");
    this.load.image("wifi_list", "images/wifi_list.png");
    this.load.image("wifi_hidden", "images/wifi_hidden.png");
    this.load.image("wifi_sejong", "images/wifi_sejong.png");
    this.load.image("wifi_sejong_input", "images/wifi_sejong_input.png");
    this.load.image("wifi_sejong_input_button", "images/wifi_sejong_input_button.png");
    this.load.image("exclamation_mark", "images/exclamation_mark.png");
    ///////////////////움직이는사람 추가////////////////////////////
    this.load.image('magnifier', 'images/magnifier.png'); //돋보기
    this.load.image('magnifier_background', 'images/magnifier_background.png');
    this.load.image('magnifier_closeup', 'images/magnifier_closeup.png');
    this.load.image('memojang_background', 'images/memojang_background.png');
    this.load.image('wifi_password', 'images/wifi_password.PNG');
    this.load.image('txt_wifipassword', 'images/txt_wifipassword.png');

    this.load.image('ground', 'images/ground.png');
    this.load.image('ground_window', 'images/ground_window.png');
    this.load.image('ground_window2', 'images/ground_window2.png');
    this.load.image('trash', 'images/trash.png');
    this.load.image('trash_closeup', 'images/trash_closeup.png');
    this.load.image('ground_chrome', 'images/ground_chrome.png');
    this.load.image('star', 'images/star.png');
    this.load.image('star_closeup', 'images/star_closeup.png');
    this.load.spritesheet('dude', 'images/dude.png', { frameWidth: 212, frameHeight: 250 });
    ////////////////////////////////////////////////////////////////
    this.load.image('ms_search_result1', 'images/ms_search_result1.png');
    this.load.image('ms_search_result2', 'images/ms_search_result2.png');
    this.load.image('ms_search_result3', 'images/ms_search_result3.png');

    this.load.image('mac_search_result1', 'images/mac_search_result1.png');
    this.load.image('mac_search_result2', 'images/mac_search_result2.png');
    this.load.image('mac_search_result3', 'images/mac_search_result3.jpg');

    this.load.image('linux_search_result1', 'images/linux_search_result1.png');
    //////////////////맥//////////////////////////////////
    this.load.image('mac_memojang', 'images/mac_memojang.png');
    this.load.image('mac_window', 'images/mac_window.png');
    this.load.image('mac_top', 'images/mac_top.jpg');
    this.load.image('mac_bottom', 'images/mac_bottom.jpg');
    this.load.image("mac_jongryo_button1", "images/mac_jongryo_button1.jpg");
    this.load.image("mac_jongryo_button2", "images/mac_jongryo_button2.png");
    this.load.image("mac_restart_button", "images/mac_restart_button.png");
    this.load.image("mac_end_button", "images/mac_end_button.png");
    this.load.image("mac_jongryo", "images/mac_jongryo.png");
    ////////////////// mac - game_scene3//////////////////////////////////
    this.load.spritesheet('dude_female', 'images/dude_female.png', { frameWidth: 212, frameHeight: 250 });
    this.load.image('ground2', 'images/mac_bottom_ground.jpg');
    this.load.image('mac_wall', 'images/mac_wall.png');
    this.load.image('bell', 'images/bell.png');
    this.load.image('heart', 'images/heart_red.png');

    this.load.image('dinosaur1', 'images/dinosaur1.png');
    this.load.image('dinosaur2', 'images/dinosaur2.png');
    this.load.image('dinosaur3', 'images/dinosaur3.png');

    this.load.image('prison_background', 'images/prison_background.png');
    this.load.image('prison_bottom', 'images/prison_bottom.png');
    this.load.image('prison_top', 'images/prison_top.png');
    this.load.image('prison_wall', 'images/prison_wall.png');
    this.load.image('prison_wall2', 'images/prison_wall2.png');
    this.load.image('prison_wall3', 'images/prison_wall3.png');
    this.load.image('prison_wall4', 'images/prison_wall4.png');
    this.load.image('prison_wall5', 'images/prison_wall5.png');
    ///////////////공룡이 내는 퀴즈 3문제////////////////////////////////
    this.load.image("wordballoon", "images/wordballoon.png");
    this.load.image("quiz_1", "images/quiz_1.png"); //퀴즈 1번
    this.load.image("answer1_1", "images/answer1_1.png");
    this.load.image("answer1_2", "images/answer1_2.png");
    this.load.image("answer1_3", "images/answer1_3.png");

    this.load.image("quiz_2", "images/quiz_2.png"); //퀴즈 2번
    this.load.image("answer2_1", "images/answer2_1.png");
    this.load.image("answer2_2", "images/answer2_2.png");
    this.load.image("answer2_3", "images/answer2_3.png");
    this.load.image("answer2_4", "images/answer2_4.png");

    this.load.image("quiz_3", "images/quiz_3.png"); //퀴즈 3번
    this.load.image("answer3_1", "images/answer3_1.png");
    this.load.image("answer3_2", "images/answer3_2.png");
    this.load.image("answer3_3", "images/answer3_3.png");

    this.load.image("quiz_wrong", "images/quiz_wrong.png");
    this.load.image("quiz_restart_button", "images/quiz_restart_button.png");
    //////////////////////////////////////////////////
    this.load.image("txt_ending", "images/txt_ending.png");
    this.load.image("linux_penguin", "images/linux_penguin.png");
    this.load.image("ending_restart_button", "images/ending_restart_button.png");
    this.load.image("ending_quit_button", "images/ending_quit_button.png");
  }

  create() {
    let game_title = this.add.image(1204.5, 200, "game_title");
    let start_button = this.add.image(1204.5, 540, "start_button").setInteractive();

    start_button.on("pointerup", function (event) {
      this.scene.start("start_scenario");
    }, this);
  }
}
class start_scenario extends Phaser.Scene {
  constructor() {
    super({ key: "start_scenario" });
  }
  create() {
    this.anims.create({
      key: 'snooze',
      frames: [
        { key: 'start_scenario1' },
        { key: 'start_scenario2' },
        { key: 'start_scenario3' },
        { key: 'start_scenario4' },
        { key: 'start_scenario5', duration: 1000 }
      ],
      frameRate: 3,
      repeat: 0
    });

    this.add.sprite(960, 540, 'start_scenario1').play('snooze');

    let press_start = this.add.image(1700, 200, "press_start").setInteractive();
    this.tweens.add({

      targets: press_start,

      x: { value: 1700, duration: 4000, ease: 'Power2', delay: 400 },

      y: { value: 900, duration: 1500, ease: 'Bounce.easeOut' },

      scaleX: { value: 1.1, duration: 500, delay: 2000, yoyo: true },

      scaleY: { value: 1.1, duration: 500, delay: function (i, total, target) { return 1000 + Math.random() * 2000 }, yoyo: true },

      delay: 1000

    });
    press_start.on("pointerup", function (event) {
      this.scene.start("game_scene1");
    }, this);
    let memojang = this.add.image(2164.5, 540, "memojang");
    let txt_gamestart = this.add.image(2020, 100, "txt_gamestart");
  }
}

class game_scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "game_scene1" });
  }

  create() {
    graphics = this.add.graphics();

    let memojang = this.add.image(2164.5, 540, "memojang");
    let window1 = this.add.image(960, 540, "window1");

    let icon_hugetong = this.add.image(58, 220, "icon_hugetong");
    let icon_newfolder = this.add.image(57, 708, "icon_newfolder");
    let icon_edge = this.add.image(58, 555, "icon_edge");
    let icon_kakaotalk = this.add.image(58, 58, "icon_kakaotalk");

    let chrome_no_bg = this.add.image(58, 380, "chrome_no_bg").setInteractive(); //chrome 아이콘 떠다님.

    timeline = this.tweens.timeline({

      targets: chrome_no_bg,
      loop: -1, //무한반복

      tweens: [
        {
          x: 1800,
          ease: 'Sine.easeInOut',
          duration: 3000,
          yoyo: true
        },
        {
          y: 0,
          ease: 'Sine.easeOut',
          duration: 1000,
          offset: 0
        },
        {
          y: 600,
          ease: 'Sine.easeIn',
          duration: 1000
        },
        {
          y: 0,
          ease: 'Sine.easeOut',
          duration: 1000
        },
        {
          y: 100,
          ease: 'Sine.easeIn',
          duration: 1000
        },
        {
          y: 500,
          ease: 'Sine.easeOut',
          duration: 1000
        },
        {
          y: 380,
          ease: 'Sine.easeIn',
          duration: 1000
        }
      ]

    });
    console.log(timeline);

    chrome_no_bg.on("pointerdown", function (event) {
      this.scene.start("chrome_scenario");
    }, this);

    let jongryo_button1 = this.add.image(36, 1049, "jongryo_button").setInteractive();

    jongryo_button1.on("pointerup", function (event) {
      let jongryo = this.add.image(194, 938, "jongryo").setInteractive();
      let restart_button = this.add.image(123, 989, "restart_button").setInteractive();
      let end_button = this.add.image(156, 935, "end_button").setInteractive();
      let jongryo_button2 = this.add.image(36, 1049, "jongryo_button").setInteractive(); //jongryo_button2랑 jongryo_button1랑 이미지는 같음. 기술적으로 조금 차이가 있어서 두개로 나눔.
      restart_button.on("pointerup", function (event) {
        this.scene.start("first_scene");
      }, this);
      end_button.on("pointerup", function (event) {
        this.scene.start("gameover");
      }, this);
      jongryo_button2.on("pointerup", function (event) { //jongryo_button2를 눌렀을 때 지워주면 -> 밑에 쌓여있던 jongryo_button1이 드러나게 됨.

        jongryo.destroy();
        restart_button.destroy();
        end_button.destroy();
        jongryo_button2.destroy();

        jongryo = null;
        restart_button = null;
        end_button = null;
        jongryo_button2 = null;
      }, this);
    }, this);
  }
}
class chrome_scenario extends Phaser.Scene {
  constructor() {
    super({ key: "chrome_scenario" });
  }
  create() {
    this.anims.create({
      key: 'throw',
      frames: [
        { key: 'chrome_scenario_1' },
        { key: 'chrome_scenario_2' },
        { key: 'chrome_scenario_3' },
        { key: 'chrome_scenario_4' },
        { key: 'chrome_scenario_5' },
        { key: 'chrome_scenario_6' },
        { key: 'chrome_scenario_7' },
        { key: 'chrome_scenario_8' },
        { key: 'chrome_scenario_9' },
        { key: 'chrome_scenario_10' },
        { key: 'chrome_scenario_11', duration: 1000 }
      ],
      frameRate: 7,
      repeat: 0
    });

    this.add.sprite(960, 540, 'chrome_scenario_1').play('throw');
    //여기엔 전체 투명사진넣어주고
    let transparent = this.add.image(960, 540, "transparent").setInteractive();
    //(투명한 걸 위에 덮어 씌어줌) click anywhere -> 다음 게임 씬으로 넘어감.
    transparent.on("pointerdown", function (event) {
      this.scene.start("game_scene2");
    }, this);
    let memojang = this.add.image(2164.5, 540, "memojang");
    let txt_clickanywhere = this.add.image(2050, 100, "txt_clickanywhere");
  }
}

class game_scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "game_scene2" });
  }

  update() {
    if (cursors.left.isDown) {
      player.setVelocityX(-180);

      player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(180);

      player.anims.play('right', true);
    }
    else {
      player.setVelocityX(0);

      player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-530);
    }
  }

  create() {
    //공룡 video 삽입
    var video = document.createElement('video');
    video.playsinline = true;
    video.src = 'images/chrome_dinosaur.mp4';
    video.width = 752;
    video.height = 700;
    video.autoplay = true;

    var element = this.add.dom(1450, 340, video);

    video.addEventListener('ended', (event) => {
      element.setVisible(false);
    });

    let memojang = this.add.image(2164.5, 540, "memojang");
    let txt_gettrash_0 = this.add.image(2048, 148, "txt_gettrash_0");
    let txt_getstar_0 = this.add.image(2040, 100, "txt_getstar_0").setInteractive();
    let txt_getmagnifier_0 = this.add.image(2085, 200, "txt_getmagnifier_0").setInteractive();
    let txt_googlehint = this.add.image(2133, 270, "txt_googlehint").setInteractive();
    let window = this.add.image(960, 540, "window");
    let google_face = this.add.image(1450, 320, "google_face").setInteractive(); //google얼굴로 바꿈.
    let chrome_home_search1 = this.add.image(1440, 393, "chrome_home_search1").setInteractive();
    let chrome_home_search_transparent = this.add.image(1440, 393, "chrome_home_search_transparent").setInteractive();
    let icon_chrome = this.add.image(58, 380, "icon_chrome");
    let icon_hugetong = this.add.image(58, 220, "icon_hugetong");

    chrome_home_search1.on("pointerup", function (event) {
      //검색창 3개 뜨고
      let chrome_home_search2 = this.add.image(1440, 430, "chrome_home_search2").setInteractive();
      let chrome_home_search_keyword1 = this.add.image(1433, 419, "chrome_home_search_keyword1").setInteractive();

      chrome_home_search_keyword1.on("pointerup", function (event) { //윈도우에서 탈출하기 눌렀을 때
        let chrome_search_result = this.add.image(1450, 320, "chrome_search_result");
        let chrome_home_search_keyword11 = this.add.image(1315, 225, "chrome_home_search_keyword11");
        let chrome_top_name1 = this.add.image(1200, 100, "chrome_top_name1");
        let ms_search_result1 = this.add.image(1200, 430, "ms_search_result1");
        let ms_search_result2 = this.add.image(1440, 430, "ms_search_result2");
        let ms_search_result3 = this.add.image(1680, 430, "ms_search_result3");

        google_face.destroy();
        chrome_home_search1.destroy();
        chrome_home_search2.destroy();
        chrome_home_search_keyword1.destroy();

        google_face = null;
        chrome_home_search1 = null;
        chrome_home_search2 = null;
        chrome_home_search_keyword1 = null;

        let chrome_logo = this.add.image(1140, 225, "chrome_logo").setInteractive();

        chrome_logo.on("pointerup", function (event) { //크롬 로고 클릭했을 때
          let chrome = this.add.image(1450, 320, "chrome").setInteractive();
          let chrome_home_search1 = this.add.image(1440, 393, "chrome_home_search1").setInteractive();
          let chrome_home_search2 = this.add.image(1440, 430, "chrome_home_search2").setInteractive();
          let chrome_home_search_keyword3 = this.add.image(1398, 485, "chrome_home_search_keyword3").setInteractive();

          chrome_home_search_keyword3.on("pointerup", function (event) {
            let chrome_search_result = this.add.image(1450, 320, "chrome_search_result");
            let chrome_home_search_keyword33 = this.add.image(1440, 225, "chrome_home_search_keyword3");
            let chrome_top_name3 = this.add.image(1200, 100, "chrome_top_name3");
            let linux_search_result1 = this.add.image(1390, 350, "linux_search_result1");

            chrome.destroy();
            chrome_home_search1.destroy();
            chrome_home_search2.destroy();
            chrome_home_search_keyword3.destroy();

            chrome = null;
            chrome_home_search1 = null;
            chrome_home_search2 = null;
            chrome_home_search_keyword3 = null;

            let chrome_logo = this.add.image(1140, 225, "chrome_logo").setInteractive();
            chrome_logo.on("pointerup", function (event) { //크롬 로고 클릭했을 때
              let chrome = this.add.image(1450, 320, "chrome").setInteractive();
              let chrome_home_search1 = this.add.image(1440, 393, "chrome_home_search1").setInteractive();
              let chrome_home_search2 = this.add.image(1440, 430, "chrome_home_search2").setInteractive();
              let chrome_home_search_keyword2 = this.add.image(1399, 452, "chrome_home_search_keyword2").setInteractive();

              chrome_home_search_keyword2.on("pointerup", function (event) {
                let chrome_search_result = this.add.image(1450, 320, "chrome_search_result");
                let chrome_home_search_keyword22 = this.add.image(1440, 225, "chrome_home_search_keyword2");
                let chrome_top_name2 = this.add.image(1200, 100, "chrome_top_name2");

                let mac_search_result1 = this.add.image(1200, 430, "mac_search_result1");
                let mac_search_result2 = this.add.image(1440, 430, "mac_search_result2");
                let mac_search_result3 = this.add.image(1680, 430, "mac_search_result3").setInteractive();

                mac_search_result3.on("pointerup", function (event) { //game_scene3로 넘어감
                  this.scene.start("dino_video_scene");
                }, this);

                chrome.destroy();
                chrome_home_search1.destroy();
                chrome_home_search2.destroy();
                chrome_home_search_keyword2.destroy();

                chrome = null;
                chrome_home_search1 = null;
                chrome_home_search2 = null;
                chrome_home_search_keyword2 = null;

                let chrome_logo = this.add.image(1140, 225, "chrome_logo");
              }, this);
            }, this);
          }, this);
        }, this);
      }, this);
    }, this);

    this.input.addPointer(2);
    let icon_newfolder = this.add.image(57, 708, "icon_newfolder");
    let icon_edge = this.add.image(58, 555, "icon_edge");
    let icon_kakaotalk = this.add.image(58, 58, "icon_kakaotalk");

    graphics = this.add.graphics();

    let jongryo_button1 = this.add.image(36, 1049, "jongryo_button").setInteractive();

    jongryo_button1.on("pointerup", function (event) {
      let jongryo = this.add.image(194, 938, "jongryo").setInteractive();
      let restart_button = this.add.image(123, 989, "restart_button").setInteractive();
      let end_button = this.add.image(156, 935, "end_button").setInteractive();
      let jongryo_button2 = this.add.image(36, 1049, "jongryo_button").setInteractive(); //jongryo_button2랑 jongryo_button1랑 이미지는 같음. 기술적으로 조금 차이가 있어서 두개로 나눔.
      restart_button.on("pointerup", function (event) {
        this.scene.start("first_scene");
      }, this);
      end_button.on("pointerup", function (event) {
        this.scene.start("gameover");
      }, this);
      jongryo_button2.on("pointerup", function (event) { //jongryo_button2를 눌렀을 때 지워주면 -> 밑에 쌓여있던 jongryo_button1이 드러나게 됨.

        jongryo.destroy();
        restart_button.destroy();
        end_button.destroy();
        jongryo_button2.destroy();

        jongryo = null;
        restart_button = null;
        end_button = null;
        jongryo_button2 = null;

      }, this);

    }, this);
    // 와이파이 연결 안된거 클릭시
    let internet_disconnect_background = this.add.image(1640, 1052, "internet_disconnect"); //단순히 이미지 깔아주기 위해서 사용
    let internet_disconnect1 = this.add.image(1640, 1052, "internet_disconnect").setInteractive();
    internet_disconnect1.on("pointerup", function (event) {
      let wifi_list1 = this.add.image(1650, 827, "wifi_list").setInteractive();
      let wifi_hidden1 = this.add.image(1650, 777, "wifi_hidden").setInteractive();
      let internet_disconnect2 = this.add.image(1640, 1052, "internet_disconnect").setInteractive(); //internet_disconnect1 랑 internet_disconnect2 이미지는 같음. 기술적으로 조금 차이가 있어서 두개로 나눔.

      wifi_hidden1.on("pointerup", function (event) {
        if (camera_count === 0) { //카메라 흔들기
          this.cameras.main.shake(500);
          camera_count++;
        }
        let exclamation_mark = this.add.image(95, 170, "exclamation_mark");
      }, this);
      internet_disconnect2.on("pointerup", function (event) { //internet_disconnect2 눌렀을 때 지워주면 -> 밑에 쌓여있던 internet_disconnect1이 드러나게 됨.

        wifi_list1.destroy();
        wifi_hidden1.destroy();
        internet_disconnect2.destroy();

        wifi_list1 = null;
        wifi_hidden1 = null;
        internet_disconnect2 = null
      }, this);
    }, this);

    ground = this.physics.add.staticImage(960, 1021, 'ground').setScale(1.6).refreshBody();//맨 밑 바닥

    platform = this.physics.add.image(1450, 577, 'ground_chrome');//크롬 밑바닥
    platform2 = this.physics.add.image(1450, 260, 'ground_chrome2').setScale(0.1); // 크롬 로고 밑바닥

    platform.setImmovable(true);
    platform2.setImmovable(true);

    platform.body.allowGravity = false;
    platform2.body.allowGravity = false;

    player = this.physics.add.sprite(660, 540, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    function collectStar(player, star) {
      star.disableBody(false, true); //false를 함으로서 1번먹고나선 더이상 안나와서 못먹게 함.
      txt_getstar_0.destroy();
      txt_getstar_0 = null;
      let txt_getstar_1 = this.add.image(2040, 100, "txt_getstar_1");
      txt_googlehint.destroy();
      txt_googlehint = null;
      let txt_googleface = this.add.image(2110, 270, "txt_googleface");
      let star_closeup = this.add.image(2030, 970, "star_closeup").setScale(1.5);
    }
    function createStar(x, y, vx, vy) {
      var star = stars.get();

      if (!star) return;

      star
        .enableBody(true, x, y, true, true)
        .setVelocity(vx, vy);
    }

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group

      ({
        key: 'star',
        frameQuantity: 1,
        maxSize: 1,
        active: false,
        visible: false,
        enable: false,
        collideWorldBounds: true,
        bounceX: 0.5,
        bounceY: 0.5,
        dragX: 30,
        dragY: 0
      });

    this.physics.add.collider( //캐릭터랑 구글 로고 밑이랑 부딪힐 때
      player,
      platform2,
      function (_player, _platform2) {
        if (_player.body.touching.up && _platform2.body.touching.down) {
          createStar(
            _player.body.center.x,
            _platform2.body.top - 16,
            _player.body.velocity.x,
            _player.body.velocity.y * -3
          );
        }
      });

    this.physics.add.collider(player, platform);
    this.physics.add.collider(player, ground);
    this.physics.add.collider(stars, ground);
    this.physics.add.collider(stars, platform);
    this.physics.add.collider(stars, platform2);

    this.physics.add.overlap(player, stars, collectStar, null, this);

    //////////////윈도우 & 휴지통 숨겨진 바닥////////////////////

    ground_window = this.physics.add.image(445, 750, 'ground_window');//윈도우바탕화면에 숨겨진 바닥
    ground_window2 = this.physics.add.image(55, 285, 'ground_window2'); //휴지통 밑 바닥

    ground_window.setImmovable(true);
    ground_window2.setImmovable(true);

    ground_window.body.allowGravity = false;
    ground_window2.body.allowGravity = false;

    function collectStar2(player, trash) {
      trash.disableBody(false, true); //false를 함으로서 1번먹고나선 더이상 안나와서 못먹게 함.
      let txt_gettrash_1 = this.add.image(2048, 150, "txt_gettrash_1");
      let trash_closeup = this.add.image(2150, 970, "trash_closeup").setScale(2);
    }
    function createStar2(x, y, vx, vy) {
      var trash = trashes.get();

      if (!trash) return;

      trash
        .enableBody(true, x, y, true, true)
        .setVelocity(vx, vy);
    }

    cursors = this.input.keyboard.createCursorKeys();

    trashes = this.physics.add.group

      ({
        key: 'trash',
        frameQuantity: 1,
        maxSize: 1,
        active: false,
        visible: false,
        enable: false,
        collideWorldBounds: true,
        bounceX: 0.5,
        bounceY: 0.5,
        dragX: 30,
        dragY: 0
      });

    this.physics.add.collider( //캐릭터랑 휴지통 밑 or 위  부딪힐 때
      player,
      ground_window2,
      function (_player, _ground_window2) {
        if (_player.body.touching.up && _ground_window2.body.touching.down) {
          createStar2(
            _player.body.center.x,
            _ground_window2.body.top - 16,
            _player.body.velocity.x,
            _player.body.velocity.y * -3
          );
        }
        else if (_player.body.touching.down && _ground_window2.body.touching.up) {
          createStar2(
            _player.body.center.x,
            _ground_window2.body.top + 16,
            _player.body.velocity.x,
            _player.body.velocity.y * 3
          );
        }
      });
    this.physics.add.collider(player, ground);
    this.physics.add.collider(player, ground_window);
    this.physics.add.collider(trashes, ground);
    this.physics.add.collider(trashes, ground_window);
    this.physics.add.collider(trashes, ground_window2);

    this.physics.add.overlap(player, trashes, collectStar2, null, this);

    ///////////돋보기 클릭했을 때///////////////////////
    let magnifier = this.add.image(100, 1050, "magnifier").setInteractive();

    magnifier.on("pointerup", function (event) {

      let magnifier_closeup = this.add.image(2300, 970, "magnifier_closeup").setScale(0.5).setInteractive({ draggable: true });
      magnifier_closeup.on('drag', function (pointer, dragX, dragY) {

        this.x = dragX;
        this.y = dragY;

      });
      let txt_getmagnifier_1 = this.add.image(2085, 200, "txt_getmagnifier_1");
      let txt_magnifier_hint = this.add.image(2134, 338, "txt_magnifier_hint");
      magnifier.destroy();
      txt_getmagnifier_0.destroy();

      magnifier = null;
      txt_getmagnifier_0 = null;

      let magnifier_background = this.add.image(100, 1050, "magnifier_background");
    }, this);

    var frames = this.textures.get('magnifier_closeup').getFrameNames();
    var x = 100;
    var y = 100;

    var zone = this.add.zone(2150, 970).setCircleDropZone(60);
    var graphics = this.add.graphics();
    graphics.lineStyle(1, 0xffffff);
    graphics.strokeCircle(zone.x, zone.y, zone.input.hitArea.radius);

    this.input.on('dragstart', function (pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(1, 0xffffff);
      graphics.strokeCircle(zone.x, zone.y, zone.input.hitArea.radius);
    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {
      graphics.clear();
      graphics.lineStyle(1, 0xffffff);
      graphics.strokeCircle(zone.x, zone.y, zone.input.hitArea.radius);
    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;
    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
      else {
        let wifi_password = this.add.image(960, 540, "wifi_password").setInteractive();
        let memojang_background = this.add.image(2150, 954, "memojang_background").setInteractive();

        internet_disconnect1.on("pointerup", function (event) {

          let wifi_list2 = this.add.image(1650, 827, "wifi_list");
          let wifi_hidden2 = this.add.image(1650, 777, "wifi_hidden").setInteractive();

          internet_disconnect1.destroy();
          internet_disconnect1 = null;

          let wifi_sejong = this.add.image(1650, 678, "wifi_sejong").setInteractive();

          wifi_sejong.on("pointerup", function (event) {
            let wifi_sejong_input = this.add.image(1650, 600, "wifi_sejong_input").setInteractive();
            let wifi_sejong_input_button = this.add.image(1563, 688, "wifi_sejong_input_button").setInteractive();

            wifi_sejong.destroy();
            wifi_hidden2.destroy();

            wifi_sejong = null;
            wifi_hidden2 = null;

            //다음 클릭했을 시
            wifi_sejong_input_button.on("pointerup", function (event) {
              wifi_sejong_input.destroy();
              wifi_sejong_input_button.destroy();
              chrome_home_search_transparent.destroy();

              wifi_sejong_input = null;
              wifi_sejong_input_button = null;
              chrome_home_search_transparent = null;

              var internet_connect = this.add.image(1640, 1052, "internet_connect");
              var wifi_sejong_conncet = this.add.image(1486, 692, "wifi_sejong_connect");
            }, this);
          }, this);
        }, this);

        //와이파이 비번 이미지 클릭했을 시
        wifi_password.on("pointerup", function (event) {
          let txt_wifipassword = this.add.image(2100, 382, "txt_wifipassword");

          wifi_password.destroy();

          wifi_password = null;

        }, this);
        graphics.clear();
      }
    }, this);
  }
}
class dino_video_scene extends Phaser.Scene {
  constructor() {
    super({ key: "dino_video_scene" });
  }
  create() {
    //여주인공 & 공룡 video 삽입
    var video2 = document.createElement('video');

    video2.playsinline = true;
    video2.src = 'images/dinooo.mp4';
    video2.width = 2409;
    video2.height = 1080;
    video2.autoplay = true;

    var element2 = this.add.dom(1204.5, 540, video2);

    video2.addEventListener('ended', (event) => {

      element2.setVisible(false);
      this.scene.start("game_scene3");
    });
    ///////video 끝///////
  }
}
class game_scene3 extends Phaser.Scene {
  constructor() {
    super({ key: "game_scene3" });
  }
  update() {
    if (cursors3.left.isDown) {
      player3.setVelocityX(-180);

      player3.anims.play('left3', true);
    }
    else if (cursors3.right.isDown) {
      player3.setVelocityX(180);

      player3.anims.play('right3', true);
    }
    else {
      player3.setVelocityX(0);

      player3.anims.play('turn3');
    }
    if (cursors3.up.isDown && player3.body.touching.down) {
      player3.setVelocityY(-530);
    }
    if (cursors2.A.isDown) {
      player2.setVelocityX(-180);

      player2.anims.play('left2', true);
    }
    else if (cursors2.D.isDown) {
      player2.setVelocityX(180);

      player2.anims.play('right2', true);
    }
    else {
      player2.setVelocityX(0);

      player2.anims.play('turn2');
    }
    if (cursors2.W.isDown && player2.body.touching.down) {
      player2.setVelocityY(-530);
    }
  }

  create() {
    let mac_window = this.add.image(960, 540, "mac_window");
    let mac_memojang = this.add.image(2164.5, 540, "mac_memojang");
    let mac_top = this.add.image(960, 16, "mac_top");
    let mac_bottom = this.add.image(960, 1037, "mac_bottom");
    let dinosaur3 = this.add.image(2100, 790, "dinosaur3"); //공룡 잠
    let mac_jongryo_button1 = this.add.image(42, 16, "mac_jongryo_button1").setInteractive();

    mac_jongryo_button1.on("pointerup", function (event) {
      let mac_jongryo = this.add.image(231, 181, "mac_jongryo").setInteractive();
      let mac_restart_button = this.add.image(231, 256, "mac_restart_button").setInteractive();
      let mac_end_button = this.add.image(231, 290, "mac_end_button").setInteractive();
      let mac_jongryo_button2 = this.add.image(42, 16, "mac_jongryo_button2").setInteractive(); //jongryo_button2랑 jongryo_button1랑 이미지는 같음. 기술적으로 조금 차이가 있어서 두개로 나눔.
      mac_restart_button.on("pointerup", function (event) {
        this.scene.start("game_scene3");
      }, this);
      mac_end_button.on("pointerup", function (event) {
        this.scene.start("gameover");
      }, this);
      mac_jongryo_button2.on("pointerup", function (event) { //jongryo_button2를 눌렀을 때 지워주면 -> 밑에 쌓여있던 jongryo_button1이 드러나게 됨.

        mac_jongryo.destroy();
        mac_restart_button.destroy();
        mac_end_button.destroy();
        mac_jongryo_button2.destroy();

        mac_jongryo = null;
        mac_restart_button = null;
        mac_end_button = null;
        mac_jongryo_button2 = null;

      }, this);

    }, this);

    ground2 = this.physics.add.staticImage(960, 994, 'ground2').refreshBody();//맨 밑 바닥

    mac_wall = this.physics.add.image(900, 500, 'mac_wall').setScale(4);
    mac_wall.setImmovable(true);
    mac_wall.body.allowGravity = false;

    var prison_bottom = this.physics.add.staticImage(1500, 400, 'prison_bottom').setInteractive().refreshBody();
    var prison_top = this.physics.add.staticImage(1500, 100, 'prison_top').setInteractive().refreshBody();
    var prison_wall = this.physics.add.staticImage(1300, 250, 'prison_wall').setInteractive().refreshBody();
    var prison_wall2 = this.physics.add.staticImage(1700, 250, 'prison_wall2').setInteractive().refreshBody();

    player2 = this.physics.add.sprite(660, 540, 'dude_female');
    player3 = this.physics.add.sprite(1500, 250, 'dude');

    player2.setBounce(0.2);
    player2.setCollideWorldBounds(true);

    player3.setBounce(0.2);
    player3.setCollideWorldBounds(true);
    ///////시리/////////////////////
    this.anims.create({
      key: 'left2',
      frames: this.anims.generateFrameNumbers('dude_female', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn2',
      frames: [{ key: 'dude_female', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right2',
      frames: this.anims.generateFrameNumbers('dude_female', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
    /////////주인공///////////////////
    this.anims.create({
      key: 'left3',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn3',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right3',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    function collectStar4(player2, bell) { // 알람시계 먹는 함수.
      bell.disableBody(false, true); //false를 함으로서 1번먹고나선 더이상 안나와서 못먹게 함.
      let bell2 = this.add.image(200, 500, "bell").setInteractive(); //같은 알람시계인데 변수명 다르게 한번 더 선언.

      if (bell_count === 0) { //카메라 흔들기
        this.cameras.main.shake(500);
        bell_count++;
      }

      bell2.on("pointerdown", function (event) {
        this.scene.start("dinosaur_scenario");
      }
        , this);
    }
    function createStar4(x, y, vx, vy) { //알람시계 생성
      var bell = bells.get();


      if (!bell) return;

      bell
        .enableBody(true, x, y, true, true)
        .setVelocity(vx, vy);
    }
    bells = this.physics.add.group

      ({
        key: 'bell',
        frameQuantity: 1,
        maxSize: 1,
        active: false,
        visible: false,
        enable: false,
        collideWorldBounds: true,
        bounceX: 0.5,
        bounceY: 0.5,
        dragX: 30,
        dragY: 0
      });

    this.physics.add.collider( //시리랑 벽이랑 부딪힐 때
      player2,
      mac_wall,
      function (_player2, _mac_wall) {
        if (_player2.body.touching.right && _mac_wall.body.touching.left) {
          createStar4(
            _player2.body.center.x,
            _mac_wall.body.top - 16,
            _player2.body.velocity.x,
            _player2.body.velocity.y * -3
          );

        }

      });

    function createStar3(x, y, vx, vy) { //하트 생성
      var heart = heartes.get();

      if (!heart) return;

      heart
        .enableBody(true, x, y, true, true)
        .setVelocity(vx, vy);
    }
    heartes = this.physics.add.group

      ({
        key: 'heart',
        frameQuantity: 1,
        maxSize: 1,
        active: false,
        visible: false,
        enable: false,
        collideWorldBounds: true,
        bounceX: 0.5,
        bounceY: 0.5,
        dragX: 30,
        dragY: 0
      });

    this.physics.add.collider( //주인공이랑 시리랑 부딪힐 때
      player2,
      player3,
      function (_player2, _player3) {
        if (_player2.body.touching.up && _player3.body.touching.down) {
          createStar3(
            _player2.body.center.x,
            _player3.body.top - 16,
            _player2.body.velocity.x,
            _player2.body.velocity.y * -3
          );
        }
        else if (_player2.body.touching.down && _player3.body.touching.up) {
          createStar3(
            _player2.body.center.x,
            _player3.body.top + 16,
            _player2.body.velocity.x,
            _player2.body.velocity.y * 3
          );

        }

      });

    cursors2 = this.input.keyboard.addKeys('W,A,S,D');
    cursors3 = this.input.keyboard.createCursorKeys();

    //땅바닥이랑 충돌
    this.physics.add.collider(player2, ground2);
    this.physics.add.collider(player3, ground2);
    this.physics.add.collider(heartes, ground2);
    this.physics.add.collider(bells, ground2);

    //알람시계 먹음
    this.physics.add.overlap(player2, bells, collectStar4, null, this);

    //시리 충돌
    this.physics.add.collider(player2, prison_bottom);
    this.physics.add.collider(player2, prison_top);
    this.physics.add.collider(player2, prison_wall);
    this.physics.add.collider(player2, prison_wall2);
    this.physics.add.collider(player2, mac_wall);
    //주인공 충돌
    this.physics.add.collider(player3, prison_bottom);
    this.physics.add.collider(player3, prison_top);
    this.physics.add.collider(player3, prison_wall);
    this.physics.add.collider(player3, prison_wall2);
    this.physics.add.collider(player3, mac_wall);

    let prison_wall3 = this.add.image(1400, 250, 'prison_wall3');
    let prison_wall4 = this.add.image(1500, 250, 'prison_wall4');
    let prison_wall5 = this.add.image(1600, 250, 'prison_wall5');
  }
}
class dinosaur_scenario extends Phaser.Scene {
  constructor() {
    super({ key: "dinosaur_scenario" });
  }
  create() {
    this.anims.create({
      key: 'dinosaur_talk',
      frames: [
        { key: 'dinosaur_scenario_1' },
        { key: 'dinosaur_scenario_2' },
        { key: 'dinosaur_scenario_3' },
        { key: 'dinosaur_scenario_4' },
        { key: 'dinosaur_scenario_5' },
        { key: 'dinosaur_scenario_6' },
        { key: 'dinosaur_scenario_7' },
        { key: 'dinosaur_scenario_8' },
        { key: 'dinosaur_scenario_9' },
        { key: 'dinosaur_scenario_10' },
        { key: 'dinosaur_scenario_11' },
        { key: 'dinosaur_scenario_12', duration: 1000 }
      ],
      frameRate: 1,
      repeat: 0
    });

    this.add.sprite(1204.5, 540, 'dinosaur_scenario_1').play('dinosaur_talk');

    //여기엔 전체 투명사진넣어주고
    let transparent = this.add.image(960, 540, "transparent").setInteractive();
    //(투명한 걸 위에 덮어 씌어줌) click anywhere -> 다음 게임 씬으로 넘어감.
    transparent.on("pointerdown", function (event) {
      this.scene.start("game_scene4");
    }
      , this);
  }
}
class game_scene4 extends Phaser.Scene {
  constructor() {
    super({ key: "game_scene4" });
  }
  update() {
    ///////////
    if (cursors3.left.isDown) {
      player3.setVelocityX(-180);

      player3.anims.play("left3", true);
    }
    else if (cursors3.right.isDown) {
      player3.setVelocityX(180);

      player3.anims.play("right3", true);
    }
    else {
      player3.setVelocityX(0);

      player3.anims.play("turn3");
    }
    if (cursors3.up.isDown && player3.body.touching.down) {
      player3.setVelocityY(-530);
    }
    if (cursors2.A.isDown) {
      player2.setVelocityX(-180);

      player2.anims.play("left2", true);
    }
    else if (cursors2.D.isDown) {
      player2.setVelocityX(180);

      player2.anims.play("right2", true);
    }
    else {
      player2.setVelocityX(0);

      player2.anims.play("turn2");
    }

    if (cursors2.W.isDown && player2.body.touching.down) {
      player2.setVelocityY(-530);
    }
  }
  create() {
    let mac_window = this.add.image(960, 540, "mac_window");
    let mac_memojang = this.add.image(2164.5, 540, "mac_memojang");
    let mac_top = this.add.image(960, 16, "mac_top");
    let mac_bottom = this.add.image(960, 1037, "mac_bottom");
    let dinosaur1 = this.add.image(2100, 790, "dinosaur1"); //공룡 화남
    let mac_jongryo_button1 = this.add.image(42, 16, "mac_jongryo_button1").setInteractive();

    mac_jongryo_button1.on(
      "pointerup",
      function (event) {
        let mac_jongryo = this.add
          .image(231, 181, "mac_jongryo")
          .setInteractive();
        let mac_restart_button = this.add
          .image(231, 256, "mac_restart_button")
          .setInteractive();
        let mac_end_button = this.add
          .image(231, 290, "mac_end_button")
          .setInteractive();
        let mac_jongryo_button2 = this.add
          .image(42, 16, "mac_jongryo_button2")
          .setInteractive(); //jongryo_button2랑 jongryo_button1랑 이미지는 같음. 기술적으로 조금 차이가 있어서 두개로 나눔.
        mac_restart_button.on(
          "pointerup",
          function (event) {
            this.scene.start("game_scene3");
          },
          this
        );
        mac_end_button.on(
          "pointerup",
          function (event) {
            this.scene.start("gameover");
          },
          this
        );
        mac_jongryo_button2.on(
          "pointerup",
          function (event) {
            //jongryo_button2를 눌렀을 때 지워주면 -> 밑에 쌓여있던 jongryo_button1이 드러나게 됨.

            mac_jongryo.destroy();
            mac_restart_button.destroy();
            mac_end_button.destroy();
            mac_jongryo_button2.destroy();

            mac_jongryo = null;
            mac_restart_button = null;
            mac_end_button = null;
            mac_jongryo_button2 = null;
          },
          this
        );
      },
      this
    );

    ground2 = this.physics.add.staticImage(960, 994, "ground2").refreshBody(); //맨 밑 바닥

    mac_wall = this.physics.add.image(900, 500, "mac_wall").setScale(4);
    mac_wall.setImmovable(true);
    mac_wall.body.allowGravity = false;

    var prison_bottom = this.physics.add
      .staticImage(1500, 400, "prison_bottom")
      .setInteractive()
      .refreshBody();
    var prison_top = this.physics.add
      .staticImage(1500, 100, "prison_top")
      .setInteractive()
      .refreshBody();
    var prison_wall = this.physics.add
      .staticImage(1300, 250, "prison_wall")
      .setInteractive()
      .refreshBody();
    var prison_wall2 = this.physics.add
      .staticImage(1700, 250, "prison_wall2")
      .setInteractive()
      .refreshBody();
    player2 = this.physics.add.sprite(660, 540, "dude_female");

    player3 = this.physics.add.sprite(1500, 250, "dude");

    player2.setBounce(0.2);
    player2.setCollideWorldBounds(true);

    player3.setBounce(0.2);
    player3.setCollideWorldBounds(true);
    //////////시리///////////////////
    this.anims.create({
      key: "left2",
      frames: this.anims.generateFrameNumbers("dude_female", {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn2",
      frames: [{ key: "dude_female", frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "right2",
      frames: this.anims.generateFrameNumbers("dude_female", {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });
    //////////주인공///////////////////
    this.anims.create({
      key: "left3",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn3",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "right3",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    function collectStar3(player2, heart) {
      // 하트 먹는 함수.
      heart.disableBody(false, true); //false를 함으로서 1번먹고나선 더이상 안나와서 못먹게 함.
      let heart2 = this.add.image(200, 500, "heart").setInteractive(); //같은 하트인데 변수명 다르게 한번 더 선언.

      heart2.on(
        "pointerdown",
        function (event) {
          this.scene.start("bug_scenario");
        },
        this
      );
    }

    function createStar3(x, y, vx, vy) {
      //하트 생성
      var heart = heartes.get();

      if (!heart) return;

      heart.enableBody(true, x, y, true, true).setVelocity(vx, vy);
    }
    heartes = this.physics.add.group({
      key: "heart",
      frameQuantity: 1,
      maxSize: 1,
      active: false,
      visible: false,
      enable: false,
      collideWorldBounds: true,
      bounceX: 0.5,
      bounceY: 0.5,
      dragX: 30,
      dragY: 0
    });

    this.physics.add.collider(
      //주인공이랑 시리랑 부딪힐 때
      player2,
      player3,
      function (_player2, _player3) {
        if (_player2.body.touching.right && _player3.body.touching.left) {
          createStar3(
            _player2.body.center.x,
            _player3.body.top - 500,
            _player2.body.velocity.x,
            _player2.body.velocity.y * -3
          );
        } else if (
          _player2.body.touching.left &&
          _player3.body.touching.right
        ) {
          createStar3(
            _player2.body.center.x,
            _player3.body.top - 500,
            _player2.body.velocity.x,
            _player2.body.velocity.y * -3
          );
        }
      }
    );
    cursors2 = this.input.keyboard.addKeys("W,A,S,D");
    cursors3 = this.input.keyboard.createCursorKeys();

    //땅바닥이랑 충돌
    this.physics.add.collider(player2, ground2);
    this.physics.add.collider(player3, ground2);
    this.physics.add.collider(heartes, ground2);

    //하트 먹음
    this.physics.add.overlap(player2, heartes, collectStar3, null, this);

    //시리 충돌
    this.physics.add.collider(player2, prison_bottom);
    this.physics.add.collider(player2, prison_top);
    this.physics.add.collider(player2, prison_wall);
    this.physics.add.collider(player2, prison_wall2);
    this.physics.add.collider(player2, mac_wall);

    //주인공 충돌
    this.physics.add.collider(player3, prison_bottom);
    this.physics.add.collider(player3, prison_top);
    this.physics.add.collider(player3, prison_wall);
    this.physics.add.collider(player3, prison_wall2);
    this.physics.add.collider(player3, mac_wall);

    let prison_wall3 = this.add
      .image(1400, 250, "prison_wall3")
      .setInteractive();
    let prison_wall4 = this.add
      .image(1500, 250, "prison_wall4")
      .setInteractive();
    let prison_wall5 = this.add
      .image(1600, 250, "prison_wall5")
      .setInteractive();
    let wordballoon = this.add
      .image(1450, 780, "wordballoon").setScale(2.7);
    let quiz_1 = this.add
      .image(1450, 770, "quiz_1")
      .setScale(0.9)
      .setInteractive();

    let problem1_1 = this.add
      .image(1220, 830, "answer1_1")
      .setInteractive();
    let problem1_2 = this.add
      .image(1580, 830, "answer1_2")
      .setInteractive();
    let problem1_3 = this.add
      .image(1218, 900, "answer1_3")
      .setInteractive();

    problem1_2.on(
      "pointerup",
      function (event) {
        // 3:20 PM은 오답 -> 퀴즈 처음으로
        quiz_1.destroy();
        problem1_1.destroy();
        problem1_2.destroy();
        problem1_3.destroy();

        quiz_1 = null;
        problem1_1 = null;
        problem1_2 = null;
        problem1_3 = null;

        let quiz_wrong = this.add
          .image(1450, 850, "quiz_wrong")
          .setScale(0.97)
          .setInteractive();
        let quiz_restart_button1 = this.add
          .image(1586, 922, "quiz_restart_button")
          .setInteractive();
        let quiz_restart_button2 = this.add
          .image(1720, 922, "quiz_restart_button")
          .setInteractive();

        quiz_restart_button1.on(
          "pointerdown",
          function (event) {
            this.scene.start("dinosaur_scenario");
          },
          this
        );

        quiz_restart_button2.on(
          "pointerdown",
          function (event) {
            this.scene.start("dinosaur_scenario");
          },
          this
        );

      },
      this
    );

    problem1_3.on(
      "pointerup",
      function (event) {
        // 9:41PM 은 오답 -> 퀴즈 처음으로
        quiz_1.destroy();
        problem1_1.destroy();
        problem1_2.destroy();
        problem1_3.destroy();

        quiz_1 = null;
        problem1_1 = null;
        problem1_2 = null;
        problem1_3 = null;

        let quiz_wrong = this.add
          .image(1450, 850, "quiz_wrong")
          .setScale(0.97)
          .setInteractive();
        let quiz_restart_button1 = this.add
          .image(1586, 922, "quiz_restart_button")
          .setInteractive();
        let quiz_restart_button2 = this.add
          .image(1720, 922, "quiz_restart_button")
          .setInteractive();

        quiz_restart_button1.on(
          "pointerdown",
          function (event) {
            this.scene.start("dinosaur_scenario");
          },
          this
        );

        quiz_restart_button2.on(
          "pointerdown",
          function (event) {
            this.scene.start("dinosaur_scenario");
          },
          this
        );

      },
      this
    );

    problem1_1.on(
      "pointerup",
      function (event) {
        //정답 -> 다음 quiz(2번)로 넘어감.
        quiz_1.destroy();
        problem1_1.destroy();
        problem1_2.destroy();
        problem1_3.destroy();

        quiz_1 = null;
        problem1_1 = null;
        problem1_2 = null;
        problem1_3 = null;

        let quiz_2 = this.add
          .image(1450, 770, "quiz_2")
          .setScale(0.9)
          .setInteractive();
        let problem2_1 = this.add
          .image(1220, 830, "answer2_1")
          .setInteractive();
        let problem2_2 = this.add
          .image(1580, 830, "answer2_2")
          .setInteractive();
        let problem2_3 = this.add
          .image(1220, 900, "answer2_3")
          .setInteractive();
        let problem2_4 = this.add
          .image(1580, 900, "answer2_4")
          .setInteractive();

        problem2_1.on(
          "pointerup",
          function (event) {
            // A star는 오답 -> 퀴즈 처음으로
            quiz_2.destroy();
            problem2_1.destroy();
            problem2_2.destroy();
            problem2_3.destroy();
            problem2_4.destroy();

            quiz_2 = null;
            problem2_1 = null;
            problem2_2 = null;
            problem2_3 = null;
            problem2_4 = null;

            let quiz_wrong = this.add
              .image(1450, 850, "quiz_wrong")
              .setScale(0.97)
              .setInteractive();
            let quiz_restart_button1 = this.add
              .image(1586, 922, "quiz_restart_button")
              .setInteractive();
            let quiz_restart_button2 = this.add
              .image(1720, 922, "quiz_restart_button")
              .setInteractive();

            quiz_restart_button1.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

            quiz_restart_button2.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

          },
          this
        );

        problem2_2.on(
          "pointerup",
          function (event) {
            // A trash는 오답 -> 퀴즈 처음으로
            quiz_2.destroy();
            problem2_1.destroy();
            problem2_2.destroy();
            problem2_3.destroy();
            problem2_4.destroy();

            quiz_2 = null;
            problem2_1 = null;
            problem2_2 = null;
            problem2_3 = null;
            problem2_4 = null;

            let quiz_wrong = this.add
              .image(1450, 850, "quiz_wrong")
              .setScale(0.97)
              .setInteractive();
            let quiz_restart_button1 = this.add
              .image(1586, 922, "quiz_restart_button")
              .setInteractive();
            let quiz_restart_button2 = this.add
              .image(1720, 922, "quiz_restart_button")
              .setInteractive();
            quiz_restart_button1.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

            quiz_restart_button2.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

          },
          this
        );

        problem2_4.on(
          "pointerup",
          function (event) {
            // A magnifier는 오답 -> 퀴즈 처음으로
            quiz_2.destroy();
            problem2_1.destroy();
            problem2_2.destroy();
            problem2_3.destroy();
            problem2_4.destroy();

            quiz_2 = null;
            problem2_1 = null;
            problem2_2 = null;
            problem2_3 = null;
            problem2_4 = null;

            let quiz_wrong = this.add
              .image(1450, 850, "quiz_wrong")
              .setScale(0.97)
              .setInteractive();
            let quiz_restart_button1 = this.add
              .image(1586, 922, "quiz_restart_button")
              .setInteractive();
            let quiz_restart_button2 = this.add
              .image(1720, 922, "quiz_restart_button")
              .setInteractive();

            quiz_restart_button1.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

            quiz_restart_button2.on(
              "pointerdown",
              function (event) {
                this.scene.start("dinosaur_scenario");
              },
              this
            );

          },
          this
        );

        problem2_3.on(
          "pointerup",
          function (event) {
            //정답 -> 다음 quiz(3번)로 넘어감.
            quiz_2.destroy();
            problem2_1.destroy();
            problem2_2.destroy();
            problem2_3.destroy();
            problem2_4.destroy();

            quiz_2 = null;
            problem2_1 = null;
            problem2_2 = null;
            problem2_3 = null;
            problem2_4 = null;

            let quiz_3 = this.add
              .image(1400, 770, "quiz_3")
              .setInteractive();
            let problem3_1 = this.add
              .image(1220, 830, "answer3_1")
              .setInteractive();
            let problem3_2 = this.add
              .image(1580, 830, "answer3_2")
              .setInteractive();
            let problem3_3 = this.add
              .image(1220, 900, "answer3_3")
              .setInteractive();

            problem3_1.on(
              "pointerup",
              function (event) {
                // Bixby 는 오답 -> 퀴즈 처음으로
                quiz_3.destroy();
                problem3_1.destroy();
                problem3_2.destroy();
                problem3_3.destroy();

                quiz_3 = null;
                problem3_1 = null;
                problem3_2 = null;
                problem3_3 = null;

                let quiz_wrong = this.add
                  .image(1450, 850, "quiz_wrong")
                  .setScale(0.97)
                  .setInteractive();
                let quiz_restart_button1 = this.add
                  .image(1586, 922, "quiz_restart_button")
                  .setInteractive();
                let quiz_restart_button2 = this.add
                  .image(1720, 922, "quiz_restart_button")
                  .setInteractive();

                quiz_restart_button1.on(
                  "pointerdown",
                  function (event) {
                    this.scene.start("dinosaur_scenario");
                  },
                  this
                );

                quiz_restart_button2.on(
                  "pointerdown",
                  function (event) {
                    this.scene.start("dinosaur_scenario");
                  },
                  this
                );

              },
              this
            );

            problem3_3.on(
              "pointerup",
              function (event) {
                // AlphaGo 는 오답 -> 퀴즈 처음으로
                quiz_3.destroy();
                problem3_1.destroy();
                problem3_2.destroy();
                problem3_3.destroy();

                quiz_3 = null;
                problem3_1 = null;
                problem3_2 = null;
                problem3_3 = null;

                let quiz_wrong = this.add
                  .image(1450, 850, "quiz_wrong")
                  .setScale(0.97)
                  .setInteractive();
                let quiz_restart_button1 = this.add
                  .image(1586, 922, "quiz_restart_button")
                  .setInteractive();
                let quiz_restart_button2 = this.add
                  .image(1720, 922, "quiz_restart_button")
                  .setInteractive();

                quiz_restart_button1.on(
                  "pointerdown",
                  function (event) {
                    this.scene.start("dinosaur_scenario");
                  },
                  this
                );

                quiz_restart_button2.on(
                  "pointerdown",
                  function (event) {
                    this.scene.start("dinosaur_scenario");
                  },
                  this
                );

              },
              this
            );

            problem3_2.on(
              "pointerup",
              function (event) {
                //정답 : Siri -> 감옥 해제
                quiz_3.destroy();
                problem3_1.destroy();
                problem3_2.destroy();
                problem3_3.destroy();
                wordballoon.destroy();

                prison_bottom.destroy(); //감옥 오픈
                prison_bottom = null;

                mac_wall.destroy(); // 가로 막고 있는 벽 제거
                mac_wall = null;

                dinosaur1.destroy(); // 화난 공룡 제거
                dinosaur1 = null;

                quiz_3 = null;
                problem3_1 = null;
                problem3_2 = null;
                problem3_3 = null;
                wordballoon = null;

                let dinosaur2 = this.add
                  .image(2100, 790, "dinosaur2")
                  .setInteractive(); // 온순한 공룡 생성
              },
              this
            );
          },
          this
        );
      },
      this
    );
  }
}
class bug_scenario extends Phaser.Scene {
  constructor() {
    super({ key: "bug_scenario" });
  }
  create() {
    this.anims.create({
      key: "bug",
      frames: [
        { key: 'bug_scenario_1' },
        { key: 'bug_scenario_2' },
        { key: 'bug_scenario_3' },
        { key: 'bug_scenario_4' },
        { key: 'bug_scenario_5' },
        { key: 'bug_scenario_6' },
        { key: 'bug_scenario_7' },
        { key: 'bug_scenario_8' },
        { key: 'bug_scenario_9' },
        { key: 'bug_scenario_2' },
        { key: 'bug_scenario_4' },
        { key: 'bug_scenario_5' },
        { key: 'bug_scenario_6' },
        { key: 'bug_scenario_3' },
        { key: 'bug_scenario_7' },
        { key: 'bug_scenario_1' },
        { key: 'bug_scenario_9' },
        { key: 'bug_scenario_4' },
        { key: 'linux_penguin', duration: 1000 }
      ],
      frameRate: 8,
      repeat: 0
    });

    this.add.sprite(1204.5, 540, "bug_scenario_1").play("bug");
    let transparent = this.add.image(1204.5, 540, "transparent").setInteractive();
    transparent.on(
      "pointerdown",
      function (event) {
        this.scene.start("ending");
      },
      this
    );
  }
}
class ending extends Phaser.Scene {
  constructor() {
    super({ key: "ending" });
  }
  create() {
    let linux_penguin = this.add.image(1204.5, 540, "linux_penguin");
    let txt_ending = this.add.image(1204.5, 150, "txt_ending");
    let ending_quit_button = this.add.image(1600, 640, "ending_quit_button").setInteractive();;
    let ending_restart_button = this.add.image(1600, 440, "ending_restart_button").setInteractive();

    ending_quit_button.on(
      "pointerup",
      function (event) {
        this.scene.start("gameover");
      },
      this
    );
    ending_restart_button.on(
      "pointerup",
      function (event) {
        this.scene.start("first_scene");
      },
      this
    );
  }
}
class gameover extends Phaser.Scene {
  constructor() {
    super({ key: "gameover" });
  }
  create() {
    let gameover = this.add.image(1204.5, 540, "gameover");
  }
}

var config = {
  type: Phaser.AUTO,
  width: 2409,
  height: 1080,
  dom: {
    createContainer: true
  },
  backgroundColor: "0,0,0",
  parent: "phaser-example",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [
    first_scene,
    game_scene1,
    game_scene2,
    dino_video_scene,
    game_scene3,
    dinosaur_scenario,
    
    game_scene4,
    start_scenario,
    chrome_scenario,
    bug_scenario,
    ending,
    gameover
  ]
};

var timeline;

var graphics;

var player;
var stars; //구글 로고랑 부딪혔을 때
var ground;
var cursors;
var platform; // 크롬 하단
var platform2; // 구글 로고 하단

var trashes;
var ground_window;
var ground_window2;

var camera_count = 0;

///////////mac - game_scene3///////////
var ground2;
var mac_wall;
var heartes; // 하트들 - 제대로는 game_scene4 에 쓰임.
var bell_count = 0;
var bells;
//////시리//////
var cursors2;
var player2;
/////주인공///////
var cursors3;
var player3;
///////////////

var game = new Phaser.Game(config);