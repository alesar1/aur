# Maintainer: Felix Kauselmann <licorn at gmail dot com>
pkgname=(yacreader yacreaderlibraryserver)
pkgbase=yacreader
pkgver=9.6.2.1909283
pkgrel=1
pkgdesc="Comic reader for cross-platform reading and managing your digital comic collection."
arch=('i686' 'x86_64')
url="http://www.yacreader.com"
license=('GPL3')
depends=('qt5-base' 'qt5-multimedia' 'qt5-script' 'qt5-quickcontrols' 'qt5-graphicaleffects' 'hicolor-icon-theme' 'libunarr' 'libpdfium' 'desktop-file-utils')
optdepends=(
    'qt5-imageformats: Support for extra image formats'
    'qrencode: YACReaderLibrary server info qr codes'
)
conflicts=('yacreader-bin' 'yacreaderlibraryserver-standalone' 'yacreader-git')
install='yacreader.install'
source=( "https://github.com/YACReader/yacreader/releases/download/${pkgver}/yacreader-${pkgver}-src.tar.xz")
sha256sums=('31f4db5127f3a81f3eecb4cb7fe71785f47036e4c6e2cd5ec445f72920a6a1af')

build() {
  cd $srcdir/$pkgbase-$pkgver/
  qmake-qt5 CONFIG+="pdfium server_bundled"
  make
}

package_yacreader() {
  cd $srcdir/$pkgbase-$pkgver/
  make INSTALL_ROOT="$pkgdir" sub-YACReader-install_subtargets sub-YACReaderLibrary-install_subtargets
}

package_yacreaderlibraryserver() {
  pkgdesc="Headless YACReaderLibrary server for use with YACReader for iOS."
  install=yacreaderlibraryserver.install
  cd $srcdir/$pkgbase-$pkgver/
  make INSTALL_ROOT="$pkgdir" sub-YACReaderLibraryServer-install_subtargets
}