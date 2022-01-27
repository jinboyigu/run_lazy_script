const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('运行成功');

async function main() {
    const name = `lazy_script`;
    if (!fs.existsSync(name)) {
        console.time('git clone');
        const output = execSync(`git clone https://github.com/jinboyigu/${name}.git`);
        console.log(output.toString());
        console.timeEnd('git clone');
    }
    console.time('run');
    console.log(execSync(`cd ${name} && npm i && npm run dev`).toString());
    console.timeEnd('run');
}

main();
