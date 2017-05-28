# Maintainer: PyroDevil <p dot devil at gmail dot com>
pkgname=systemrescuecd
pkgver=5.0.1
pkgrel=1
epoch=
pkgdesc="Installs a rescue system into the boot partition to allow grub to boot it."
arch=('i686' 'x86_64')
url="http://www.sysresccd.org"
license=('GPL')
groups=()
depends=('grub>=2.00')
makedepends=('p7zip')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install='systemrescuecd.install'
changelog=
source=("http://downloads.sourceforge.net/project/systemrescuecd/sysresccd-x86/$pkgver/$pkgname-x86-$pkgver.iso"
        "25_systemrescuecd"
        "systemrescuecd")
md5sums=('ba26eabb079705e1aca1272429f12999'
         '6b717dcaa4e6e79801b7b257ddf6e910'
         '9cef18f521312ca5c5d505f6619bd183')
noextract=("$pkgname-x86-$pkgver.iso")
backup=("etc/default/systemrescuecd")

build() {
  mkdir -p "$srcdir/$pkgname-$pkgver"
  7z x "$srcdir/$pkgname-x86-$pkgver.iso" -o"$srcdir/$pkgname-$pkgver" > /dev/null
}

package() {
  mkdir -p "$pkgdir/boot/sysrescue"
  mkdir -p "$pkgdir/boot/sysrescue/bootdisk"
  mkdir -p "$pkgdir/boot/sysrescue/ntpasswd"
  mkdir -p "$pkgdir/etc/grub.d"
  mkdir -p "$pkgdir/etc/default/"
  install -m 755 "$srcdir/25_systemrescuecd"                      "$pkgdir/etc/grub.d/"
  install -m 644 "$srcdir/systemrescuecd"                         "$pkgdir/etc/default/"
  install -m 644 "$srcdir/$pkgname-$pkgver/isolinux/rescue32"     "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/isolinux/rescue64"     "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/isolinux/initram.igz"  "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/sysrcd.dat"            "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/isolinux/memdisk"      "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/isolinux/netboot"      "$pkgdir/boot/sysrescue/"
  install -m 644 "$srcdir/$pkgname-$pkgver/bootdisk/freedos.img"  "$pkgdir/boot/sysrescue/bootdisk"
  install -m 644 "$srcdir/$pkgname-$pkgver/bootdisk/hdt.img"      "$pkgdir/boot/sysrescue/bootdisk"
  install -m 644 "$srcdir/$pkgname-$pkgver/bootdisk/memtestp"     "$pkgdir/boot/sysrescue/bootdisk"
  install -m 644 "$srcdir/$pkgname-$pkgver/bootdisk/mhdd.img"     "$pkgdir/boot/sysrescue/bootdisk"
  install -m 644 "$srcdir/$pkgname-$pkgver/ntpasswd/initrd.cgz"   "$pkgdir/boot/sysrescue/ntpasswd"
  install -m 644 "$srcdir/$pkgname-$pkgver/ntpasswd/scsi.cgz"     "$pkgdir/boot/sysrescue/ntpasswd"
  install -m 644 "$srcdir/$pkgname-$pkgver/ntpasswd/vmlinuz"      "$pkgdir/boot/sysrescue/ntpasswd"
}

# vim:set ts=2 sw=2 et:
