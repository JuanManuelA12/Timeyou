const server = require("./src/App");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

//server.listen(PORT, () => console.log(`server on PORT ${PORT}`));

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`server on PORT ${PORT}`);
  });
});

