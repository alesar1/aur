# Maintainer:  twa022 <twa022 at gmail dot com>

_pkgname=gcsvedit
pkgname=${_pkgname}-git
pkgver=0.8.0+58+gc1c7746
pkgrel=1
pkgdesc='Simple text editor for CSV, TSV and other kinds of delimiter-separated values (DSV) files.'
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/swilmet/gCSVedit"
license=('GPL3')
depends=('gtk3' 'libxml2' 'libtepl-6.so' 'gtksourceview4')
makedepends=('git')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  git describe --long --tags | sed -r "s/^v//;s/-/+/g"
}

build() {
    cd "${_pkgname}"
    ./autogen.sh --prefix=/usr
    make
}

package() {
    cd "${_pkgname}"
    make DESTDIR="$pkgdir" install
}
