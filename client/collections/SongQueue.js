// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      // console.log(this);
      this.shift();
      // console.log(this);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', this.remove, this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});