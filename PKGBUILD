# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

pkgname='ivideon-client'
pkgver='6.15.0'
pkgrel='1233'
pkgdesc='Ivideon Client'
arch=('x86_64')
url='https://ivideon.com'
license=('freeware')
depends=('qt5-base' 'openssl' 'qt5-multimedia' 'qt5-websockets')
makedepends=('libarchive')
source=("http://packages.ivideon.com/ubuntu/pool/non-free/i/${pkgname}/${pkgname}_${pkgver}.${pkgrel}_amd64.deb"
	"${pkgname}.desktop")
sha256sums=('3a687770592b2008ea8bd6df23a6edac27af2c0dc3645361862c24517844df33'
            '2baf7178b17057d0e638d19c1c3feb17e8eb65ea32106d477f9d53e24937020b')
install='ivideon.install'

build() {
  cd "${srcdir}"
  bsdtar xf "data.tar.xz"
}

package() {
  cp -ax "usr" "${pkgdir}"
  cp -ax "opt" "${pkgdir}"
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}
