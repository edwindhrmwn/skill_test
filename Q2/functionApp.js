const dataJSON = require('./data.json')

// 1. Find users who don't have any phone numbers.
function findUserWithOutPhone() {
  let result = []
  dataJSON.map(profile => {
    if (profile.profile.phones.length > 0) {
      result.push(profile)
    }
  })
  return result
}
console.log('1. ', findUserWithOutPhone(), findUserWithOutPhone().length, '/', dataJSON.length, 'profile have phone number')

// 2. Find users who have articles.
function findUserArticles() {
  let result = []
  dataJSON.map(profile => {
    if (profile["articles:"].length > 0) {
      result.push(profile)
    }
  })
  return result
}

console.log('=========================')
console.log('2. ', findUserArticles(), findUserArticles().length, '/', dataJSON.length, 'profile have articles')

// 3. Find users who have "annis" on their name
function findUserWithNameWord_annis() {
  let result = []
  let search = /annis/i
  dataJSON.map(profile => {
    let full_name = profile.profile.full_name
    if (full_name.match(search)) {
      result.push(profile)
    }
  })
  return result
}
console.log('=========================')
console.log('3. ', findUserWithNameWord_annis(), findUserWithNameWord_annis().length, '/', dataJSON.length, 'have name word annis')

// 4. Find users who have articles on the year 2020
function userarticle2020() {
  let result = []
  dataJSON.map(el => {
    if (el['articles:'].length > 0) {
      el['articles:'].map(article => {
        let year = article.published_at.slice(0,4)
        if (year == '2020') {
          result.push(el)
        }
      })
    }
  })
  if (result.length > 0) {
    return result
  } else {
    return "Article not found"
  } 
}

console.log('========================')
console.log('4.', userarticle2020())

//5. Find users who are born in 1986
function searchBornYearUser() {
  let result = []
  dataJSON.map(user => {
    let userBornYear = user.profile.birthday.slice(0, 4)
    if (userBornYear == '1986') {
      result.push(user)
    }
  })
  return result
}

console.log('=======================')
console.log('5. ', searchBornYearUser(), searchBornYearUser().length, '/', dataJSON.length, 'user was born in 1986')

// 6. Find articles that contain "tips" on the title
function searchTitle () {
  let result = []
  let search = /tips/i
  dataJSON.map(user => {
    user['articles:'].map(article => {
      let title = article.title
      if (title.match(search)) {
        result.push(user)
      }
    })
  })
  return result
}

console.log('=======================')
console.log('6. ', searchTitle(), searchTitle().length, '/', dataJSON.length, 'user has articles with tips title')

// 7. Find articles published before August 2019
function searchPublihedBeforeAugust () {
  let result = []
  dataJSON.map(user => {
    if (user['articles:'].length > 0) {
      user['articles:'].map(article => {
        let month = Number(article.published_at.slice(5, 7))
        if (month < 8) {
          result.push(article)
        }
      })
    }
  })
  return result
}
console.log('=======================')
console.log('7. ', searchPublihedBeforeAugust(), searchPublihedBeforeAugust().length, 'articles who published before august')
