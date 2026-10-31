const http = require("http");
const { add, multiply, subtract } = require("./calculator");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    res.end(JSON.stringify({
      message: "Jenkins CD Demo is running!",
      status: "success"
    }));
    return;
  }

  res.end(JSON.stringify({
    add: add(10, 5),
    multiply: multiply(10, 5),
    subtract: subtract(10, 5)
  }));
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
