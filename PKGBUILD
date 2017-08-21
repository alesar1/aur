# Maintainer: Justin Ethier <justin.ethier@gmail.com>
pkgname=cyclone-scheme
pkgver=0.6
pkgrel=1
pkgdesc="A brand-new compiler that allows practical application development using R7RS Scheme"
arch=('i686' 'x86_64')
url="https://github.com/justinethier/cyclone-bootstrap"
license=('MIT')
groups=()
depends=('libck' 'libtommath' 'gcc' 'make')
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=($url/archive/v$pkgver.tar.gz)
noextract=()
#autofill using updpkgsums
md5sums=('2b1ca0790a0f2ead883aad602749a94a')

build() {
  cd "cyclone-bootstrap-$pkgver"
  make libcyclone.a PREFIX=/usr CFLAGS="-O2 -fPIC -rdynamic -Wall -Iinclude -L."
  make cyclone PREFIX=/usr CFLAGS="-O2 -fPIC -rdynamic -Wall -Iinclude -L."
  make icyc-c PREFIX=/usr CFLAGS="-O2 -fPIC -rdynamic -Wall -Iinclude -L."
}

package() {
  cd "cyclone-bootstrap-$pkgver"
  make DESTDIR="$pkgdir" PREFIX=/usr CFLAGS="-O2 -fPIC -rdynamic -Wall -Iinclude -L."
  make DESTDIR="$pkgdir" PREFIX=/usr install
}
