const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const notifier = require('./notifier')

const MINIMUM_THRESHOLD = 1900

nightmare
  .goto('http://www.decolar.com/shop/flights/results/roundtrip/SAO/PAR/2017-10-27/2017-11-08/1/0/0?from=SB')
  .wait(4000)
  .evaluate(function () {
    return document.querySelectorAll('.matrix-airlines-responsive-container')[0].innerText
    /*
    return find(document.querySelectorAll('.matrix-airlines-responsive-container')[0], '.price-amount').map(function (element) {
      console.log(element)
      return element.innerText
    })
    */
  })
  .end()
  .then(function findMinimumPrice(results) {
    return results
      .match(/R\$ [0-9\.]*/g)
      .map(function (price) {
        return parseInt(price.replace(/(R\$ )|\./g, ''))
      })
      .reduce(function (min, current) {
        return Math.min(min, current)
      }, Infinity)
  })
  .then(function (minimumPrice) {
    console.log(new Date() +  ': minimum price is ' + minimumPrice) 
    if (minimumPrice < MINIMUM_THRESHOLD) {
      console.log('CALLING NOTIFIER')
      notifier.notify('FOUND TICKET FOR R$ ' + minimumPrice)
    }
  })







/**
 * given an element, finds all children that match some selector
 *
 * equivalent to jQuery($element).find(selector)
 *
 * @param $element {Node}
 * @param selector {string}
 * @param results  {Array} used for recursivity reasons
 *
 * @returns array
 */
function find($element, selector, results) {
  return Array.prototype.slice.call($element.children).reduce(function (results, child) {
    log($element)
    return find(child, selector, results) 
  }, ($element.matches(selector) ? [$element] : []).concat(results || []))
}

function log(str) {
  process.stdout.write(log + '\n')
}
