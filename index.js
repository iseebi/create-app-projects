#!/usr/bin/env node
const requirejs = require("requirejs");

// noinspection JSUnresolvedReference
requirejs.config({
    baseUrl: __dirname,
    paths: {
        index: "dist/index",
    },
    nodeRequire: require,
});

requirejs(["index"], (index) => {
    /* nop */
});

