// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  width: 1016,
  height: 760,
  margin: 0.01,

  controls: true,
  progress: true,
  history: true,
  center: true,

  // available themes are in /css/theme
  theme: Reveal.getQueryHash().theme,

  // default/cube/page/concave/zoom/linear/fade/none
  transition: Reveal.getQueryHash().transition || 'linear',

  // Optional libraries used to extend on reveal.js
  dependencies: [{
    src: 'lib/js/classList.js',
    condition: function() { return !document.body.classList; }
  }, {
    src: 'plugin/markdown/showdown.js',
    condition:
      function() { return !!document.querySelector( '[data-markdown]' ); }
  }, {
    src: 'plugin/markdown/markdown.js',
    condition:
      function() { return !!document.querySelector( '[data-markdown]' ); }
  }, {
    src: 'plugin/highlight/highlight.js',
    async: true,
    callback: function() { hljs.initHighlightingOnLoad(); }
  }, {
    src: 'plugin/zoom-js/zoom.js',
    async: true,
    condition: function() { return !!document.body.classList; }
  }, {
    src: 'plugin/notes/notes.js',
    async: true,
    condition: function() { return !!document.body.classList; }
  }
  // {
  //   src: 'plugin/remotes/remotes.js',
  //   async: true,
  //   condition: function() { return !!document.body.classList; }
  // }
  ]
});

/*
$(function () {
  $('h3').fitText();
});
*/
