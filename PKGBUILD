# Maintainer : CodeZ <navintiwari08@gmail.com>

pkgname=fluxcomp
pkgver=1.4.4.r0.d873d29
pkgrel=1
pkgdesc="flux is an interface description language used by DirectFB"
arch=('x86_64')
url="https://github.com/kevleyski/fluxcomp"
license=('GPL3')
groups=()
depends=('gcc-libs')
makedepends=('git')
provides=("fluxcomp")
conflicts=("flux-git")
replaces=()
backup=()
options=()
install=
source=("fluxcomp::git+${url}.git#branch=distrotech-flux")
noextract=()
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/fluxcomp"
  printf "%s" "$(awk -F= '/^FLUXCOMP_(MAJOR|MINOR|MICRO)_VERSION/ { printf "%s.", $2; }' configure.in | sed 's/.$//').r0.$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/fluxcomp"
  autoreconf -fi
  ./configure
  make
}

package() {
  cd "${srcdir}/fluxcomp"
  install -D -m 0755 src/fluxcomp "${pkgdir}/usr/bin/fluxcomp"
  install -D -m 0644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
