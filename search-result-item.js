// Generated by LiveScript 1.3.1
(function(){
  Polymer({
    is: 'search-result-item',
    properties: {
      query: {
        type: String,
        value: '',
        notify: true
      }
    },
    sayWord: function(){
      return this.$$('voice-player').speak();
    },
    openLesson: function(){
      return window.open('http://scriptlearn.herokuapp.com/?' + $.param({
        lang: 'en',
        word: this.query
      }));
    }
  });
}).call(this);
