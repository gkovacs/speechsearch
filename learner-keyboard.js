// Generated by LiveScript 1.3.1
(function(){
  Polymer({
    is: 'learner-keyboard',
    properties: {
      keylines: {
        type: String,
        value: [
          [
            {
              text: 'a',
              width: 4,
              marginright: 1
            }, {
              text: 'm',
              marginright: 0.5
            }, 'b', {
              text: 'p',
              marginright: 0.5
            }, 'f', 'v'
          ], [
            'e', {
              text: 'o',
              marginright: 1
            }, {
              text: 'n',
              marginright: 0.5
            }, 'd', {
              text: 't',
              marginright: 0.5
            }, 's', 'z'
          ], [
            'i', {
              text: 'u',
              marginright: 1
            }, {
              text: 'l',
              marginright: 0.5
            }, {
              text: 'g',
              sound: 'g_hard'
            }, {
              text: 'c',
              sound: 'c_hard',
              marginright: 0.5
            }, {
              text: 'c',
              sound: 'c_soft'
            }, {
              text: 'g',
              sound: 'g_soft'
            }
          ], [
            'y', {
              text: 'w',
              marginright: 1.0
            }, {
              text: 'r',
              marginright: 0.5
            }, {
              text: 'q',
              width: 1
            }, {
              text: 'x',
              width: 1
            }, {
              text: 'k',
              width: 2,
              marginright: 0.5
            }, 'h', 'j'
          ]
        ]
      },
      hiddenkeys: {
        type: String,
        value: '',
        observer: 'hiddenKeysChanged'
      }
    },
    getKeyColor: function(key){
      var cvowel, csemivowel, cnasal, cstop, cstop_voiced, cfricative, cfricative_voiced, keysound;
      cvowel = 'yellow';
      csemivowel = '#FFA500';
      cnasal = '#FF5533';
      cstop = '#77AAFF';
      cstop_voiced = '#5577FF';
      cfricative = '#AAFFAA';
      cfricative_voiced = '#00FF00';
      cstop_voiced = cstop;
      cfricative_voiced = cfricative;
      keysound = key.sound;
      key = this.getKeyText(key);
      if (key === 'c' || key === 'g') {
        return '#00FFFF';
      }
      if (keysound === 'g_hard') {
        return cstop_voiced;
      }
      if (keysound === 'c_hard') {
        return cstop;
      }
      if (keysound === 'c_soft') {
        return cfricative;
      }
      if (keysound === 'g_soft') {
        return cfricative_voiced;
      }
      if ('yw'.indexOf(key) !== -1) {
        return csemivowel;
      }
      if ('aeoiuyw'.indexOf(key) !== -1) {
        return cvowel;
      }
      if ('mnlr'.indexOf(key) !== -1) {
        return cnasal;
      }
      if ('bdg'.indexOf(key) !== -1) {
        return cstop_voiced;
      }
      if ('bpdtgkqxc'.indexOf(key) !== -1) {
        return cstop;
      }
      if ('vzjg'.indexOf(key) !== -1) {
        return cfricative_voiced;
      }
      if ('fvszcjhg'.indexOf(key) !== -1) {
        return cfricative;
      }
    },
    getKeySound: function(key){
      if (key.sound != null) {
        return key.sound;
      }
      return '';
    },
    getKeyText: function(key){
      if (typeof key === typeof '') {
        return key;
      } else {
        return key.text;
      }
    },
    getKeyWidth: function(key){
      if (key.width != null) {
        return key.width;
      }
      return 2;
    },
    getKeyHeight: function(key){
      if (key.height != null) {
        return key.height;
      }
      return 2;
    },
    getKeyMarginLeft: function(key){
      if (key.marginleft != null) {
        return key.marginleft;
      }
      return 0;
    },
    getKeyMarginRight: function(key){
      if (key.marginright != null) {
        return key.marginright;
      }
      return 0;
    },
    getKeyMarginTop: function(key){
      if (key.margintop != null) {
        return key.margintop;
      }
      return 0;
    },
    getKeyId: function(key){
      key = this.getKeyText(key);
      return 'key' + key;
    },
    hiddenKeysChanged: function(newvalue, oldvalue){
      var i$, ref$, len$, x, results$ = [];
      for (i$ = 0, len$ = (ref$ = $(this).find('keyboard-button')).length; i$ < len$; ++i$) {
        x = ref$[i$];
        results$.push(x.ishidden = this.isKeyHidden(x.keytext));
      }
      return results$;
    },
    isKeyHidden: function(key){
      key = this.getKeyText(key);
      return this.hiddenkeys.indexOf(key) !== -1;
    }
  });
}).call(this);
