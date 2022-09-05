# Maintainer: sukanka <su975853527 [AT] gmail.com>
pkgname=clash-for-windows-electron-bin
_pkgname=${pkgname%-bin}
pkgver=0.19.29
pkgrel=3
pkgdesc="A Windows/macOS/Linux GUI based on Clash and Electron. Using system clash and electron"
arch=("x86_64" "aarch64")
license=('unknown')
url="https://github.com/Fndroid/clash_for_windows_pkg"
install=clash-for-windows-bin.install
provides=('clash-for-windows' ${_pkgname})
conflicts=('clash-for-windows' 'clash-for-windows-bin')
depends=('electron'
'clash-geoip'
)
optdepends=(
    'nftables: TUN mode required.'
    'iproute2: TUN mode required.'
    'clash-premium-bin: clash core'
    'clash-meta: clash core'
)
makedepends=('asar' 'npm')
source_x86_64=("${pkgname}-${pkgver}-x86_64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-x64-linux.tar.gz")
source_aarch64=("${pkgname}-${pkgver}-aarch64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-arm64-linux.tar.gz")
source=(
    "clash-for-windows.desktop"
    "cfw"
    "cfw-start-pre.sh"
    "clash-core-service@.service")
sha256sums=('9a84b05b718913d3d1fbe462a2da671abff2cb94bb2ded75a3af12204cebe32f'
            'db2e160e5d5cf82ed69d0926ac51c0eccb9efc541f89be3bb467d85be509f735'
            '2d1cb05f33eef51d01bca397ac52796a557b812b243f0d5e5377f7640e4d4433'
            'd55c2f4088505116a5bad6d09f5ebe232e7c6a269ea6bf46daada02bc3a9f961')
sha256sums_x86_64=('202c3d6411b38c5fe53cea9361f4dac1c4dc88d1826cd9d647ed637a3651e9b4')
sha256sums_aarch64=('747e07d30a2794319f7a8528c97608e7d8e69566aacc4a5f343c3222ec130c8d')

_parch=$(echo ${arch} | sed "s/x86_64/x64/;s/aarch64/arm64/")
build() {
    cd $srcdir
    sed -i "s/pkgver/${pkgver}/" clash-for-windows.desktop

    cd "Clash for Windows-${pkgver}-${_parch}-linux"/resources/
    asar e app.asar apps

    # fix for autostart and system electron
    cd apps
    sed -i 's|r=n\[1\],|r="cfw\\nIcon=clash\\n",|g' dist/electron/renderer.js
    sed -i 's|"electron-log": "^4.1.0",|"electron-log": "^4.4.6",|g' package.json

    export HOME=$srcdir
    npm install
    cd ..
    asar p apps app.asar
}

package() {
    cd $srcdir

    install -Dm755 cfw -t ${pkgdir}/usr/bin
    install -Dm644 "clash-for-windows.desktop" -t ${pkgdir}/usr/share/applications
    install -Dm644 "clash-core-service@.service" -t ${pkgdir}/usr/lib/systemd/system/
    install -Dm755 cfw-start-pre.sh -t ${pkgdir}/opt/clash-for-windows

    cd "Clash for Windows-${pkgver}-${_parch}-linux"
    install -Dm644 resources/app.asar -t ${pkgdir}/opt/clash-for-windows/

    cp -pvr resources/static ${pkgdir}/opt/clash-for-windows/

    cd resources/apps/dist/electron/static/imgs
    install -Dm644 logo.png ${pkgdir}/usr/share/icons/hicolor/512x512/apps/clash.png

    cd ${pkgdir}/opt/clash-for-windows/static/files
    rm -rf linux/{common,${_parch}/clash-linux} default/Country.mmdb
    ln -s /usr/bin/clash linux/${_parch}/clash-linux
    ln -s /etc/clash/Country.mmdb default/Country.mmdb
}
