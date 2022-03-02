const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
    const {TEST} = process.env;
    console.log('test', TEST === '123');
}

console.log('开始运行');
main();
