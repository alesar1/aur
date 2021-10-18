# Maintainer: Lucas Malandrino <lucas.malandrino@gmail.com>
# Co-maintainer & author of the original software: Gabriel Saillard <gabriel@saillard.dev>
pkgname='edex-ui'
pkgver=2.2.8
pkgrel=1
pkgdesc="A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support."
arch=('i686' 'x86_64')
url='https://github.com/GitSquared/edex-ui'
license=('GPL3')
depends=('gtk3'
         'libxss'
         'nss')
makedepends=('nodejs-lts-erbium'
             'npm'
             'python'
             'rsync')
provides=('edex-ui')
install="edex-ui.install"
source=("https://github.com/GitSquared/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('c6a8ef34890c028ee2a1e4c64485db29d4d0aedda0d63c0fc5f8572d45226b51')

build() {
    cd "${pkgname}-${pkgver}"

    npm install

    # Build tarball with electron-builder
    npm run prebuild-linux
    ${srcdir}/${pkgname}-${pkgver}/node_modules/.bin/electron-builder -l pacman -p never
    npm run postbuild-linux
}

package() {
    cd "${pkgname}-${pkgver}"

    # Extract the package made by electron-builder
    # It's not pretty but blame electron
    tar xf ./dist/eDEX-UI-linux-*.pacman -C "${pkgdir}"
    cd "${pkgdir}"

    # Garbage madeby electron-builder
    rm -f "${pkgdir}/.INSTALL" "${pkgdir}/.MTREE" "${pkgdir}/.PKGINFO"

    chmod 755 "${pkgdir}/opt/eDEX-UI/edex-ui"
}
