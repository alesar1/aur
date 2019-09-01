# Maintainer: James An <james@jamesan.ca>

pkgname=clover-efi
pkgver=5058
pkgrel=1
pkgdesc="An EFI-based bootloader for BIOS-based computers to replace EDK2/Duet bootloader and enable OS X booting on non-Apple hardware."
arch=('i686' 'x86_64')
url="http://cloverefiboot.sourceforge.net"
license=('GPL')
depends=()
makedepends=()
options=('docs')
install=
source=("http://downloads.sourceforge.net/project/cloverefiboot/Bootable_ISO/CloverISO-$pkgver.tar.lzma")
md5sums=('17b7091d15cfdf190031f4737fc8a44d')

prepare() {
  if [ "$CARCH" == "x86_64" ]; then
    _arch=X64
  else
    _arch=IA32
  fi

  bsdtar -x --file "Clover-v2.5k-$pkgver-$_arch.iso" EFI
}

package() {
  install -dm755 "$pkgdir/boot"
  install -dm755 "$pkgdir/usr/share/doc"

  cp --archive EFI "$pkgdir/boot"
  rm --recursive "$pkgdir/boot/EFI/BOOT"
  mv --force "$pkgdir/boot/EFI/CLOVER/doc" "$pkgdir/usr/share/doc/clover-efi"
}
