import fs from 'fs';


let content = `

******************************
나는 별이야
제일 빛나
******************************
    `;

fs.appendFileSync("you.txt", content);
