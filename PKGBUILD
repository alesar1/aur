# Maintainer: Ruben Solvang <post@rubensolvang.no>
pkgname=bas21-bin
pkgver=1.5.1
pkgrel=2
pkgdesc="A norwegian accounting and invoice system"
arch=('x86_64')
url=https://bas21.no
license=('custom')
sha256sums=('a915412f7741708b60968aceb8ba5550e07c4cfbb55e8923625ca1a5ab609723')
options=('!strip')
depends=('openssl>=1.1.1')
source=("https://download.bas21.no/bas21/bas21-$pkgver.tar.xz")

package() {
    cd "${srcdir}"

    # Install BAS21
    install -dm755 "${pkgdir}/opt"
    cp --preserve=mode -r "bas21-${pkgver}" "${pkgdir}/opt/bas21"

    # Install icons
    for res in 128x128 16x16 256x256 32x32 48x48; do
        install -dm755 "${pkgdir}/usr/share/icons/hicolor/${res}/apps"
        ln -s "/opt/bas21/res/cencit-bascore-${res}.png" "${pkgdir}/usr/share/icons/hicolor/${res}/apps/cencit-bascore.png"
    done

    # Install desktop entry and executable
    install -dm755 "${pkgdir}/usr/share/applications"
    install -Dm644 "bas21-${pkgver}/res/cencit-bas21.desktop" "${pkgdir}/usr/share/applications/bas21.desktop"
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/bas21/bas21" "${pkgdir}/usr/bin/bas21"
}

