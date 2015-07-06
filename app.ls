root = exports ? this

require! {
  express
  path
  getsecret
}

bing_api_key = getsecret 'bing_api_key'
Bing = require('node-bing-api')({accKey: bing_api_key})

app = express()

app.set 'port', (process.env.PORT || 8080)

app.use express.static(path.join(__dirname, ''))

root.count = 0
root.waiting = []
get_image_url_throttled = (query, callback) ->
  if root.count < 1
    root.count += 1
    get_image_url query, ->
      root.count -= 1
      if root.waiting.length > 0
        get_image_url_throttled.apply(null, root.waiting.shift())
      callback.apply(this, arguments)
  else
    root.waiting.push arguments

get_image_url = (query, callback) ->
  Bing.images query, {}, (error, res2, body) ->
    #callback body.d.results[0].MediaUrl
    callback [x.MediaUrl for x in body.d.results]
    #callback body.d.results

app.get '/image', (req, res) ->
  get_image_url req.query.name, (imgurl) ->
    res.send imgurl

app.listen app.get('port'), '0.0.0.0'
