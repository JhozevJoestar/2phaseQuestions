
function printNumbers(from, to) {
    let num = from;
    let set = setInterval(function() {
        console.log(num);
        if (num == to) {
            clearInterval(set);
        }
        num++;
    }, 1000);
}


function printNumbers(from, to) {
    let num = from;
    setTimeout(function start() {
      alert(num);
      if (num < to) {
        setTimeout(start, 1000);
      }
      num++;
}, 1000);
  }

printNumbers(1, 5)