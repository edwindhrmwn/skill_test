const dataJSON = require('./data.json')

// 1. Find items in the Meeting Room.
function findItem() {
  let result = []
  dataJSON.map(item => {
    let itemLocation = item.placement.name
    if (itemLocation === 'Meeting Room') {
      result.push(item.name)
    }
  })
  return result
}
console.log('1. ', findItem(), findItem().length, '/', dataJSON.length, 'Item in meeting room')

// 2. Find all electronic devices.
function findElectoric() {
  let result = []
  dataJSON.map(item => {
    if (item.type === 'electronic') {
      result.push(item.name)
    }
  })
  return result
}

console.log('2. ', findElectoric(), findElectoric().length, '/', dataJSON.length, 'Electronic Item')

// 3. Find all the furniture
function findAllFurniture() {
  let result = []
  dataJSON.map(item => {
    item.tags.map(tag => {
      if (tag === 'furniture') {
        result.push(item.name)
      }
    })
  })
  return result
}
console.log('3. ', findAllFurniture(), findAllFurniture().length, '/', dataJSON.length, 'Furnitures item')

// 4. Find all items were purchased on 16 Januari 2020
function findPurchasedItem() {
  let result = []
  dataJSON.map(item => {
    let time = new Date(item.purchased_at).toString()
    let date = time.slice(0, 10)
    if (date == 'Thu Jan 20') {
      result.push(date)
    }
  })
  if (result.length === 0) {
    return "Items were purchased on 16 Januari 2020 not found"
  } else {
    return result
  }
}
console.log('4. ', findPurchasedItem());

// 5. Find all items with brown color
function findColor () {
  let result = []
  dataJSON.map(item => {
    item.tags.map(tag => {
      if (tag === 'brown') {
        result.push(item.name)
      }
    })
  })
  return result
}
console.log('6. ', findColor(), findColor().length, '/', dataJSON.length, 'Brown color')