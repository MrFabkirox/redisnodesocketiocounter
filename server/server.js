// redisnodesocketiocounter/server/server.js

const io = require('socket.io')(9090)
const redis =require('redis');
const client = redis.createClient();

// // 1
// io.on('connection', () => {
//   console.log('________________client server.js connected')
// });

// // 4-1 cors solving attempt, but in fact no need it seems
// app.use((req, res, next) => {
//   res.header('Access-Controller-Allow-Origin', '*');
//   res.header('Access-Controller-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({
//       // header: res.header // to try later
//     });
//   }
//   next();
// });

// // 5 // localhost:8080/#test
// io.on('connection', socket => {
//   socket.on('hello', hashID => {
//     console.log('____ hashID [%o]', hashID)
//   })
// })
// 6
io.on('connection', socket => {
  socket.on('hello', data => {
    client.incr(data.hashID, (err, count) => {
      socket.emit('stats', count)
      console.log('____ socket emit count [%o]', count)
      socket.on('stats', data => {
        console.log('____ socket on server data [%o]', data)
        console.log('____ no show ?')
      })
    })
  })
})
// 9
io.on('connection', socket => {
  socket.on('hello', data => {
    socket.join(data.hashID)
    client.incr(data.hashID, (err, count) => {
      io.to(data.hashID).emit('stats', count)
      console.log('____ socket emit count [%o]', count)
      socket.on('stats', data => {
        console.log('____ socket on data [%o]', data)
      })
    })
  })
})

