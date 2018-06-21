'use strict'
const aName = 'URLshortener'

let dataStorage = {}
const set = (key, value) => {
  dataStorage[key] = value
  return key
}

const get = (key) => {
  if (this.exist(key)) {
    return dataStorage[key] 
  } else {
    return undefined
  }
}

const exist = (key) => {
  if (dataStorage[key] == undefined) {
    return false
  } else {
    return true
  }
}
// const Storage = {

//   // LocalStorage
//   set (key, value) {
//     localStorage.setItem(appName + '_' + key, JSON.stringify(value))
//   },

//   get (key) {
//     let data = localStorage.getItem(appName + '_' + key)
//     try {
//       return JSON.parse(data)
//     } catch (Exception) {
//       return data
//     }
//   },

//   remove (key) {
//     localStorage.removeItem(appName + '_' + key)
//   },

//   destroy (key) {
//     this.remove(key)
//   },

//   exist (key) {
//     var value = localStorage.getItem(appName + '_' + key)
//     return typeof value !== 'undefined' && value !== undefined && value !== null && value !== 'null' && value !== '[]'
//   }

// }
module.exports = {
  set,
  get,
  exist
}