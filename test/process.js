self.addEventListener('message', function (e) {
  console.log("process.js head")
  num = e.data.num
  
  let count = 0;
  let target = 100
  for (let i = 1; i < 100; i++) {
    if (i % e.data.num === 0) { count++; }
  }

  postMessage(count);
});