const express = require("express"); // import module express js
const app = express(); // membuat aplikasi express
const port = 3000; // deklarasi port 3000 pada variabel port

//Route untuk halaman utama index.html
app.get("/", (req, res) => {
  // mengirim file index.html
  res.sendFile("./index.html", { root: __dirname }); // __dirname : variabel global yang berisi path yang aktif yaitu app.js
});

// Route untuk halaman about
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// Route untuk halaman contact
app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

// Route untuk menampilkan halaman produk dan kategori
app.get("/product/:id", (req, res) => {
  // produk id didapat dari request parameter, untuk kategori didapat berdasarkan query tidak perlu diketik di route program
  res.send(`product :  ${req.params.id} <br> category :  ${req.query.category}`);
});

// jika halaman yang diakses bukan dari halaman ketiga diatas, maka route ini akan dijalankan
app.use("/", (req, res) => {
  res.status(404);
  res.send("Page not found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // menampilkan di terminal port yang sedang berjalan
});
