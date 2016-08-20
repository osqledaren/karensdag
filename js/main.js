var Anchor = {
  init: function() {
    Anchor.slidey = $('.slidey');
    Anchor.keys = [];

    //  Uh, bind to the resizing of the window?
    $(window).resize(Anchor.bindResize).trigger('resize');

    // Re-/Set keys
    $(window).on('keyup', Anchor.keyup);
    $(window).on('keydown', Anchor.keydown);

    //  Set up the toggle link
    Anchor.linky = $('.linky').on('click', Anchor.toggleSlidey);

    //  Hide the thingymabob
    setTimeout(function() {
      //  Set up the slidey panel
      Anchor.hideSlidey();

      $('body').addClass('js-enabled');
    }, 10);

    //  Listen for search link
    $('a[href="#search"]').click(function() {
      if(!Anchor.linky.hasClass('active')) {
        return Anchor.toggleSlidey.call(Anchor.linky);
      }
    });
  },

  keyup: function(event) {
    Anchor.keys[event.keyCode] = false;
  },

  keydown: function(event) {
    Anchor.keys[event.keyCode] = true;

    // ctrl + shift + f => show Slidey and/or focus search bar
    if(Anchor.keys[17] && Anchor.keys[16] && Anchor.keys[70]) {
      event.preventDefault();

      Anchor.showSlidey.call(Anchor.linky);
      $('input[type="search"]').focus();
    }

    // esc => hide Slidey
    if(Anchor.keys[27]) {
      event.preventDefault();

      Anchor.hideSlidey();
      $('input[type="search"]').blur();
    }
  },

  hideSlidey: function() {
    Anchor.slidey.css('margin-top', this._slideyHeight);
    Anchor.linky && Anchor.linky.removeClass('active');

    return this;
  },

  showSlidey: function() {
    Anchor.slidey.css('margin-top', 0);
    Anchor.linky && Anchor.linky.addClass('active');

    return this;
  },

  toggleSlidey: function() {
    var self = Anchor;
    var me = $(this);

    me.toggleClass('active');
    self.slidey.css('margin-top', me.hasClass('active') ? 0 : self._slideyHeight);

    return false;
  },

  bindResize: function() {
    Anchor._slideyHeight = -(Anchor.slidey.height() + 1);
    Anchor.hideSlidey();
  }
};

var LiveFeed = {
  init: function() {

    var http = location.protocol;
    var slashes = http.concat("//");
    var host = slashes.concat(window.location.hostname);
    //var feed = slashes.concat(window.location.hostname) + '/feeds/rss';

    var feed = 'http://karensdag.osqledaren.se/index.php/feeds/rss';

    console.log

    $.notify({
      path : feed, //required
      interval : 10,      //optional (number of seconds between requests, default is 60)
      callback : function(){

        LiveFeed.getPosts(LiveFeed.fetchPost());
        LiveFeed.replaceFeatured(LiveFeed.fetchPost(true));
        LiveFeed.newsFlash(); // trigger breaking news effect.

      }, //optional (when new results are found they are sent to this function)
      initial : false     //optional (this just shows notifications on the first pass, by default this is true, and we wont see the difference)
    });
  },

  getList: function(posts){

    if(posts === undefined){
      return;
    }



    // Append a new section on top of current sections of posts.
  },

  replaceFeatured: function(post){

    if(post === undefined){
      return;
    }

    // Replace featured post with new post.
  },

  newsFlash: function(){

  }
}

$(document).ready(function(){
  $(Anchor.init);
  $(LiveFeed.init);
});




