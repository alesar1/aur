# Maintainer: mditto <michael.r.ditto@gmail.com>

pkgname=paintstorm
pkgver=2.30
pkgrel=1
pkgdesc="Professional software for digital painting"
arch=('x86_64')
url="http://www.paintstormstudio.com"
license=('Commercial')
depends=('gtk2' 'freeglut' 'ftgl' 'libcurl-gnutls'  'glew1.13')
source=("http://mdit.to/files/aur/$pkgname-$pkgver.tar.gz")
sha256sums=('2114329a35d720611156e78769f24fe1267566b3bd24db0579cd6c1763c6bdb6')

package() {
    mkdir -p ${pkgdir}/usr/share/${pkgname}
    mkdir -p ${pkgdir}/usr/share/applications

    tar -xf "$pkgname-$pkgver.tar.gz" -C "${pkgdir}/usr/share/"

    rm ${pkgdir}/usr/share/install.sh
    mv ${pkgdir}/usr/share/${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
}
