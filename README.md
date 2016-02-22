# vlc-api

HTTP API client for node.js an the browser. Tested with webpack, should work fine with browserify too.

(Yes, vlc has an [http api](https://github.com/videolan/vlc/tree/master/share/lua/http/requests/README.txt))

## Requirements

Host running VLC with the [Web Interface](https://wiki.videolan.org/Documentation:Modules/http_intf/) enabled. VLC 2.1+ requires that a [password is set](https://wiki.videolan.org/Documentation:Modules/http_intf/#VLC_2.1.0_and_later).

## Install

    npm install @mh-cbon/vlc-api --save

## Example

```js
var vlc = require('vlc-api')({password: '123'});
// password: required by VLC 2.1+
// host: optional; defaults to 'localhost'
// port: optional; defaults to 8080
// username: optional; VLC currently requires this to be empty

// toggle pause
vlc.status.pause(function(err, status){
  // will be 'playing' or 'paused'
  console.log(status.state);
});

// fetches playlist object; different from status api
vlc.playlist(function(err, res){
  console.log(res);
});

```

## API

```js
$ node
> var vlc = require('./')({password: '123'});
undefined
> vlc
{ apiVersion:
   { vlc: '2.1.0 Rincewind',
     spec: 'https://github.com/videolan/vlc/tree/master/share/lua/http/requests/README.txt' },
  _base: 'http://localhost:8080',
  _authHeader: 'Basic OjEyMw==',
  status:
   { [Function]
     enqueue: [Function],
     addSubtitle: [Function],
     play: [Function],
     goto: [Function],
     pause: [Function],
     stop: [Function],
     resume: [Function],
     next: [Function],
     previous: [Function],
     prev: [Function],
     delete: [Function],
     empty: [Function],
     audioDelay: [Function],
     subtitleDelay: [Function],
     aspectRatio: [Function],
     sort: [Function],
     random: [Function],
     loop: [Function],
     repeat: [Function],
     discovery: [Function],
     fullscreen: [Function],
     volume: [Function],
     seek: [Function],
     preamp: [Function],
     equalizer:
      { [Function]
        enable: [Function],
        disable: [Function],
        preset: [Function] },
     title: [Function],
     chapter: [Function],
     audioTrack: [Function],
     videoTrack: [Function],
     subtitleTrack: [Function] },
  playlist: [Function],
  browse: [Function] }
> vlc.status.pause()
undefined
> vlc.status.resume()
undefined
>

```

## Tests

0. Run VLC with the [http interface](https://wiki.videolan.org/Documentation:Modules/http_intf/) enabled on port 8080 with password '123'
0. Get a playlist going
0. Run `npm test` for a CRAZY ROBOT REMIX

## License

MIT/X11.

## Changes

Since original release by [jhbrook](https://github.com/jfhbrook/node-vlc-api)

- VLC 2.1 was added by [AdamBurgess](https://github.com/AdamBurgess/node-vlc-api)
- webpack support (replaced request by hyperquest) was added by [mh-cbon](https://github.com/mh-cbon/node-vlc-api)
