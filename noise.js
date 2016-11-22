var loadPlay = function(sound) {
  sound.load();
  sound.play();
};

$(document).ready( function() {

$('.note').on("click", function () {
  var noise = $(this).html();
  var sound = $("#" + noise + "Audio")[0];
  loadPlay(sound);
});

$("body").keydown(function(event) {
  var sound = $("#" + event.key + "Audio")[0];
  loadPlay(sound);
 });

});
