const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

/* DEBUG */
app.get('/', (req, res) => {
  res.send('Lights on!');
})

app.listen(port, () => {
  console.log(`Example app listening on port:${port}`);
})

app.post('/form', (req, res, next) => {
  console.log(req);
  res.send("ok");
  res.status(200);
  // next();
})

/* GET users listing */
// router.post('/form', async function(req, res, next) {
//   console.log(req.body);
//   res.send("ok");
//   res.status(200);
//   await next();
// });

// module.exports = router;
