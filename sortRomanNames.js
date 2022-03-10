function sortRomanNames(names) {
  let map = new Map();
  let str = "";

  map = buildMap(names); // [ "Boris V", "Boris II" ] --> { Boris: [V, II] }
  map = replaceRomanWithNumbers(map); // { Boris: [V, II] } ---> { Boris: [2, 5]}

  const surnames = names.map((n) => n.split(" ")[0]); // [Boris I, Boris V] ---> [Boris, Boris]
  const uniqueSurnames = [...new Set(surnames)]; // [Boris, Boris] --> [Boris]
  const uniqueSurnamesSorted = uniqueSurnames.sort();

  str = buildString(uniqueSurnamesSorted, map);

  return str;
}

//////////////////////////////////// Helpers //////////////////////////////

function replaceRomanWithNumbers(map) {
  let numbers = [];
  for (const [surname, romans] of map) {
    numbers = [];
    for (r of romans) {
      numbers.push(romanToInt(r));
    }
    map.set(surname, numbers.sort());
  }

  return map;
}

function buildMap(names) {
  let map = new Map();

  let key = "";
  let value = "";
  let roman = "";
  for (const n of names) {
    key = n.split(" ")[0];
    roman = n.split(" ")[1];
    if (map.has(key)) {
      value = map.get(key);
      value.push(roman);
    } else {
      value = [roman];
    }

    map.set(key, value);
  }

  return map;
}

function buildString(uniqueSurnamesSorted, map) {
  let str = "";
  for (const name of uniqueSurnamesSorted) {
    const numbers = map.get(name); // [1, 2, 3]
    for (num of numbers) {
      str = str.concat(`${name} ${num} `); // "Boris 2"
    }
  }

  // return the string without the extra space at the end of the string
  return str.substring(0, str.length - 1); 
}

function romanToInt(str) {
  const romanSymbolToNumber = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["CM", 900],
    ["M", 1000],
  ];
  romanSymbolToNumber.reverse();

  let num = 0;

  while (str !== "") {
    for (let [symbol, value] of romanSymbolToNumber) {
      if (isHead(symbol, str)) {
        str = removeHeadFromString(symbol, str);
        num += value;
      }
      if (str === "") break;
    }
  }

  return num;
}

function isHead(head, str) {
  return head === str.substring(0, head.length);
}

function removeHeadFromString(head, str) {
  let res = str.substring(head.length, str.length);
  return res;
}

module.exports = sortRomanNames