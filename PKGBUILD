# Maintainer: SanskritFritz (gmail)

pkgname=cachedir
pkgver=1.3
_filever="${pkgver}-1"
pkgrel=1
pkgdesc="Utility for tagging directories as cache directories."
arch=('i686' 'x86_64')
url="http://liw.fi/cachedir/"
license=('GPLv3')
depends=('python2-cliapp')
source=("http://code.liw.fi/debian/pool/main/c/${pkgname}/${pkgname}_${pkgver}.orig.tar.xz")

build() {
	cd "$pkgname-$pkgver"
	sed -i -e 's/python/python2/' setup.py
	sed -i -e 's/python/python2/' cachedir
	python2 setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

md5sums=('eeaf1198c3e115e143c0de5c758f2cec')
