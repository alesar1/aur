# Maintainer: Aleksandr Matuzok <sherilynhope@gmail.com>
pkgname=mongo-cxx-driver
pkgver=r3.3.1
pkgrel=2
pkgdesc="The official MongoDB C++ driver library"
arch=('i686' 'x86_64')
url="http://docs.mongodb.org/ecosystem/drivers/cpp/"
license=('Apache')
groups=()
depends=("libmongoc")
makedepends=("cmake")
source=("https://github.com/mongodb/mongo-cxx-driver/archive/$pkgver.tar.gz")

prepare() {
	cd "$pkgname-$pkgver"
    mkdir -p $pkgdir/usr
}

build() {
	cd "$pkgname-$pkgver/build"
    echo $pkgdir
    DESTDIR=$pkgdir cmake -DCMAKE_BUILD_TYPE=Release .. -DCMAKE_INSTALL_PREFIX=/usr/local -DCMAKE_CXX_STANDARD=17 
    DESTDIR=$pkgdir make -j$(grep -c proc /proc/cpuinfo)
}

package() {
	cd "$pkgname-$pkgver/build"
    DESTDIR=$pkgdir make install
}
md5sums=('2577EE351719CA4397C5F91FACE35CF6')
