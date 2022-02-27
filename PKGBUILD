# Maintainer: sukanka <su975853527 [AT] gmail.com>
pkgname=clash-for-windows-electron-bin
_pkgname=${pkgname%-bin}
pkgver=0.19.10
pkgrel=3
pkgdesc="A Windows/macOS/Linux GUI based on Clash and Electron. Using system clash and electron"
arch=("x86_64")
parch=$(echo ${arch} | sed "s/x86_64/x64/")
license=('unknown')
url="https://github.com/Fndroid/clash_for_windows_pkg"
install=clash-for-windows-bin.install

provides=('clash-for-windows' ${_pkgname})
conflicts=('clash-for-windows' 'clash-for-windows-bin')

depends=('electron'
'clash'
'clash-geoip'
)

optdepends=(
    'nftables: TUN mode required.'
    'iproute2: TUN mode required.'
    'clash-premium-tun: TUN mode required'
)
makedepends=('asar'
'npm'
)

source=(
    "${pkgname}-${pkgver}-${arch}-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-${parch}-linux.tar.gz"
    "clash-for-windows.desktop"
    "cfw"
    "clash-core-service@.service"
    )
sha256sums=('90d8ae93b73b970cb1901c1212ec9c0142d504135a6bb07bf1600cc00b8d3221'
            '340ee7a8c8e7da27eca9891dbc6997e7b2d87607947e8010903fb79d1fbb9da6'
            'db2e160e5d5cf82ed69d0926ac51c0eccb9efc541f89be3bb467d85be509f735'
            '98c0b73fb879941364e3f6b1b45d0c504c91f07280a4801db908312cea84f32d')

build() {
    cd $srcdir
    sed -i "s/pkgver/${pkgver}/" clash-for-windows.desktop
    
    cd "Clash for Windows-${pkgver}-${parch}-linux"/resources/
    asar e app.asar apps
    
    # fix for autostart and system electron
    cd apps
    sed -i 's|r=n\[1\],|r="cfw\\nIcon=clash\\n",|g' dist/electron/renderer.js
    sed -i 's|"electron-log": "^4.1.0",|"electron-log": "^4.4.6",|g' package.json
    
    npm install
    cd ..
    asar p apps app.asar
}

package() {
    cd $srcdir
    
    install -Dm755 cfw -t ${pkgdir}/usr/bin
    install -Dm644 "clash-for-windows.desktop" -t ${pkgdir}/usr/share/applications
    install -Dm644 "clash-core-service@.service" -t ${pkgdir}/usr/lib/systemd/system/
    
    cd "Clash for Windows-${pkgver}-${parch}-linux"
    install -Dm644 resources/app.asar -t ${pkgdir}/opt/clash-for-windows/
    
    cp -pvr resources/static ${pkgdir}/opt/clash-for-windows/
    
    cd resources/apps/dist/electron/static/imgs
    install -Dm644 logo.png ${pkgdir}/usr/share/icons/hicolor/512x512/apps/clash.png
    
    cd ${pkgdir}/opt/clash-for-windows/static/files
    rm -rf linux/{common,x64/clash-linux} default/Country.mmdb
    ln -s /usr/bin/clash linux/x64/clash-linux
    ln -s /etc/clash/Country.mmdb default/Country.mmdb
}
