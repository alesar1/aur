# Maintainer: Md. Jahidul Hamid <jahidulhamid@yahoo.com>
pkgname=pacget
pkgver=1.1.2
pkgrel=1
pkgdesc="A wrapper around pacaur to mimic yaourt's search feature"
arch=('any')
url="https://github.com/neurobin/pacget"
license=('BSD')
depends=('bash' 'pacaur')
source=("https://github.com/neurobin/$pkgname/archive/$pkgver.tar.gz")
md5sums=('361652e7787f61e6090291c199f99760')
validpgpkeys=('3331 6137 5B22 27AC F7AA  6351 A4A2 CA5B 6BDA A871')

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
