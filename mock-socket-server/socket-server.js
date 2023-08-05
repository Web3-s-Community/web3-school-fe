const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let user_socket;

io.on("connection", (socket) => {
  user_socket = socket;
  console.log("a user connected");
});

app.use(cors());

app.post("/compile", (req, res) => {
  setTimeout(() => {
    user_socket.emit("compile", [
      "message",
      {
        type: "rcee/completed",
        jobId: "123456",
        task: "compile",
        status: "passed",
        output: null,
        error: {
          type: "compiler/error",
          errors: [
            {
              message:
                "ParserError: Expected ';' but got identifier\n --> sol-002.sol:9:19:\n  |\n9 |     bytes32 pblic b3 =\n  |                   ^^\n\n",
            },
          ],
        },
        codeId: "sol-002",
        language: "solidity",
        code: "",
      },
    ]);
  }, 3000);
  res.json({ job: { id: "123456" } });
});

app.post("/format", (req, res) => {
  // setTimeout(() => {
  //   user_socket.emit("format", [
  //     "message",
  //     {
  //       type: "rcee/completed",
  //       jobId: "123456",
  //       task: "format",
  //       status: "failed",
  //       output: null,
  //       error: {
  //         type: "compiler/error",
  //         errors: [
  //           {
  //             message:
  //               "ParserError: Expected ';' but got identifier\n --> sol-002.sol:9:19:\n  |\n9 |     bytes32 pblic b3 =\n  |                   ^^\n\n",
  //           },
  //         ],
  //       },
  //       codeId: "sol-002",
  //       language: "solidity",
  //       code: "",
  //     },
  //   ]);
  // }, 3000);
  setTimeout(() => {
    user_socket.emit("format", [
      "message",
      {
        type: "rcee/completed",
        jobId: "123456",
        task: "format",
        status: "passed",
        output: [
          "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.17;\n\ncontract ValueTypes {\n    bool public b = true;\n    int public i = -111;\n    uint public u = 123;\n    address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;\n    bytes32 public b32 =\n        0x89c58ced8a9078bdef2bb60f22e58eeff7dbfed6c2dff3e7c508b629295926fa;\n}\n",
        ],
        error: null,
        codeId: "sol-002",
        language: "solidity",
        code: "",
      },
    ]);
  }, 3000);
  res.json({ job: { id: "123456" } });
});

app.post("/run", (req, res) => {
  // setTimeout(() => {
  //   user_socket.emit("compile", [
  //     "message",
  //     {
  //       type: "rcee/completed",
  //       jobId: "123456",
  //       task: "format",
  //       status: "failed",
  //       output: null,
  //       error: {
  //         type: "compiler/error",
  //         errors: [
  //           {
  //             message:
  //               "ParserError: Expected ';' but got identifier\n --> sol-002.sol:9:19:\n  |\n9 |     bytes32 pblic b3 =\n  |                   ^^\n\n",
  //           },
  //         ],
  //       },
  //       codeId: "sol-002",
  //       language: "solidity",
  //       code: "",
  //     },
  //   ]);
  // }, 3000);
  setTimeout(() => {
    user_socket.emit("run", [
      "message",
      {
        type: "rcee/completed",
        jobId: "123456",
        task: "test",
        status: "passed",
        output: [
          "\u001b[0m\u001b[0m",
          "\u001b[0m  ValueTypes\u001b[0m",
          "\u001b[32m  \u001b[32m✔\u001b[39m\u001b[0m\u001b[90m b = true\u001b[0m",
          "\u001b[32m  \u001b[32m✔\u001b[39m\u001b[0m\u001b[90m i < 0\u001b[0m",
          "\u001b[32m  \u001b[32m✔\u001b[39m\u001b[0m\u001b[90m u = 123\u001b[0m",
          "\u001b[32m  \u001b[32m✔\u001b[39m\u001b[0m\u001b[90m addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\u001b[0m",
          "\u001b[32m  \u001b[32m✔\u001b[39m\u001b[0m\u001b[90m b32 = 0x89c58ced8a9078bdef2bb60f22e58eeff7dbfed6c2dff3e7c508b629295926fa\u001b[0m\n\n\n\u001b[92m \u001b[0m\u001b[32m 5 passing\u001b[0m\u001b[90m (250ms)\u001b[0m",
        ],
        error: null,
        codeId: "sol-002",
        language: "solidity",
      },
    ]);
  }, 3000);

  res.json({ job: { id: "123456" } });
});

server.listen(12345, () => {
  console.log("listening on *:3000");
});
