const fs = require("fs");

let data = fs.readFileSync("./example.txt", "utf-8");
console.log(data);
console.log("코드 끝!");