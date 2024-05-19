#!/usr/bin/env node
const { spawn } = require("child_process");
const { resolve } = require("path");

const scriptPath = resolve(__dirname, "src/index.ts");

const child = spawn(
    "ts-node",
    [scriptPath],
    {
        stdio: ["inherit", "inherit", "inherit"],
    }
);
