# Maintainer: Lucas Malandrino <lucas.malandrino@gmail.com>
pkgname='edex-ui'
pkgver=2.0.0
pkgrel=1
pkgdesc="A science fiction desktop running everywhere. Awesome."
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url='https://github.com/GitSquared/edex-ui'
license=('GPL3')
depends=('gtk3'
         'gconf'
         'libxss'
         'nss')
makedepends=('npm')
provides=('edex-ui')
install="edex-ui.install"
source=("https://github.com/GitSquared/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('6d20012e6db822bd80609c8f7349466d7baf79ed940c10c2b4613cf6a36f3e02')

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
