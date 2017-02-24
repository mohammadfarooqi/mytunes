// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({


  url: 'http://parse.hrr.hackreactor.com/mytunes/classes/songs',

  parse: function(resp) {
    return resp.results;
  },

  initialize: function() {

    this.fetch();
    // var _this = this;
    // $.ajax({
    //   url: 'http://parse.hrr.hackreactor.com/mytunes/classes/songs',
    //   type: 'GET',
    //   contentType: 'application/json',
    //   success: function (data) {
    //     // console.log(_this)

    //     _this.add(data.results);

    //     // console.log(_this)
    //   },
    //   error: function (data) {
    //     console.error('Failed', data);
    //   }
    // });

  },

  model: SongModel
});
