# Maintainer: kevku <kevku@gmx.com>
pkgname=libdigidocpp
pkgver=3.12.0.1317
pkgrel=1
pkgdesc="Library for creating DigiDoc signature files"
arch=('x86_64' 'i686')
url="http://www.id.ee/"
license=('LGPL')
depends=('xml-security-c' 'minizip' 'libdigidoc')
makedepends=('cmake' 'xsd>=4.0' 'pcsclite' 'opensc' 'xxd')
source=("https://installer.id.ee/media/ubuntu/pool/main/libd/$pkgname/${pkgname}_$pkgver.orig.tar.xz")
sha256sums=('8059e1dbab99f062d070b9da0b1334b7226f1ab9badcd7fddea3100519d1f9a9')
validpgpkeys=('43650273CE9516880D7EB581B339B36D592073D4')

build() {
  cd "$srcdir/"
  cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR="lib" -DCMAKE_INSTALL_SYSCONFDIR="/etc" -DINSTALL_DOC=NO -DSWIG_EXECUTABLE="" -DBoost_INCLUDE_DIR=""
  make 
}

package() {
  cd "$srcdir/"
  make DESTDIR="$pkgdir/" install
}
