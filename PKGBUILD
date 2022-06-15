# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>
# Contributor: Philip Goto <philip.goto@gmail.com>
# Contributor: Davide Depau <davide@depau.eu>
# Contributor: Rafael Fontenelle <rafaelff@gnome.org>
# Contributor: Marco Melorio <marco.melorio@protonmail.com>
# Contributor: Bakasura <bakasura@protonmail.ch>
# Contributor: mazharhussain <realmazharhussain@gmail.com>
# Contributor: huyz

_pkgname=libadwaita
pkgbase=$_pkgname-git
pkgname=($_pkgname-git $_pkgname-git-docs $_pkgname-git-demos)
pkgver=1.1.0+110+g4e2e3322
pkgrel=2
pkgdesc="Building blocks for modern adaptive GNOME applications"
url="https://gnome.pages.gitlab.gnome.org/$_pkgname"
arch=('i686' 'pentium4' 'x86_64')
license=(LGPL)
depends=(gtk4)
makedepends=(git meson gi-docgen sassc gobject-introspection vala)
checkdepends=(weston)
source=("${_pkgname}::git+https://gitlab.gnome.org/GNOME/${_pkgname}")
provides=($_pkgname)
conflicts=($_pkgname)
sha256sums=(SKIP)

pkgver() {
  cd "${_pkgname}"
  git describe --tags | sed 's/-/+/g'
}

build() {
    arch-meson "${_pkgname}" build -Dgtk_doc=true
    meson compile -C build
}

check() {
  export XDG_RUNTIME_DIR="$PWD/runtime-dir" WAYLAND_DISPLAY=wayland-5

  mkdir -p -m 700 "$XDG_RUNTIME_DIR"
  weston --backend=headless-backend.so --socket=$WAYLAND_DISPLAY --idle-time=0 &
  _w=$!

  trap "kill $_w; wait" EXIT

  meson test -C build --print-errorlogs
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package_libadwaita-git() {
  depends+=(libgtk-4.so)
  provides=($_pkgname libadwaita-1.so)
  conflicts=($_pkgname)

  meson install -C build --destdir "${pkgdir}"

  cd "${pkgdir}"

  _pick docs usr/share/doc

  _pick demo usr/bin/adwaita-1-demo
  _pick demo usr/share/applications/org.gnome.Adwaita1.Demo.desktop
  _pick demo usr/share/icons/hicolor/*/apps/org.gnome.Adwaita1.Demo[-.]*
  _pick demo usr/share/metainfo/org.gnome.Adwaita1.Demo.metainfo.xml
}

package_libadwaita-git-docs() {
  pkgdesc+=" (documentation)"
  depends=()
  mv docs/* "$pkgdir"
}

package_libadwaita-git-demos() {
  pkgdesc+=" (demo applications)"
  depends=($_pkgname-git)
  mv demo/* "${pkgdir}"
}

# vim:set sw=2 et:
