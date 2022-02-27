#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

const parseFile = function (path) {

    if (!fs.existsSync(path)) {
        return;
    }
    let content = JSON.parse(fs.readFileSync(path, "utf8"));

    content.name = "wechat_devtools";
    // 开启调试，更新参数
    content['chromium-args'] = content['chromium-args'].replace('--disable-devtools', '--mixed-context').replace('--ignore-gpu-blacklist', '--ignore-gpu-blocklist')
    content.window.height = content.window.width = 1000
    fs.writeFileSync(path, JSON.stringify(content));

};

parseFile(path.resolve(__dirname, "../package.nw/package.json"));
parseFile(path.resolve(__dirname, "../package.nw/package-lock.json"));
