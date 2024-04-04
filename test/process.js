self.addEventListener('message', function (e) {
  console.log("process.js head")

  n = e.data.num

  const PJudge = []; //素数かどうか判断結果を保持する配列
  for (let i = 0; i <= n; i++) {
      PJudge[i] = true; //初期値で true
  }

  PJudge[0] = false; // 0 は素数でない
  PJudge[1] = false; // 1 は素数でない

  //倍数は素数でない
  for (let i = 2; i <= Math.sqrt(n); i++) {
      for (let j = 2; j * i <= n; j++) {
          PJudge[i * j] = false;
      }
  }

  // 素数を取り出し、Res 配列に保管
  const Res = []; 
  for (let i = 0; i < PJudge.length; i++) {
      if (PJudge[i]) Res.push(i);
  }

  //return Res; //素数を収納した配列を返す
 
  count =  Res.length //素数の個数を返す

  postMessage(count);
});