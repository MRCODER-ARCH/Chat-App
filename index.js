const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

users = [];
io.on('connection', function(socket){
    console.log('A user Connected');
    socket.on('setUsername',function(data){
        console.log(data);

        if(users.indexOf(datas)> -1){
            socket.emit('userExists',data + ' username is taken! Try using other username')
        }
        else{
            users.push(data);
            socket.emit('userSet',{username:data})
        }
    })
    socket.on('msg',function(data){
        io.emit('newmessage',data)
    })
})


http.listen('3000', function(){
    console.log('App Listening On Port 3000')
})
