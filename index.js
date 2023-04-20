function changeStr(str) {
    let newArr = []
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      const repeatedChar = char.repeat(i + 1);
      const upperFirstChar = repeatedChar[0].toUpperCase() + repeatedChar.slice(1).toLowerCase();
      newArr.push(upperFirstChar)
    }

    const complete = newArr.join("-")
    return complete
  }


console.log(  changeStr("dbcn"));