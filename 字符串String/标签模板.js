function tag(s, v1, v2, v3) {
  console.log(0, s[0]);
  console.log(1, s[1]);
  console.log(2, s[2]);
  console.log(v1);
  console.log(v2);
  console.log(v3);
}

const a = 5;
const b = 6;

tag`Hello ${a + b} world ${a * b} v3 ${a - b}`;

