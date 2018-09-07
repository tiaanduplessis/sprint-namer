const defaultAdjectives = require('./adjectives')
const defaultAdverbs = require('./adverbs')
const defaultEntities = require('./entities')

function getRandomItem (arr = []) {
  if (!arr.length) {
    return ''
  }

  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function getSprintName ({ adjectives = defaultAdjectives, adverbs = defaultAdverbs, entities = defaultEntities } = {}) {
  return `${getRandomItem(adverbs)} ${getRandomItem(adjectives)} ${getRandomItem(entities)}`.trim()
}

module.exports = getSprintName
