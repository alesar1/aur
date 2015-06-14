# Maintainer: Behnam Momeni <sbmomeni [at the] gmail [dot] com>

pkgname=('enchant-pure')

_pkgname=enchant
pkgver=1.6.0
pkgrel=4

pkgdesc="A wrapper library for pure and generic spell checking for all languages, supporting Aspell and Myspell/Hunspell backend engines"
url="http://www.abisource.com/enchant/"

arch=('any')
license=('LGPL')

depends=('aspell>=0.50.0' 'dbus-glib>=0.62' 'hunspell')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
options=('!libtool')

source=("http://www.abisource.com/downloads/${_pkgname}/${pkgver}/${_pkgname}-${pkgver}.tar.gz"
	"warnings-fix.patch")
sha512sums=('0ca1634bb783df51512df4abecc89abdadee6baf7330d6e5f90cc15d10779896a3521a1c079ecc07e4df4f7a018ce398cca9d0125a7845a314a059840ebc9137'
            'de32bce6c0b364eaf8142fd65c1a9afa0909dcfba4c17ad10626fb38db355f314baade75c6d5f4b3fbedd04917400b2e3d10b898cfe7a006883b2e32520ab79e')

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  patch -p1 -i ../warnings-fix.patch
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  ./configure --prefix=/usr --disable-static --disable-ispell --disable-hspell --with-myspell-dir=/usr/share/myspell
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}

