# Maintainer: Jonas Platte <aur@jonasplatte.de>

pkgname=cxxtools-git
pkgver=2.2.2.8ee2899
pkgrel=2
pkgdesc="A collection of general-purpose C++ classes"
arch=('i686' 'x86_64')
url="http://www.tntnet.org/cxxtools"
license=('LGPL')
depends=('gcc-libs' 'sh')
makedepends=('git')
provides=('cxxtools')
conflicts=('cxxtools')
source=("$pkgname::git+https://github.com/maekitalo/${pkgname%-git}.git")
sha256sums=('SKIP')

# This will very likely break if cxxtools starts using tags. That is intentional,
# as the --always will be removed then anyway, requiring an update
pkgver() {
  cd "$pkgname"
  echo "2.2.2.$(git describe --always)"
}

build() {
  cd "$pkgname"

  autoreconf -i
  ./configure --enable-silent-rules --prefix=/usr
  make
}

check() {
  cd "$pkgname"

  ./test/alltests
}

package() {
  cd "$pkgname"

  make DESTDIR="$pkgdir/" install
}
