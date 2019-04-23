# Maintainer: Markus Hartung <mail@hartmark.se>
# Contributor: Kevin Lewis <aur AT kevin DOT oakaged DOT io>
# Contributor: Jason Lenz <Jason@Lenzplace.org>
_pkgname=oscar
pkgname=oscar-git
pkgver=1.0.r2475.93d263de
pkgrel=1
pkgdesc="Open-source, cross platform, sleep tracking software with a focus on monitoring CPAP treatment. Fork of the sleepyhead project."
arch=('i686' 'x86_64')
url="https://gitlab.com/pholy/OSCAR-code"
license=('GPL')
depends=(
  'qt5-serialport'
)
makedepends=(
  'git'
  'glu'
)
provides=("$_pkgname")
source=(
  "git+https://gitlab.com/pholy/OSCAR-code.git"
  'oscar.desktop'
)
sha256sums=('SKIP'
            '0ea864d47fdce50d93df7d5191227198b4ffd3a3def5f5550e07367296476a15')

pkgver() {
  cd OSCAR-code
  _major=$(sed -rn 's/.*major_version = ([0-9]+).*/\1/p' < oscar/version.h)
  _minor=$(sed -rn 's/.*minor_version = ([0-9]+).*/\1/p' < oscar/version.h)
  _gitversion=$(printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")
  echo $_major.$_minor.$_gitversion
}

build() {
  cd OSCAR-code
  ./configure
  make -j$(cat /proc/cpuinfo | awk '/^processor/{print $3}' | wc -l)
}

package() {
  install -D $srcdir/OSCAR-code/oscar/OSCAR $pkgdir/usr/bin/oscar
  install -Dm644 $srcdir/OSCAR-code/oscar/icons/logo-lg.png $pkgdir/usr/share/oscar/icon.png
  install -Dm644 $srcdir/oscar.desktop $pkgdir/usr/share/applications/oscar.desktop
}

# vim:set ts=2 sw=2 et:
