Polymer {
  is: 'speech-recognition'
  properties: {
    width: {
      type: String
      value: 100
      notify: true
    }
    height: {
      type: String
      value: 100
      notify: true
    }
    language: {
      type: String
      value: 'en-US'
    }
    isrecording: {
      type: Boolean
      value: false
      observer: 'isrecordingChanged'
    }
  }
  buttonClicked: ->
    self = this
    console.log this.language
    recognition = this.recognition = new webkitSpeechRecognition()
    recognition.lang = this.language
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 10
    recognition.onstart = (event) ->
      self.isrecording = true
    recognition.onresult = (event) ->
      #if event.results[0].isFinal
      if true
        recognition.stop()
        #console.log event.results[0]
        candidates = [x.transcript for x in event.results[0]]
        #console.log candidates
        if self.onresults?
          self.onresults(candidates)
        self.isrecording = false
    recognition.start()
  isrecordingChanged: (newval, oldval) ->
    if newval == oldval
      return
    if newval
      this.$$('img').src = 'speech-recognition-stop.webp'
    else
      this.$$('img').src = 'speech-recognition.webp'
}
