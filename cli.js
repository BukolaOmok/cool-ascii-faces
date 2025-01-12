#!/usr/bin/env node

const coolFace = require('./');
const args = process.argv.splice(2);

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  coolFace.faces.forEach(function (face) {
    process.stdout.write(face + '\n');
  });

  return;
}

process.stdout.write(coolFace() + '\n');
