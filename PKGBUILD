# Maintainer: Alesh Slovak <aleshslovak@gmail.com>

pkgname=frzr
pkgver=0.7.1
pkgrel=1
pkgdesc="A deployment and update system for read-only btrfs subvolume based operating systems"
arch=('any')
url="https://github.com/gamer-os/frzr"
license=('MIT')
depends=('btrfs-progs' 'syslinux' 'parted' 'libnewt' 'efibootmgr' 'dosfstools' 'jq')
source=("https://github.com/gamer-os/frzr/archive/$pkgver.tar.gz")
md5sums=('3a2d53524547917870b9fbdf714c0901')

package() {
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/etc/systemd/system"
  install -m 755 "$srcdir/frzr-$pkgver/frzr-bootstrap" "$pkgdir/usr/bin"
  install -m 755 "$srcdir/frzr-$pkgver/frzr-deploy" "$pkgdir/usr/bin"
  install -m 755 "$srcdir/frzr-$pkgver/frzr-release" "$pkgdir/usr/bin"
  install -m 755 "$srcdir/frzr-$pkgver/frzr-unlock" "$pkgdir/usr/bin"
  install -m 644 "$srcdir/frzr-$pkgver/frzr-autoupdate.service" "$pkgdir/etc/systemd/system"
}
