Polymer {
  is: 'keyboard-button'
  properties: {
    keytext: {
      type: String
      value: 'a'
    }
    ishidden: {
      type: Boolean
      value: false
      observer: 'visibilityChanged'
    }
    silent: {
      type: Boolean
      value: false
    }
    width: {
      type: Number
      value: 2
      observer: 'widthChanged'
    }
    height: {
      type: Number
      value: 2
      observer: 'heightChanged'
    }
    marginleft: {
      type: Number
      value: 0
      observer: 'marginLeftChanged'
    }
    marginright: {
      type: Number
      value: 0
      observer: 'marginRightChanged'
    }
    margintop: {
      type: Number
      value: 0
      observer: 'marginTopChanged'
    }
    sound: {
      type: String
      value: ''
    }
    color: {
      type: String
      value: 'white'
      observer: 'colorChanged'
    }
  }
  #ready: ->
  #  if this.ishidden
  #    this.style.visibility = 'hidden'
  colorChanged: ->
    this.style.backgroundColor = this.color
  marginLeftChanged: ->
    this.style.marginLeft = Math.floor(25*this.marginleft) + 'px'
  marginRightChanged: ->
    this.style.marginRight = Math.floor(25*this.marginright) + 'px'
  marginTopChanged: ->
    this.style.marginTop = Math.floor(25*this.margintop) + 'px'
  widthChanged: ->
    this.style.width = (this.width*25) + 'px'
  heightChanged: ->
    this.style.height = (this.height*25) + 'px'
    this.style.fontSize = (this.height*16) + 'px'
    this.style.lineHeight = (this.height*25) + 'px'
  visibilityChanged: ->
    if this.ishidden
      this.style.visibility = 'hidden'
    else
      this.style.visibility = 'visible'
  handleClick: ->
    console.log('clicked: ' + this.keytext)
    keysynth = this.$$('#keysynth')
    keysynth.pause()
    sound = this.sound
    if not sound? or sound.length == 0
      sound = this.keytext
    keysynth.src = '/lettersound/' + sound + '.mp3'
    keysynth.currentTime = 0
    keysynth.play()
    if this.clickCallback?
      this.clickCallback()
  setClickCallback: (callback) ->
    this.clickCallback = callback
}
