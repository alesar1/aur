# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Zeph <zeph33@gmail.com>

pkgname=pamac-tray-appindicator
_pkgver=7.0.0
pkgver=$_pkgver
pkgrel=1
pkgdesc="Tray icon using appindicator which feets better in KDE"
depends=('pamac' 'libappindicator-gtk3')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
makedepends=('gettext' 'itstool' 'vala>=0.36.6' 'libappindicator-gtk3' 'meson' 'ninja' 'git')

options=(!emptydirs)

source=("pamac-$pkgver-$pkgrel.tar.gz::$url/-/archive/v$_pkgver/pamac-v$_pkgver.tar.gz")
sha256sums=('6a772cf77c3873e613f5888271e3f6f3b9d3e70932aebea51d9e66235a6ce20c')

prepare() {
  cd "$srcdir/pamac-v$pkgver"
  # patches here
  #patch -p1 -i "$srcdir/git-$pkgver-$pkgrel.patch"

  # adjust version string
  sed -i -e "s|\"$_pkgver\"|\"$pkgver-$pkgrel\"|g" src/manager_window.vala
}

build() {
  cd "$srcdir/pamac-v$pkgver"
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc -Denable-appindicator=true

  # build
  ninja src/pamac-tray-appindicator
}

package() {
  cd "$srcdir/pamac-v$pkgver"
  install -Dm755 "builddir/src/pamac-tray-appindicator" "$pkgdir/usr/bin/pamac-tray-appindicator"
  install -Dm644 "data/applications/pamac-tray-appindicator.desktop" "$pkgdir/etc/xdg/autostart/pamac-tray-appindicator.desktop"
}
# vim:set ts=2 sw=2 et:
