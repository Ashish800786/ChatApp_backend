const express=require('express');
const {createServer}=require('node:http');
const app=express();
const port=3000;
const server=createServer(app);
const {Server} = require('socket.io');
const io= new Server(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
        });

const ROOM='general';
io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
    socket.on('join',async (userObje)=>{
        console.log(`${userObje.username} joined ` ); 
        await socket.join(ROOM); 
        // Broadcast the user object to all clients in the room  
        // io.to(ROOM).emit('roomNotice',userObje);

        // Broadcast a message to all clients in the room that a new user has joined
        socket.to(ROOM).emit('roomNotice',userObje);
        socket.on('message',async (message)=>{
            console.log(`Message from ${userObje.username}: ${message}`);
            // Broadcast the message to all clients in the room
            socket.to(ROOM).emit('message', message);
        });

        socket.on('typing',(userObj)=>{
            socket.to(ROOM).emit('typing',userObj);
        });

        socket.on('stopTyping',(userObj)=>{
            socket.to(ROOM).emit('stopTyping',userObj);
        }); 
        
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id  );
    });
});


app.get('/',(req,res)=>{
    res.json({message: 'Hello World'});
});
 
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})