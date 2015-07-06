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
  openLesson: ->
    window.open('http://scriptlearn.herokuapp.com/?' + $.param({lang: 'en', word: this.query}))
}
