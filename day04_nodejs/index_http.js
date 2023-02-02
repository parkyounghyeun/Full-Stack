const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("<h1>Hello Nodejs world</h2>");
});

server.listen(3000, function () {
  console.log("nojs 서버 실행 중 ...");
});

/*console.log("Helo node.js World");
for (var i = 0; i < 10; i++) {
  console.log(i);
} */

// 한줄 주석
/* 
여러줄 주석
Node js문법은 ES6+ 문법 + 기존 자바스크립트 문법
*/

//DOS> node 폴더명 /파일명.js
