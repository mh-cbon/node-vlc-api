var vlc = require('../')({password: '123'});

doSomethingCrazy();

function doSomethingCrazy () {
  var actions = {
    next: function (cb) {
      vlc.status.next(cb);
    },
    prev: function (cb) {
      vlc.status.previous(cb);
    },
    pause: function (cb) {
      vlc.status.pause(cb);
    }
  };

  var action = Object.keys(actions)[d(Object.keys(actions).length)];

  console.error('Executing %s', action);
  actions[action](finish);

  function finish(err) {
    if (err) {
      throw err;
    }
    setTimeout(doSomethingCrazy, 2000 * Math.random());
  }
}

function d(n) {
  return Math.floor(n * Math.random());
}
