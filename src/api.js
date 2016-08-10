import range from 'lodash/range'
import random from 'lodash/random'
import sample from 'lodash/sample'
const _ = { range, random, sample }

const randomDescriptions = [
  { name: 'Leather Chelsea Shoes', material: '100% Leather' },
  { name: 'Denim Jacket', material: '100% Cotton' },
  { name: 'Denim Shorts', material: '100% Cotton' },
  { name: 'Derby Shoes', material: '100% Leather' },
  { name: 'Formal Shirt', material: '100% Cotton' },
  { name: 'Hooded Sweatshirt', material: '100% Cotton' },
  { name: 'Leather Biker Jacket', material: '100% Leather' },
  { name: 'Polo Shirt', material: '100% Cotton' }
]

const randomItems = _.range(8).map(id => ({
  name: randomDescriptions[id].name,
  material: randomDescriptions[id].material,
  picture: require(`./images/random-0${id + 1}.svg`)
}))

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in ex eget iaculis. Etiam ac odio purus. Aliquam quis tempus libero, nec dapibus est. Aliquam consectetur dui lectus, quis vestibulum dui tempor id. Sed viverra eleifend nibh varius tincidunt. Praesent vel tempor est. Sed id ipsum arcu. Vestibulum pulvinar sollicitudin ante quis placerat. Nulla non diam mattis, tincidunt ipsum eget, iaculis odio.'

export {
  get as getSync,
  getAsync
}

function getAsync (n = 1) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(get(n))
    }, _.random(1000, 3000))
  })
}

function get (n) {
  return _.range(1, n + 1).map(id => {
    const { name, material, picture } = _.sample(randomItems)
    return {
      id,
      name,
      material,
      picture,
      description: lorem,
      price: _.random(5000, 15000)
    }
  })
}
