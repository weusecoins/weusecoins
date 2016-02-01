$(function(){
  $("#twitter").tweet({
    count: 5,
    query: "#bitcoin",
    loading_text: "searching twitter...",
    template: function(i) {return '<div><a href="http://twitter.com/'+i["screen_name"]+'" class="user">@'+i["screen_name"]+'</a> <span class="time">'+i["tweet_relative_time"]+'</span></div><span class="message">'+i["text"]+'</span> ';}
  });
  stLight.options({
    publisher:'ba14bff6-6b5a-4bef-a218-774fae33c140'
  });

  $(".newsbox .expand").click(function () {
    var el = $(this);
    if (el.hasClass('contract')) {
      $('.newsbox .boxbody').animate({
        height: 265
      });
      el.removeClass('contract');
    } else {
      var height = $('.newsbox .boxbody .content:visible').height();
      $('.newsbox .boxbody').animate({
        height: height+45
      });
      el.addClass('contract');
    }
    return false;
  });

  var tabs = {
    twitter: {}, // autoloaded
    news: {
      url: '../data/headlines.html'
    }
  };

  $(".newsbox .tabs a").click(function () {
    var el = $(this);

    if (el.hasClass('current')) return false;

    var tabName = el.data('tab');
    var tab = tabs[tabName];

    el.parent().parent().find('a').removeClass('current');
    el.addClass('current');

    $(".newsbox .content").fadeOut();

    var tabEl = $(".newsbox ."+tabName+"tab")

    function fadeIn(speed) {
      tabEl.fadeIn(speed);
    };

    function updateHeight(height) {
      var expandEl = $(".newsbox .expand");

      if (expandEl.hasClass('contract')) {
        if (!height) height = tabEl.height() + 45;

        $('.newsbox .boxbody').stop().animate({
          height: height
        });
      }
    };

    if (tab.url) {
      var isInitialLoad = tabEl.is(":empty")
      if (isInitialLoad) {
        var loadingEl = $('.newsbox .boxbody .loading');
        loadingEl.fadeIn();
        updateHeight(260);
      } else {
        fadeIn();
        updateHeight();
      }
      $.ajax(tab.url, {
        cache: false,
        dataType: 'html',
        success: function (data) {
          tabEl.html(data);
          if (isInitialLoad) {
            loadingEl.fadeOut('fast');
            fadeIn('fast');
          }
          updateHeight();
        }
      });
    } else {
      fadeIn();
      updateHeight();
    }

    return false;
  });

  /*
  function animateMediaMarquee() {
    $('.mediaslit .content')
      .css('backgroundPosition', "0 0")
      .animate({'backgroundPosition': "-1721 0"}, 50000, 'linear', animateMediaMarquee)
    ;
  };
  animateMediaMarquee();
  */
});

