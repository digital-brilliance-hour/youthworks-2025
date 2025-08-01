
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

    this.showDownText = this.add.image(this.game.width / 2, this.game.height - 120, "showDownText");
    this.supaText = this.add.image(this.game.width / 2, this.game.height - 185, "supaText");
    this.supaText.anchor.setTo(0.5, 0.5); 
    this.showDownText.anchor.setTo(0.5, 0.5); 
    this.supaText.scale.setTo(0.6, 0.6);
    this.showDownText.scale.setTo(0.75, 0.75);

    this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 240, "Press Z or tap/click game to start", { font: "20px monospace", fill: "#fff", stroke: "black", strokeThickness: 5 });
    this.loadingText.anchor.setTo(0.5, 0.5);
    //this.add.text(this.game.width / 2, this.game.height - 90, "image assets Copyright (c) 2002 Ari Feldman", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    //this.add.text(this.game.width / 2, this.game.height - 75, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "12px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.music = this.add.audio('titleMusic', 0.5, true);
    this.music.play();
  },

  update: function () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
    //  Do some nice funky main menu effect here

  },

  startGame: function (pointer) {

    //  Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
     this.music.stop();

    //  And start the actual game
    this.state.start('Game');

  }

};
