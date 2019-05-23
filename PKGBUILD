# Maintainer: ccat3 <c0ldcat3z@gmail.com>
# Contributor: bruceutut <zttt183525594@gmail.com>

# 方法来自https://github.com/cytle/wechat_web_devtools重新打包

_wechat_devtools_ver="1.02.1904090"
_wechat_devtools_url="https://dldir1.qq.com/WechatWebDev/1.2.0/201904090/wechat_devtools_1.02.1904090_x64.exe"

_wechat_devtools_exe="wechat_devtools_${_wechat_devtools_ver}_x64.exe"
_nwjs_ver="0.24.4"
_arch="x64"
_install_dir="/opt/wechat-devtools"
_node_version="v8.11.3"

pkgname=wechat-devtools
pkgver=${_wechat_devtools_ver}
pkgrel=2
epoch=2
pkgdesc="WeChat Devtools Linux version."
arch=("x86_64")
url="https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html"
license=('unknown')
depends=('wine' 'gconf')
makedepends=('p7zip' 'nvm')
source=("nwjs.tar.gz::https://npm.taobao.org/mirrors/nwjs/v${_nwjs_ver}/nwjs-sdk-v${_nwjs_ver}-linux-${_arch}.tar.gz"
        "${_wechat_devtools_exe}::${_wechat_devtools_url}"
        "wechat-devtools.desktop"
        "logo.svg")
md5sums=(82f20fe9081201db81652eb066c29f9b
         a6c2354204968cc5aa2b2d291d65ca3c
         c87aedb94fdb27085b00fd7851a21945
         de6f2f282e6d813100474d75d8abfeb9)
options=('!strip')

prepare() {
    7z x -owechat_devtools ${_wechat_devtools_exe}
}

build() {
    unset npm_config_prefix
    source /usr/share/nvm/init-nvm.sh
    nvm install ${_node_version}
    nvm use ${_node_version}

    cp $(which node) node

    cd ${srcdir}/wechat_devtools/\$APPDATA/Tencent/微信web开发者工具/package.nw
    sed -ri -e 's/f\.isMac\?"node-sync-ipc":"node-sync-ipc-nwjs"/"node-sync-ipc"/g' ./js/*.js
    sed -i 's#-load-extension=\./js#-load-extension=./package.nw/js#' package.json
    sed -i 's#AppData/Local/\${global.userDirName}/User Data/Default#.config/\${global.userDirName}/Default#g' ./js/common/cli/index.js
    sed -i 's#USERPROFILE#HOME#g' ./js/common/cli/index.js

    # rebuild node-sync-ipc
    cd ./node_modules/node-sync-ipc
    npm run install

    nvm deactivate
}

package() {
    mkdir -p ${pkgdir}${_install_dir}
    cd ${pkgdir}${_install_dir}
    cp -r ${srcdir}/nwjs-sdk-v${_nwjs_ver}-linux-${_arch}/* ./
    cp -r ${srcdir}/wechat_devtools/\$APPDATA/Tencent/微信web开发者工具/package.nw ./package.nw
    find ./package.nw -type d | xargs chmod -R a+rx
    cp ${srcdir}/node node
    ln -s node node.exe

    install -Dm644 "${srcdir}/wechat-devtools.desktop" "${pkgdir}/usr/share/applications/wechat-devtools.desktop"
    install -Dm644 "${srcdir}/logo.svg" "${pkgdir}/usr/share/icons/hicolor/scalable/apps/wechat-devtools.svg"
}
