const path = require("path");
require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? path.resolve(__dirname, ".env.dev") : path.resolve(__dirname, ".env")
});


const app = require("./src/http/server");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`));
