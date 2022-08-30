const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use("/", express.static("public"));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'/index.html'));
// })

// app.get('/iframe.html', (req, res) => {
//     res.sendFile(path.join(__dirname,'/iframe.html'));
// })

app.listen(port, () => {
    console.log(`Cypress app listening on port ${port}`)
})