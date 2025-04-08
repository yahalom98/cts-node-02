const https = require("https");
const url = "https://api.fbi.gov/wanted/v1/list";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(data);
  });

  // response.on("end", () => {
  //   const body = JSON.parse(data);
  //   console.log(body);
  // });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
