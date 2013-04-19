(function() {
  var recovery_widget = document.createElement('div'), content = {};

  content.title = "Title Of Disaster";
  content.text = "This is some content next to an image. This is what you need to know. This is some other stuff you need to know.";
  content.imgSrc = "http://placehold.it/93";
  content.link = "#";

  recovery_widget.setAttribute('class', 'recovery_widget');
  recovery_widget.innerHTML =
    '<div class="media_block"><img class="float_left" src="' + content.imgSrc + '"/><div class="content"><h5><small>Happening Now:</small></h5><h1>' + content.title + '</h1><p>' + content.text + '</p><p><a href="' + content.link + '">Read More &rarr;</a></p></div></div>';

  var css = document.createElement('link');
  css.href = './style.css';
  css.rel = 'stylesheet';
  document.head.appendChild(css);
  document.body.insertBefore(recovery_widget);
})();
