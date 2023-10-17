#!/usr/bin/env node

const { PasswordGenerator } = require("../index.js");

const pg = new PasswordGenerator();

const DEFAULT_LENGTH = 50;

const args = process.argv.slice(2);

const passLength = args[0] || DEFAULT_LENGTH;

const randomPass = pg.random(passLength);

console.log(randomPass);
