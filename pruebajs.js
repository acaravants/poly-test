get = (arrayString, arrayTry) => {
  const arrayResult = [];

  for (let i = 0; i < arrayString.length; i++) {
    const a = arrayString[i].slice('');
    let open = 0, close = 0;
    const arrayBalance = [];
    arrayBalance.push(a[0]);

    for (let j = 1; j < a.length; j++) {
      if (a[j] === '<') {
        arrayBalance.push('<');
      } else if (a[j] === '>' && arrayBalance[arrayBalance.length -1] === '<') {
        arrayBalance.pop();
      } else if (a[j] === '>' && arrayBalance[arrayBalance.length -1] !== '<') {
        arrayBalance.push('>');
      }
    }
    if (arrayBalance.length <= arrayTry[i]) {
      arrayResult.push(1);
    } else {
      arrayResult.push(0);
    }
  }
  return arrayResult;
}
arrayString = ["<<>", "<<<>>>", "<<<>", "<>", "><>", "<>>>"];
arrayTry = [1,1,1,2,0,1];
console.log(get(arrayString, arrayTry));
