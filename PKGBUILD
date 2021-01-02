# Maintainer: Tomasz Oponowicz <tomasz at zaxo dot biz>

# Regenerate the `.SRCINFO` file:
# $ makepkg --printsrcinfo > .SRCINFO

pkgname=bitstower-markets
pkgver=0.4.0
pkgrel=1
pkgdesc="A stock, currency and cryptocurrency tracker"
url="https://github.com/bitstower/markets"
arch=(x86_64)
license=(GPL3)
depends=(
    libgee
    libsoup
    libhandy0
    json-glib
    glib2
    gtk3
)
makedepends=(
    git
    meson
    vala
)
_upstream="markets"
_commit=93c4a5ff4ae850ac929482be4a959542f2e6cdaa  # 0.4.0
source=("git+https://github.com/bitstower/$_upstream.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd ${_upstream}
  git describe --tags | sed 's/^v//;s/-/+/g'
}

build() {
  arch-meson ${_upstream} build
  ninja -C build
}

# check() {
#   meson test -C build --print-errorlogs
# }

package() {
  DESTDIR="${pkgdir}" meson install -C build
}

# vim: ts=2 sw=2 et:
