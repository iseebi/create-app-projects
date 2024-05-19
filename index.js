#!/usr/bin/env node
const { spawn } = require("child_process");

const child = spawn(
    "ts-node",
    ["./src/index.ts"],
    {
        stdio: ["inherit", "inherit", "inherit"],
    }
);
