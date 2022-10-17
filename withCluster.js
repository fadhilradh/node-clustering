const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  // Master process
  const numCPUs = os.cpus().length;
  console.log(`Master cluster setting up ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // worker process

  const express = require("express");
  const app = express();
  const port = process.env.PORT || 8000;
  const { spawn } = require("child_process");

  const pid = process.pid;

  const server = app.listen(port, () => {
    console.log(`Server : process ${pid} on port ${port}`);
  });

  app.get("/", (req, res) => {
    for (var i = 0; i < 2e6; i++) {}
    res.status(200).send("Server says hello world!");
  });
}
