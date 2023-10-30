const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname }, (err) => {
    if (err) {
      res.status(404);
      res.send("Page not found : 404");
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname }, (err) => {
    if (err) {
      res.status(404);
      res.send("Page not found : 404");
    }
  });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname }, (err) => {
    if (err) {
      res.status(404);
      res.send("Page not found : 404");
    }
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page not found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
