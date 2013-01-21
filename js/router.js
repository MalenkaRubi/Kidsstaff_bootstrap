var Workspace = Backbone.Router.extend({

    routes: {
        ""          : "home",
        "image"     : "image",
        "toys"      : "toys",
        "clothes"   : "clothes",
        "games"     : "games",
        "barbie"   : "barbie"
    },
    home: function(){
        renderPage ("data/toys.json","templates/main.mustache", $("body"))
          .then (function(){
            renderPage(
              "data/header.json",
              "templates/header.mustache",
              $("#header"));

            renderPage(
              "data/footer.json",
              "templates/footer.mustache",
              $("#footer_bottom"));

            renderPage(
              "data/modal.json",
              "templates/modal/nArrivals.mustache",
              $("#nArrivals"));

            renderPage(
              "data/modal.json",
              "templates/modal/halloween.mustache",
              $("#halloween"));

            renderPage(
              "data/modal.json",
              "templates/modal/shoes.mustache",
              $("#shoes"));

            renderPage(
              "data/modal.json",
              "templates/modal/rascal.mustache",
              $("#rascal"));
          })
    },

    toys: function(){
      renderPage ("data/toys.json","templates/links/toys.mustache", $(".span10"));
    },
    image: function(){
      renderPage ("data/toys.json","templates/links/image.mustache", $(".span10"));
    },
    clothes:function(){
        renderPage ("data/clothes.json","templates/links/clothes.mustache", $(".span10"));
    },
    games:function(){
        renderPage ("data/game.json","templates/links/game.mustache", $(".span10"));
    },
    barbie:function(){
        renderPage ("data/barbie.json","templates/links/games/barbie.mustache", $(".span10"))
    }
})



var router = new Workspace;

$(function(){
    Backbone.history.start();
})