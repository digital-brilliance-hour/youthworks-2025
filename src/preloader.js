
BasicGame.Preloader = function (game) {

  this.background = null;
  this.preloadBar = null;

  //this.ready = false;

};

BasicGame.Preloader.prototype = {

  preload: function () {

    //  Show the loading progress bar asset we loaded in boot.js
    this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);

    //  This sets the preloadBar sprite as a loader sprite.
    //  What that does is automatically crop the sprite from 0 to full-width
    //  as the files below are loaded in.
    this.load.setPreloadSprite(this.preloadBar);
           this.load.image('bg2', 'assets/stageBackground2/newStageBackground2.png');
    this.load.image('bl2', 'assets/stageBackground2/backlayer1/backlayer1.png');

    //  Here we load the rest of the assets our game needs.
    this.load.image('titlepage', 'assets/title-screen-game2.png');
    this.load.image('supaText', 'assets/supaText.png');
    this.load.image('showDownText', 'assets/showDownText.png');
    this.load.image('sea', 'assets/sea.png');
    this.load.image('bg1', 'assets/stageBackground1.png');
    this.load.image('sand', 'assets/sand.png');
    this.load.image('enemyBullet', 'assets/enemy-bullet.png');
    this.load.image('powerup1', 'assets/newpowerup1.png');
    this.load.spritesheet('bullet', 'assets/missile1.png', 9, 24);
    this.load.spritesheet('stage1-enemy1', 'assets/enemy1.png');
    this.load.spritesheet('greenEnemy', 'assets/enemy.png', 32, 32);
    this.load.spritesheet('boss', 'assets/boss1.png', 135, 126);
    this.load.spritesheet('boss2', 'assets/boss2.png', 206, 134);
    this.load.spritesheet('explosion', 'assets/ShipExplosion.png', 48, 48);
    this.load.spritesheet('player', 'assets/playerShoot.png', 64, 64);
    this.load.audio('explosion', ['assets/explosion.ogg', 'assets/explosion.wav']);
    this.load.audio('playerExplosion', ['assets/player-explosion.ogg', 'assets/player-explosion.wav']);
    this.load.audio('enemyFire', ['assets/enemy-fire.ogg', 'assets/enemy-fire.wav']);
    this.load.audio('playerFire', ['assets/player-fire.ogg', 'assets/player-fire.wav']);
    this.load.audio('powerUp', ['assets/powerup.ogg', 'assets/powerup.wav']);
    this.load.audio('titleMusic', ['assets/bgm/title-music.ogg']);
    this.load.audio('gameOverMusic', ['assets/bgm/gameovermusic.mp3']);
    this.load.audio('stageOne', ['assets/bgm/stage1.ogg']);
    this.load.audio('stageTwo', ['assets/bgm/stage2.ogg']);
    this.load.audio('bossMusic', ['assets/bgm/boss-music.ogg']);
    this.load.spritesheet('stage1-enemy2', 'assets/ememy2shoot.png', 128, 128);
    this.load.spritesheet('whiteEnemy', 'assets/shooting-enemy.png', 32, 32);
    this.load.image('enemy3', 'assets/ememy3.png', 32, 32);//  + lots of other required assets here
  },

  create: function () {

    //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;

  },

  update: function () {

    //  You don't actually need to do this, but I find it gives a much smoother game experience.
    //  Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
    //  You can jump right into the menu if you want and still play the music, but you'll have a few
    //  seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
    //  it's best to wait for it to decode here first, then carry on.
    
    //  If you don't have any music in your game then put the game.state.start line into the create function and delete
    //  the update function completely.
    
    //if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
    //{
    //  this.ready = true;
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.state.start('MainMenu');
    }

  }

};
