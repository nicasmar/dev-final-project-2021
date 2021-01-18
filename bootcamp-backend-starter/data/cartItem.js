const casual = require('casual')
const userData = require('./user')
const itemData = require('./item')

casual.define('item', (userId, itemId) => ({
  userId,
  itemId,
  createdAt: casual.moment,
}))

const cartItemData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  const itemId = casual.random_element(itemData).id
  cartItemData.push(casual.item(userId, itemId))
}

module.exports = cartItemData