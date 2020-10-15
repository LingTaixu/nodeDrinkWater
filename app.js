const open = require("open");
console.log("开启成功")
var outTime = 0
var outData = setInterval(function() {
	outTime++
	if (outTime == 60) {
		outTime = 0
		open('https://pic2.zhimg.com/80/v2-200ebdfc2a49bf29414f504d01f57c22_720w.jpg?source=1940ef5c', {
			wait: true,
			app: 'chrome'
		})
	}
}, 60000)
