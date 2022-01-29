const tools = require("../tools/tools")
const path = require("path");

const dtoIn = {
  count: 5,
  age: {
    min: 18, 
    max: 55
  }
};

async function runFile(file) {
  const dtoOut = await tools.runFile(path.resolve(__dirname, file), dtoIn);
  console.log(JSON.stringify(dtoOut, null, 1));
}

runFile("task.js");
