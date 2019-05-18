# Maintainer: Lev Lybin <lev.lybin@gmail.com>
# Contributor: Lev Lybin <lev.lybin@gmail.com>

pkgname=phoenix
pkgver=v1.0.0.beta.6.r22.g0b7591e8
pkgrel=1
pkgdesc="The BurstCoin desktop wallet"
arch=('i686' 'x86_64')
url="https://github.com/burst-apps-team/phoenix"
license=('GPL3')
depends=('nodejs>=10')
makedepends=('npm' 'angular-cli')
install=phoenix.install
source=(git+https://github.com/burst-apps-team/$pkgname.git
	$pkgname.desktop
	electron-builder.json.patch)
sha256sums=('SKIP'
	    'ee7cb123dca7e311bea596df59d59284a9b0b32be6990da3cd89303a800acac0'
	    'b9d713a3c016b4ba7d68803c24aea06518991e02103ba03d7060d95be469e307')

pkgver() {
    cd "${srcdir}/${pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${pkgname}/lib"
    npm install
    npm run bootstrap
    cd ../web/angular-wallet
    npm install
    cd ../../scripts
    npm install
    cd ../desktop/wallet
    npm install
    # patch build only unpacked
    patch electron-builder.json < "${srcdir}/electron-builder.json.patch"

    npm run release:linux
}

package() {
    install -dm755 "${pkgdir}/opt/${pkgname}"
    cp -a "${srcdir}/${pkgname}/desktop/wallet/release-builds/linux-unpacked/." "${pkgdir}/opt/${pkgname}"

    # https://github.com/electron/electron/issues/17972
    cd "${pkgdir}/opt/${pkgname}"
    chmod 4755 ./chrome-sandbox
    chown root:root ./chrome-sandbox

    # Menu entry
    install -Dm644 "${srcdir}/${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
    install -Dm644 "${srcdir}/${pkgname}/assets/phoenix.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
