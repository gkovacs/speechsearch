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
  }
  #ready: ->
  #  if this.ishidden
  #    this.style.visibility = 'hidden'
  visibilityChanged: ->
    if this.ishidden
      this.style.visibility = 'hidden'
    else
      this.style.visibility = 'visible'
  handleClick: ->
    console.log('clicked: ' + this.keytext)
    if this.clickCallback?
      this.clickCallback()
  setClickCallback: (callback) ->
    this.clickCallback = callback
}
