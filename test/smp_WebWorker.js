document.addEventListener('DOMContentLoaded', function () {
  let result = document.getElementById('result');
  let worker = new Worker('process.js');

  document.getElementById('btn').addEventListener('click', function (e) {
    worker.postMessage({
      target: document.getElementById('target').value,
      num: document.getElementById('num').value,
    });
    result.textContent = '（計算中...）';
  });

  worker.addEventListener('message', function (e) {
    result.textContent = e.data;
  }, false);

  worker.addEventListener('error', function (e) {
    window.alert(e.message);
  }, false);
}, false);
