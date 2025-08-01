
BasicGame.MainMenu = function (game) {

  //this.music = null;
  this.playButton = null;

};

BasicGame.MainMenu.prototype = {

  create: function () {

    //  We've already preloaded our assets, so let's kick right into the Main Menu itself.
    //  Here all we're doing is playing some music and adding a picture and button
    //  Naturally I expect you to do something significantly better :)

    this.titlepage = this.add.image(-34, 0, 'titlepage');

    this.titlepage.width = this.game.width + 68;

    this.titlepage.height = 600;

    this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Press Z or tap/click game to start", { font: "20px monospace", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 90, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 75, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.music = this.add.audio('titleMusic', 0.5, true);
    this.music.play();
  },

  update: function () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
    //  Do some nice funky main menu effect here

  },

  fadeIn: function(duration, delay) {
		this.fadeOverlay = this.game.add.graphics(0, 0);
		this.fadeOverlay.beginFill(0x000000, 1);
		this.fadeOverlay.drawRect(0, 0, this.game.width, this.game.height);
		this.fadeOverlay.endFill();
		this.fadeOverlay.alpha = 1;

		this.game.add.tween(this.fadeOverlay)
			.to({ alpha: 0 }, duration, Phaser.Easing.Linear.None, true, delay);
	},

  startGame: function (pointer) {

    //  Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
     this.music.stop();

    //  And start the actual game
    this.fadeIn(2000,1000);
    this.state.start('Game');

  }

};
