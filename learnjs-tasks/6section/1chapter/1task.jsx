function pow(x) {
    let result = 0;
    for (let i = 0; i < x+1; i++) {
      result += i;
    }
    return result;
  }
  
  console.log(pow(100));


  function powRec(x) {
    if (x == 1) {
      return x;
    } else {
      return x + pow(x - 1);
    }
  }
  
  console.log(powRec(100));

  function powN(x) {
    return x * (x + 1) / 2;
  }

  console.log(powN(100));

//   Решение через формулу быстрейшее. После идет цикл и самый медленный-рекурсия