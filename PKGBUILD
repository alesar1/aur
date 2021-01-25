# Maintainer: Christoph Brill <aur@christophbrill.de>

pkgbase=gtkmm4
pkgname=(gtkmm4 gtkmm4-docs)
pkgver=4.0.0
pkgrel=1
pkgdesc="C++ bindings for GTK+ 4"
url="https://www.gtkmm.org/"
arch=(x86_64)
license=(LGPL)
depends=(gtk4 pangomm248 atkmm236 cairomm16)
makedepends=(git mm-common glibmm-docs cairomm16-docs pangomm248-docs atkmm236-docs meson)
checkdepends=(xorg-server-xvfb)
options=(!emptydirs)
_commit=e208083ad18cacd3d7f8d6aeb50f3784f905d991  # tags/4.0.0^0
source=("git+https://gitlab.gnome.org/GNOME/gtkmm.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd gtkmm
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd gtkmm
}

build() {
  arch-meson gtkmm build -D maintainer-mode=true
  meson compile -C build
}

check() {
  xvfb-run -s '-nolisten local' \
    meson test -C build --print-errorlogs
}

package_gtkmm4() {
  DESTDIR="$pkgdir" meson install -C build

  mkdir -p docs/usr/share
  mv "$pkgdir"/usr/share/{devhelp,doc} docs/usr/share
}

package_gtkmm4-docs() {
  pkgdesc+=" (documentation)"
  depends=()
  options=(!strip)

  mv docs/* "$pkgdir"
}
