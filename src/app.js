const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
    const {token} = process.env;
    const name = `lazy_script`;
    if (!fs.existsSync(name)) {
        console.time('git clone');
        const url = token ? `https://jinboyigu:${token}@github.com/jinboyigu/${name}.git` : `https://github.com/jinboyigu/${name}.git`;
        const output = execSync(`git clone ${url}`);
        console.log(output.toString());
        console.timeEnd('git clone');
    }
}

console.log('开始运行');
main();
