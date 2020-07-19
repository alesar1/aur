_pkgname=qemu-user-static
pkgdesc='A generic and open source machine emulator, statically linked'
pkgver=5.0
pkgadditver=10
pkgrel=2

pkgname=$_pkgname-bin
arch=('x86_64' 'i686' 'aarch64')
url="http://wiki.qemu.org"
license=('GPL2' 'LGPL2.1')
depends=('binfmt-qemu-static')
makedepends=()
provides=("$_pkgname" "qemu-user")
conflicts=("$_pkgname" "qemu-user")

_debsrc="${_pkgname}_${pkgver}-${pkgadditver}"
if [ "$CARCH" = 'x86_64' ]; then
  _debsrc=$_debsrc"_amd64.deb"
  _csum=SKIP
elif [ "$CARCH" = 'i686' ]; then
  _debsrc=$_debsrc"_i386.deb"
  _csum=SKIP
elif [ "$CARCH" = 'aarch64' ]; then
  _debsrc=$_debsrc"_arm64.deb"
  _csum=SKIP
else
  _debsrc=$_debsrc"_$CARCH.deb"
  _csum=SKIP
fi

source=(
  "$_debsrc::https://deb.debian.org/debian/pool/main/q/qemu/$_debsrc"
)
sha256sums=(
  "$_csum"
)

prepare() {
  rm -Rf build
  mkdir build
}

build() {
  cd build
  tar -xJf ../data.tar.xz -C .
}

package() {
  cd build

  mkdir -p "$pkgdir"/usr/bin/
  cp usr/bin/qemu-*-static "$pkgdir"/usr/bin/

  mkdir -p "$pkgdir"/usr/share/man/man1
  cp usr/share/man/man1/qemu-*-static.1.gz "$pkgdir"/usr/share/man/man1/
}
