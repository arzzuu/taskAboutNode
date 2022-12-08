// console.log("Hello,world!");
const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error(err);
  }
  str = JSON.parse(data);
  let sum = 0;
  str.forEach(element => {
    sum += element.age;
  });
  let arirmetik = sum/str.length;
  let res = arirmetik.toString();
  console.log(arifmetik);
  deepStrictEqual.writeFileSync('result.txt', res)
});