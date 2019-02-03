# Maintainer: kevku <kevku@gmx.com>
pkgname=kodi-addon-inputstream-rtmp-git
pkgver=2.0.4.Leia.r0.gce7f559
pkgrel=1
pkgdesc="librtmp support for Kodi 18+"
arch=('x86_64' 'i686' 'armv7h')
url="https://github.com/xbmc/inputstream.rtmp"
license=('GPL2')
depends=('kodi>=18' 'rtmpdump' 'p8-platform')
makedepends=('kodi-dev>=18' 'cmake' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
# kodi 17
# source=('kodi-addon-inputstream-rtmp-git::git+https://github.com/xbmc/inputstream.rtmp.git#branch=krypton')
# kodi 18
source=('kodi-addon-inputstream-rtmp-git::git+https://github.com/xbmc/inputstream.rtmp.git')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  [[ -d "$srcdir/$pkgname/$pkgname-build" ]] && rm -r "$srcdir/$pkgname/$pkgname-build"
  mkdir -p "$srcdir/$pkgname/$pkgname-build"
}

build() {
  cd "$srcdir/$pkgname/$pkgname-build"
  cmake .. -DCMAKE_INSTALL_PREFIX="/usr"
  make
}

package() {
  cd "$srcdir/$pkgname/$pkgname-build"
  make DESTDIR="$pkgdir/" install
}
