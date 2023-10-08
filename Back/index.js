<<<<<<< HEAD
require("dotenv").config();
const transporter = require("./src/nodemailer/postEmail");
=======
require('dotenv').config();
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
const server = require("./src/App");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

//server.listen(PORT, () => console.log(`server on PORT ${PORT}`));

<<<<<<< HEAD
conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server on PORT ${PORT}`);
    });
  })

  .then(async () => {
    await transporter.verify().then(() => {
      console.log("Email service: ✅");
    });
  });
=======
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`server on PORT ${PORT}`);
  });
});
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
