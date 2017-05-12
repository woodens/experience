###核心函数
- `emit` 用于发射一个事件或者触发事件
- `on`  用于监听emit发射的事件

### 使用socketio
- 安装 `npm i socketio`
- 服务端代码
	```javascript
	var fs = require('fs');
	var server = require('http').createServer(function(req,res){
		fs.readFile(__dirname+"",function(err,data){
			if(err){
				res.writeHead(500);
				return res.end('error loading index.html ');
			}
			res.write(200);
			res.end(data);
		})
	});
	
	var io = require('socket.io')(server);
	
	io.sockets.on('connection',function(socket){
		socket.emit('news',{hello:'world'})l
		socket.on('my other event',function(data){
			console.log(data);
		});
	});
	
	server.listen(80);
	```

- 客户端代码

	```javascript
	<script src="/socketio/socketio.js"></script>
	<script>
		var socket = io.connect('http://localhost');
		socket.on('news',function(data){
			console.log(data);
			socket.emit('my other event',{my:'data'});
		});
	</script>
	```
