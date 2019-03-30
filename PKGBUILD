# Maintainer: Daniel Schopf <schopf.dan at gmail dot com>
pkgname=kim-api
pkgver=2.0.2
pkgrel=1
pkgdesc="Online framework for reliable, reproducible and portable molecular simulations"
arch=("i686" "x86_64")
url="https://openkim.org"
license=('CDDL')
depends=(bash)
makedepends=(cmake gcc-libs)
install=$pkgname.install
source=(https://s3.openkim.org/kim-api/kim-api-2.0.2.txz
	Fix-Doxygen-command-error.patch)
sha512sums=('69d9c506e365f0633d539c0047bc11f057e28788644ce27083ef9772bfbce31f23519301479fe26588496d5fbe3bcc3c74aea81ddfc1e8c2c1a4d8fa56f108e8'
            '0063cb18884a19d15261e910cc9877ff319f9c1b428023d736e34b5271f254a7eaca9b90033f80af560199e1fe363523da6afb4ee35a05af76b2760039a94cbd')

prepare() {
  cd "$pkgname-$pkgver"
  patch -p1 -i ../Fix-Doxygen-command-error.patch
  cd ..
  mkdir -p build
}

build() {
  cd build
  cmake "../$pkgname-$pkgver" \
  	-DCMAKE_BUILD_TYPE=Release \
	-DCMAKE_INSTALL_PREFIX="/usr" \
	-DCMAKE_INSTALL_LIBDIR="lib" \
	-DCMAKE_INSTALL_LIBEXECDIR="/usr/lib" \
	-DKIM_API_BUILD_EXAMPLES=ON
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  # remove empty directories
  cd "$pkgdir"
  rm -rf usr/share
}
