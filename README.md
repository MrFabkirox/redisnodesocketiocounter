Build a Reactive Hit Counter with Redis, NodeJs & Socket.io
Jay Jay

vm desktop lubuntu18044
~/workspace/redisnodesocketiocounter/

sudo npm -g install wscat
node server.js     # in server
npm run start      # in client
wscat -c ws://localhost:9090/socket.io/?transport=websocket

to test the connection to the server from outside



