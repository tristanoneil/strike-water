$(function() {
  var AppView = Backbone.View.extend({

    el: $("#app"),

    events: {
      "keyup input": "calculate"
    },

    calculate: function() {
      var targetTemperature = parseFloat($("[name='target-temperature']").val());
      var ratio             = parseFloat($("[name='ratio']").val());
      var grainTemperature  = parseFloat($("[name='grain-temperature']").val());
      var strikeTemperature = ((.2 / ratio) * (targetTemperature - grainTemperature)) + targetTemperature;
      var roundedStrikeTemperature = Math.round(strikeTemperature * 100) / 100

      if(!isNaN(strikeTemperature)) {
        $(".strike-temperature").fadeIn();
        $(".strike-temperature").html(roundedStrikeTemperature + " &#8457;");
      }
    }
  });

  var App = new AppView;
});
