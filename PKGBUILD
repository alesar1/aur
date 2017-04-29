# Maintainer:  <skrylar@UFO>
pkgname=ingen-git
pkgver=eb34518
pkgrel=1
epoch=
pkgdesc="A modular plugin host for Jack and LV2."
arch=('i686' 'x86_64')
url="http://drobilla.net/software/ingen/"
license=('GPL')
groups=()
depends=('lv2>=1.14.0' 'glibmm>=2.14.0' 'lilv>=0.21.5' 'suil-git' 'raul-git' 'ganv-git' 'python2')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("${pkgname}::git+http://git.drobilla.net/cgit.cgi/ingen.git/")
md5sums=('SKIP')
noextract=()

pkgver() {
  cd ${pkgname}
  git rev-parse --short HEAD
}

prepare() {
  cd "$srcdir/"${pkgname}
  ./waf configure --prefix=/usr
}

build() {
  cd "$srcdir/"${pkgname}
  ./waf build
}

package() {
  cd "$srcdir/"${pkgname}
  ./waf install --destdir="$pkgdir/"
  #mv "$pkgdir/"usr/lib64 "$pkgdir/"usr/lib
}

# vim:set ts=2 sw=2 et:
