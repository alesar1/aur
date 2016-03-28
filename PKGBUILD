# Maintainer: Albert Mikaelyan <tahvok at gmail dot com>

pkgbase=gridcoinresearch-git
pkgname=('gridcoinresearch-daemon-git' 'gridcoinresearch-qt-git')
pkgver=3.5.6.0.r654.a20e6a6
pkgrel=1
arch=('i686' 'x86_64')
url="http://gridcoin.us"
license=('custom:gridcoin')
makedepends=('boost' 'git' 'qt4' 'openssl' 'qrencode' 'db' 'curl'
             'protobuf' 'miniupnpc')
source=('gridcoinresearch::git+https://github.com/gridcoin/Gridcoin-Research.git'
        '01_qt5_fixes.patch'
        'gridcoinresearch-qt.desktop')

sha1sums=('SKIP'
          'c8492e0244fb95214887aa432b52347dbd96879c'
          '931e82ce57cf9099d73534f969f49ba4e524e671')

pkgver() {
  cd "$srcdir/${pkgbase%-git}"

  printf "%s.r%s.%s" \
    "$(grep CLIENT_VERSION src/clientversion.h | awk '{print $NF}' | sed ':a;N;$!ba;s/\n/./g')" \
    "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/${pkgbase%-git}"

  patch -Np1 -i "$srcdir"/01_qt5_fixes.patch

  mkdir -p src/obj

  chmod 755 src/leveldb/build_detect_platform
}

build() {
  cd "$srcdir/${pkgbase%-git}"

  cd src

  make ${MAKEFLAGS} -f makefile.unix DEBUGFLAGS="" USE_UPNP=1

  strip gridcoinresearchd

  cd ..

  qmake "USE_QRCODE=1 USE_UPNP=1 NO_UPGRADE=1"
  make ${MAKEFLAGS}

  strip gridcoinresearch
}

package_gridcoinresearch-daemon-git() {
  pkgdesc="GridCoin is a PoS-based cryptocurrency - Daemon"
  depends=('boost-libs' 'libzip' 'miniupnpc' 'curl' 'boinc')
  install=gridcoin.install

  cd "$srcdir/${pkgbase%-git}/src"
  install -Dm755 gridcoinresearchd "$pkgdir/usr/bin/gridcoinresearchd"

  install -Dm644 ../COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

package_gridcoinresearch-qt-git() {
  pkgdesc="GridCoin is a PoS-based cryptocurrency - Qt"
  depends=('boost-libs' 'qrencode' 'qt4' 'libzip' 'miniupnpc' 'curl' 'boinc')
  install=gridcoin.install

  cd "$srcdir/${pkgbase%-git}"
  install -Dm755 gridcoinresearch "$pkgdir/usr/bin/gridcoinresearch"

  install -Dm644 "${srcdir}/gridcoinresearch-qt.desktop" "$pkgdir/usr/share/applications/gridcoinresearch-qt.desktop"

  install -Dm644 share/pixmaps/grc-small.png "$pkgdir/usr/share/pixmaps/grc-small.png"

  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

