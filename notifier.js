const request = require('request')


module.exports = {
  notify : notifyMessage
}

/**
 * sends a message via telegram
 *
 * @param {String} message
 */
function notifyMessage(message) {
  request.post({
    url  : 'https://secret-depths-18813.herokuapp.com/sendDricoAMessage',
    json : {
      key     : '3u1k3kblaV',
      message : message
    }
  })
}
