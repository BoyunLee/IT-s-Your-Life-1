import fs from 'fs';

const data = fs.readFileSync("me.txt", "utf8");
if (fs.existsSync("me.txt")) {
    fs.writeFileSync("you.txt", data);
    let content = `

******************************
나는 별이야
제일 빛나
******************************
    `;
    fs.appendFileSync("you.txt", content);
} else {
    console.log("file no exist");
}