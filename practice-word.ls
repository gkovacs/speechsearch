synthesize_word = (word) ->
  synth_lang = 'en'
  video_tag = $('#synthesizeword')
  if video_tag.length == 0
    video_tag = $('<video>').prop('id', 'synthesizeword').css({display: 'none'})
    $('body').append video_tag
  video_tag.attr 'src', 'http://speechsynth.herokuapp.com/speechsynth?' + $.param({lang: synth_lang, word})
  video_tag[0].currentTime = 0
  video_tag[0].play()

Polymer {
  is: 'practice-word'
  properties: {
    word: {
      type: String
      value: ''
      observer: 'wordChanged'
    }
    difficulty: {
      type: Number
      value: 0
      observer: 'shownKeysChanged'
    }
    partialword: {
      type: String
      value: ''
      observer: 'partialwordChanged'
    }
  }
  playword: ->
    synthesize_word this.word
  #ready: ->
  #  console.log 'practice word ready'
  #  this.playword()
  wordChanged: ->
    this.playword()
    this.shownKeysChanged()
  partialwordChanged: ->
    this.$$('#inputarea').innerText = this.partialword
    this.shownKeysChanged()
  keyTyped: (evt, key) ->
    letter = key.keytext
    next_letter = this.nextLetter()
    if letter != next_letter
      #keyboard.shownkeys = next_letter
      this.difficulty = 0
      this.partialword = ''
    if letter == next_letter # typed correctly
      if this.partialword + letter == this.word # is last letter in word
        if this.difficulty < 3
          this.difficulty += 1
        else
          window.location = 'https://www.google.com/search?site=&tbm=isch&q=' + this.word
        this.partialword = ''
        setTimeout ~>
          this.playword()
        , 500
      else
        this.partialword = this.partialword + letter
  nextLetter: ->
    if this.word == this.partialword or not this.word? or not this.partialword?
      return ''
    return this.word[this.partialword.length]
  shownKeysChanged: ->
    keyboard = this.$$('#keyboard')
    next_letter = this.nextLetter()
    console.log 'next_letter is:' + next_letter
    if this.partialword?
      console.log this.partialword.length
      this.$$('#wordspan').highlightidx = this.partialword.length
    if this.difficulty == 0
      keyboard.shownkeys = next_letter
    if this.difficulty == 1
      keyboard.shownkeys = this.word
    if this.difficulty == 2
      keyboard.shownkeys = [\a to \z].join('')
    if this.difficulty == 3
      keyboard.shownkeys = [\a to \z].join('')
    if this.difficulty == 3
      this.$$('#wordspan').style.visibility = 'hidden'
    else
      this.$$('#wordspan').style.visibility = 'visible'
    #keyboard.shownkeys = this.word
}
