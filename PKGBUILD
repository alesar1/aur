pkgdesc='A simple VTE-based terminal'
pkgname='termite-aperezdc-git'
_pkgname="termite"
pkgver=r898.g9ba8d0b
pkgrel=1
url=https://github.com/aperezdc/termite
license=(LGPL)
depends=(gtk3 pcre2 gnutls vte-common)
makedepends=(git gperf 'meson>=0.58' ninja)
provides=('termite')
conflicts=('termite')
arch=(x86_64)
source=("termite::git+https://github.com/aperezdc/termite.git")
sha256sums=('SKIP')
validpgpkeys=()


pkgver() {
  cd "${srcdir}/${pkgname%-aperezdc-git}"
  printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


build () {
	cd "${srcdir}"
    meson setup build termite
    meson compile -C build
}

package () {
    cd "${srcdir}"
    mkdir -p termite-build-dir
    meson install -C build --skip-subprojects vte --destdir="termite-build-dir"
    sudo install -Dm755  "build/termite-build-dir/usr/local/bin/termite" "$pkgdir/usr/bin/termite"
}
