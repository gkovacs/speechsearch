Polymer {
  is: 'search-result-item'
  properties: {
    query: {
      type: String
      value: ''
      notify: true
    }
  }
  sayWord: ->
    this.$$('voice-player').speak()
}
