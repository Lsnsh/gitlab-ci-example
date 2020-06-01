const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");

const htmlFilePath = path.resolve(__dirname, "../dist/index.html");

fs.readFile(htmlFilePath, (err, data) => {
  if (err) {
    return;
  }
  const $ = cheerio.load(data);
  $("#app").append(
    `<div style="color: red;">append content by build on ${new Date().toUTCString()}</div>`
  );
  fs.writeFileSync(htmlFilePath, $.html());
});
