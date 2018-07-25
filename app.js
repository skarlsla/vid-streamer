var vidStreamer = require("vid-streamer");
var app = require("express")();
const fs = require('fs');

var newSettings = {
	rootPath: "",
	rootFolder: "",
	forceDownload: false,
	mode : "development",
	server: "VidStreamer.js/0.1.4"
}
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
app.get("/videos/*",vidStreamer.settings(newSettings));
app.listen(3000);
