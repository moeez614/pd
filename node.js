const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000

app.use(express.json());
app.use(cors());

app.post('/form', (req, res) => {
    let info =req.body;
    console.log(info);
    // console.log(info.area);
    res.json({ message: 'JSON received successfully', data: req.body });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://Localhost:${port}`)
})
