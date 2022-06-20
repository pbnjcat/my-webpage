let express = require('express');
const { path } = require("express/lib/application");
let app = express();
port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + public));
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })