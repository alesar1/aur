# Maintainer: ArsenArsen <arsenarsentmc@outlook.com>
pkgname=kshare-git
pkgver=c1ffc8c5179b4792a527e52f5e938aad446ea539f
pkgrel=1
conflicts=("kshare")
pkgdesc="The free and open source and cross platform screen sharing software."
arch=('i686' 'x86_64')
url="https://github.com/ArsenArsen/KShare"
license=('MIT')
provides=('kshare=$pkgver')
depends=(qt5-base qt5-x11extras xcb-util-cursor ffmpeg libxfixes)
source=(git+https://github.com/ArsenArsen/KShare.git)
sha1sums=('SKIP')

build() {
  cd "${srcdir}/KShare"
  git checkout dev
  git submodule update --init --recursive  
  qmake
  make -j$(($(nproc) + 1))
}

package() {
  cd "${srcdir}/KShare"
  mkdir -p "$pkgdir/usr/bin"
  install ./KShare "$pkgdir/usr/bin/kshare"
  mkdir -p "$pkgdir/usr/share/pixmaps"
  install "${srcdir}/KShare/icons/icon.png" "$pkgdir/usr/share/pixmaps"
  mkdir -p "$pkgdir/usr/share/applications"
  install KShare.desktop "$pkgdir/usr/share/applications"
}

