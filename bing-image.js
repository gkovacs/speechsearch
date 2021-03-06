// Generated by LiveScript 1.3.1
(function(){
  Polymer({
    is: 'bing-image',
    properties: {
      query: {
        type: String,
        value: '',
        observer: 'queryChanged'
      },
      resultnum: {
        type: Number,
        value: 0,
        observer: 'resultnumChanged'
      },
      width: {
        type: String,
        value: 100,
        notify: true
      },
      height: {
        type: String,
        value: 100,
        notify: true
      }
    },
    queryChanged: function(newvalue, oldvalue){
      var self;
      if (newvalue === oldvalue) {
        return;
      }
      if (newvalue == null || newvalue === '') {
        return;
      }
      self = this;
      return $.getJSON('/image?' + $.param({
        name: newvalue
      }), function(data){
        self.data = data;
        return self.$$('img').src = self.data[self.resultnum];
      });
    },
    resultnumChanged: function(newvalue, oldvalue){
      if (newvalue === oldvalue || this.data == null) {
        return;
      }
      return this.$$('img').src = this.data[newvalue];
    }
  });
}).call(this);
