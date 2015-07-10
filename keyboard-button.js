// Generated by LiveScript 1.3.1
(function(){
  Polymer({
    is: 'keyboard-button',
    properties: {
      keytext: {
        type: String,
        value: 'a',
        observer: 'keytextChanged'
      },
      isspecial: {
        type: String,
        value: '',
        observer: 'isspecialChanged'
      },
      ishidden: {
        type: Boolean,
        value: false,
        observer: 'visibilityChanged'
      },
      silent: {
        type: Boolean,
        value: false
      },
      width: {
        type: Number,
        value: 2,
        observer: 'widthChanged'
      },
      height: {
        type: Number,
        value: 2,
        observer: 'heightChanged'
      },
      marginleft: {
        type: Number,
        value: 0,
        observer: 'marginLeftChanged'
      },
      marginright: {
        type: Number,
        value: 0,
        observer: 'marginRightChanged'
      },
      margintop: {
        type: Number,
        value: 0,
        observer: 'marginTopChanged'
      },
      sound: {
        type: String,
        value: ''
      },
      color: {
        type: String,
        value: 'white',
        observer: 'colorChanged'
      }
    },
    isspecialChanged: function(){
      if (this.isspecial.length === 0) {
        return;
      }
      console.log('have isspecial' + this.isspecial);
      if (this.isspecial === 'backspace') {
        console.log('isspecial backspace');
        this.style.border = 'none';
        this.style.margin = 'none';
        this.style.height = '48px';
        this.style.padding = 'none';
        return this.$$('#keytext').innerHTML = '<img src="backspace.png" style="height: 48px; margin: 0; padding: 0">';
      }
    },
    keytextChanged: function(){
      if (this.isspecial != null && this.isspecial.length > 0) {
        return;
      }
      return this.$$('#keytext').innerHTML = this.keytext;
    },
    colorChanged: function(){
      return this.style.backgroundColor = this.color;
    },
    marginLeftChanged: function(){
      return this.style.marginLeft = Math.floor(25 * this.marginleft) + 'px';
    },
    marginRightChanged: function(){
      return this.style.marginRight = Math.floor(25 * this.marginright) + 'px';
    },
    marginTopChanged: function(){
      return this.style.marginTop = Math.floor(25 * this.margintop) + 'px';
    },
    widthChanged: function(){
      return this.style.width = this.width * 25 + 'px';
    },
    heightChanged: function(){
      this.style.height = this.height * 25 + 'px';
      this.style.fontSize = this.height * 16 + 'px';
      return this.style.lineHeight = this.height * 25 + 'px';
    },
    visibilityChanged: function(){
      if (this.ishidden) {
        return this.style.visibility = 'hidden';
      } else {
        return this.style.visibility = 'visible';
      }
    },
    handleClick: function(){
      var keysynth, sound;
      console.log('clicked: ' + this.keytext);
      keysynth = this.$$('#keysynth');
      keysynth.pause();
      sound = this.sound;
      if (sound == null || sound.length === 0) {
        sound = this.keytext;
      }
      keysynth.src = '/lettersound/' + sound + '.mp3';
      keysynth.currentTime = 0;
      keysynth.play();
      return this.fire('key-typed', this);
    }
  });
}).call(this);
