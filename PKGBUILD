# Maintainer: Shalygin Konstantin (k0ste@cn.ru)

pkgname='ivideon-client'
pkgver='6.1.2'
pkgrel='252'
pkgdesc='Ivideon Client'
arch=('x86_64')
url=('http://ivideon.com/')
license=('freeware')
depends=('qt5-base' 'qt5-script' 'qt5-svg' 'openssl' 'wget' 'vlc')
makedepends=('libarchive')
source=("https://packages.ivideon.com/ubuntu/pool/non-free/i/${pkgname}/${pkgname}_${pkgver}.${pkgrel}_amd64.deb"
	"${pkgname}.desktop")
sha256sums=("28739e4e8bf88f147c17e89b3d338bc12d24e11a10fe4e4c267f9ada81e0e6be"
	    "2baf7178b17057d0e638d19c1c3feb17e8eb65ea32106d477f9d53e24937020b")
install='ivideon.install'

build() {
  cd "${srcdir}"
  bsdtar xf "data.tar.gz"
}

package() {
  cp -ax "usr" "${pkgdir}"
  cp -ax "opt" "${pkgdir}"
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}