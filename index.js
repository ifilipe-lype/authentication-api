
if(process.env.NODE_ENV === "development"){
  require("dotenv").config({
    path: ".env.dev",
  });
}


const app = require("./src/http/server");

const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (err) => {
  console.log("Exiting with error : ", err);
  process.exit(1);
})

app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`));
