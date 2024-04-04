self.addEventListener('message', function (e) {
  console.log("process.js head 0940")
  let count = 0;
  for (let i = 1; i < e.data.target; i++) {
    if (i % e.data.num === 0) { count++; }
  }
  postMessage(count);
});