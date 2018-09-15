
//  The net module has a method named net.createServer() that takes a
  // function. The function that you need to pass to net.createServer()
  // is a connection listener that is called more than once. Every
  // connection received by your server triggers another call to the
  // listener. The listener function has the signature:

  var net = require('net')

// ensure two-digit format for all number. 01 02 instead of 1 2 etc.
  function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }

  function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
      zeroFill(d.getMonth() + 1) + '-' +
      zeroFill(d.getDate()) + ' ' +
      zeroFill(d.getHours()) + ':' +
      zeroFill(d.getMinutes())
  }

  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })

  server.listen(Number(process.argv[2]))
