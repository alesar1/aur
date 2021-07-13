# Maintainer: Kookies <kookies@tutamail.com>
_pkgbase=openrevolution
pkgname="${_pkgbase}-git"
pkgver=v2.7.0.r16.g54281d7
pkgrel=1
pkgdesc="C/C++ BRSTM and other format tools"
arch=('x86_64')
url="https://github.com/ic-scm/openrevolution"
license=('GPL3')
depends=('rtaudio')
makedepends=('git')
optdepends=('ffmpeg')
provides=($_pkgbase)
conflicts=($_pkgbase)
source=("$_pkgbase"::"git+https://github.com/ic-scm/openrevolution")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgbase/"
  git describe --tags | sed -e 's/-\([^-]*-g[^-]*\)$/-r\1/' -e 's/-/./g'
}

build() {
  cd "$srcdir/$_pkgbase/"
  sh build.sh
}

package() {
  cd "$srcdir/$_pkgbase"
  install -D 'brstm_converter' "$pkgdir/usr/bin/brstm_converter"
  install -D 'brstm_rt' "$pkgdir/usr/bin/brstm_rt"
}
