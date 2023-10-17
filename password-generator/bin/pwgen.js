#!/usr/bin/env node

const { PasswordGenerator } = require("../index.js");

const pg = new PasswordGenerator();

const DEFAULT_LENGTH = 50;

const passLength = DEFAULT_LENGTH;

const randomPass = pg.random(passLength);

console.log(randomPass);
