const express = require("express");
const app = express();
const port = 3000;
const handler = (req, res) => {
  try {
    res.status(200)
      .cookie('testCookieName', 'testValue', {domain: 'localhost', path: '/', maxAge: undefined})
      .send("ok")
  } catch (e) {
    res.status(400).send(e.message);
  }
};

app.get("/", [ handler ]);

app.listen(port, () => console.log(`issue 3935 listening on port ${port}!`));
