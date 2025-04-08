const fs = require("fs");

let data = 'Omer'

fs.writeFileSync(
  "koolibooli.txt",
  data
);
fs.copyFileSync("koolibooli.txt", "copy.txt");
fs.renameSync("koolibooli.txt", "PiniAndMordy.txt");
const list = fs.readdirSync("./");
fs.appendFileSync("copy.txt", `\n${list}`);
