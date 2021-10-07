const mongoose = require("mongoose");
const con = 'KrZlDKkhC7GGS2UN'
const nombre = 'veterinaria'
const url = `mongodb+srv://luffy:${con}@cluster0.i7cxz.mongodb.net/${nombre}?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`base de datos conectada`))
  .catch((e) => console.log(`error en la base de datos`, e));

module.exports = {
  mongoose,
};
