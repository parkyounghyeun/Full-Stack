const express = require("express");
const app = express();

//public을 외부에서 접속 할 수 있도록 static 설정
app.use(express.static("public"));

const carList = [];
let cnt = 1;

app.get("/car/input", function (req, res) {
  /* var name = req.query.name;
  var price = req.query.price;
  var company = req.query.company;
  var year = req.query.year;
  console.log(name, price, company, year);
  res.end(`${name}, ${price},${company},${year}`);
}); //index.html에서의  action 부분 */

  //console.log(req.query);
  //res.end() 문자열 사용
  //res.send() object나 수식 사용
  //res.send(req.query);

  req.query.no = cnt++;
  carList.push(req.query);

  res.send(req.query);
});
app.listen(3000, function () {
  console.log("노드 js 서버 실행 중 : 3000");
});

//과제 1 : 오전에 하던 Slider 완성
//과제 2 : 무료템플릿 수정해서 firebase에 deploy
//과제 3 : 배운 내용 note 정리해서 게시판에 올리기
