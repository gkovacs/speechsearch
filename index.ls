window.addEventListener 'WebComponentsReady', (e) ->
  # imports are loaded and elements have been registered
  # console.log('Components are ready');
  # $('#foo').append($('<my-counter >'))
  # $('#foo').append($('<my-counter>'))
  # $('#foo').append($('<name-tag>'))
  # $('#foo').append($('<editable-name-tag>'))
  #$('latin-keyboard').
  $('#speechrecognition')[0].onresults = (candidates) ->
    console.log candidates
    $('#searchresults').html('')
    for x in candidates
      #$('<search-result-item query="' + x + '"></search-result-item>').appendTo('#searchresults')
      $('<search-result-item>').prop('query', x).appendTo('#searchresults')
