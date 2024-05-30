const axios = require("axios");

const data = {
  companyName: "affordmed",
  clientID: "53cba6d9-d40e-4456-b5bb-559832bcc31c",
  clientSecret: "WPZfqhwehoXUJdbU",
  ownerName: "Himanshu Shishodia",
  rollNo: "21SCSE1010040",
  ownerEmail: "himanshu.11.shishodia@gmail.com",
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios
  .post("http://20.244.56.144/test/auth", data, config)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  });
