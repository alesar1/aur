# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Zeph <zeph33@gmail.com>
# https://gitlab.manjaro.org/packages/extra/pamac
pkgname=pamac-cli
pkgver=8.0.4
pkgrel=2
_pkgfixver=$pkgver

#_pkgvercommit=v$pkgver
_pkgvercommit='fddd7715e23a7199db9498cfee2efecad62074ef'
sha256sums=('a6c9f4f182497bd08ea223a46e3b4ee86facfa37649d38e0fb15d29be41bb1b0'
            '732512829081cb979a01087a8d8ec2a578e6555ed4f67af998537f6707d8bcaf')

pkgdesc="Pamac cli frontend for libalpm"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
depends=('glib2>=2.42' 'json-glib' 'libsoup' 'curl' 'pacman>=5.1' 'appstream-glib' 'archlinux-appstream-data')
optdepends=('')
makedepends=('gettext' 'itstool' 'vala>=0.36.6' 'meson' 'ninja' 'git' 'gobject-introspection')
conflicts=('pamac' 'pamac-aur' 'pamac-aur-git')
provides=('pamac')
replaces=('pamac')
options=(!emptydirs)
install=

source=("pamac-$pkgver-$pkgrel.tar.gz::$url/-/archive/$_pkgvercommit/pamac-$_pkgvercommit.tar.gz" "meson.build")

prepare() {
  cd "$srcdir/pamac-$_pkgvercommit"

  # adjust version string
  sed -i -e "s|\"$_pkgfixver\"|\"$pkgver-$pkgrel\"|g" src/version.vala
}

build() {
  cp -f "$srcdir/meson.build" "$srcdir/pamac-$_pkgvercommit/src/meson.build"
  cd "$srcdir/pamac-$_pkgvercommit"
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc

  # build
  ninja src/pamac
}

package() {
  cd "$srcdir/pamac-$_pkgvercommit/builddir"
  install -Dm755 "src/pamac" "$pkgdir/usr/bin/pamac"
  install -Dm755 "src/libpamac.so" "$pkgdir/usr/lib/libpamac.so"


}
# vim:set ts=2 sw=2 et:
