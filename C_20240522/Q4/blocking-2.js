const {log} = require("console");
const fs = require("fs");

const data2 = fs.readFile("example.txt", (error, readData) => {
    if(error){
        log("error");
    }
    log(readData.toString());
})
log("이걸 보고 싶은 거였어!! =================>> 코드 끝!");