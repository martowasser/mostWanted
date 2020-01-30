const express = require('express')
const app = express()
const routes = require('./routes/index.route');

app.get('/', (req, res) => res.send('To find a criminal, head over to /criminals/find/:criminal_name'));
app.use(routes);

app.listen(3000, () => {console.log("Listening...")})
