#!/usr/bin/env node

const { PasswordGenerator } = require("../index.js");

const pg = new PasswordGenerator();

const passLength = 25;
const randomPass = pg.random(passLength);

console.log(randomPass);
