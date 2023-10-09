const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(bodyParser.json())
  .use(cors());

app.get("/", (req, res) => {
  const message =
    "Unable to find the requested resource! You can try another URL.";
  res.status(404).json({ message });
});

require("./src/routes/guide")(app);
require("./src/routes/home")(app);

// On gère les routes 404.
app.use(({ res }) => {
  const message =
    "Unable to find the requested resource! You can try another URL.";
  res.status(404).json({ message });
});

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  )
);
