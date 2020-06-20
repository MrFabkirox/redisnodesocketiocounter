// redisnodesocketiocounter/client/src/index.js

import io from 'socket.io-client'

const socket = io('http://localhost:9090')
//* 2
const arr1 = [ 1, 2, 3, 4 ]
const arr2 = [ 5, 6, 7, 8 ]

const someFunc = () => {
  return [ ...arr1, ...arr2 ]
}
console.log(someFunc());

// 3
socket.on('connect', () => {
  console.log('____socket io Connected at index.js')
})
// // 4
// socket.on('connect', () => {
//   console.log('____socket io Connected at index.js')
//   if(window.location.hash) {
//     const id = window.location.hash.substring(1);
//     console.log('____id substring [%o]', id);
//   }
// })
// // 7
// socket.on('connect', () => {
//   console.log('____socket io Connected at index.js')
//   if(window.location.hash) {
//     const hashID = window.location.hash.substring(1)
//     socket.emit('hello', { hashID })
//     socket.on('stats', data => {
//       console.log('____ socket on client data [%o]', data)
//     })
//   }
// })
// 8
socket.on('connect', () => {
  console.log('____ socket io Connected at index.js')
  if(window.location.hash) {
    const hashID = window.location.hash.substring(1)
    socket.emit('hello', { hashID })
    console.log('____ hashID substring [%o]', hashID);
    socket.on('stats', hits => {
      document.getElementById('hitCount').innerText = hits
    })
  }
})

