const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { eventsHandler } = require("./middleware/eventsMiddleware");
const { watchLogs } = require("./middleware/fileMiddleware");

watchLogs();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/status", (request, response) =>
  response.json({ clients: clients.length })
);

const PORT = 3000;

let clients = [];

app.listen(PORT, () => {
  console.log(`Events service listening at http://localhost:${PORT}`);
});

app.get("/events", eventsHandler);