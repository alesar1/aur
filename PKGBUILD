# Maintainer: Aner Andros <code@anerandros.info>

pkgbase=alduin
pkgname=alduin
pkgrel=3
pkgver=1.4.0
pkgdesc="Alduin is An RSS and Atom feed aggregator written in Electron"
url="https://github.com/Xstoudi/alduin"
provides=('alduin')
arch=('i686' 'x86_64')
license=('MIT')
depends=('electron')
makedepends=()
backup=()
install=''
source=(
    "${url}/releases/download/${pkgver}/${pkgname}-${pkgver}-linux.zip"
    "${pkgname}.desktop"
    "${pkgname}.png"
)

md5sums=('4c693bf3ebdb36ec8297a336a78e80dc'
	 '16f39375c22e73e8681524c1c2fc77c7'
	 '81054e3f38fd14e93ccdddba6024d88d')

package() {
    install -d "$pkgdir"/opt

    cp -R "$srcdir"/linux-unpacked "$pkgdir"/opt/alduin

    install -d "$pkgdir"/usr/bin
    ln -sf ../../opt/alduin/alduin "$pkgdir"/usr/bin/alduin

    install -D -m644 "./${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -D -m644 "./${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
