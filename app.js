const vidStreamer = require("vid-streamer");
const app = require("express")();
const fs = require('fs');
const vidConfig = require('./config.json');
app.get("/",function(req,res){
	var sendStr='<br /><h1>영상목록</h1>' +
	'<br />';
	fs.readdir('./videos', (err, files) => {
	  files.forEach(file => {
		sendStr+= '<a href="/videos/'+file+'">'+file+'</a><br />';
	  });
	   res.send(sendStr);
	})
})

app.get("/videos/*",vidStreamer.settings(vidConfig.videos));
app.listen(3000);
