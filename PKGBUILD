# Maintainer: Giancarlo Razzolini <grazzolini@gmail.com>
pkgname=mkinitcpio-dropbear
pkgver=0.0.3
pkgrel=1
pkgdesc="Archlinux mkinitcpio hook to install and enable the dropbear daemon in early userspace"
arch=('any')
url="https://github.com/grazzolini/mkinitcpio-dropbear"
license=('GPL3')
depends=('dropbear' 'psmisc')
optdepends=('openssh: Allows the use of the same host keys used for normal access' 'mkinitcpio-netconf: Network interface configuration' 'mkinitcpio-ppp: PPP interface configuration')
conflicts=('dropbear_initrd_encrypt')
install=$pkgname.install
source=($url/archive/v$pkgver.tar.gz)
changelog='ChangeLog'
sha512sums=('65d9d794411dc9da03d900655b748cdda72ad39f4b0188a25c1521ed656d9c92bbbf248b09e8eb7f345839001944fc56c10e1c1fe123a73732fea8ffb6fb78d4')

package() {
  install -Dm644 "$srcdir/$pkgname-$pkgver/dropbear_hook"      "$pkgdir/usr/lib/initcpio/hooks/dropbear"
  install -Dm644 "$srcdir/$pkgname-$pkgver/dropbear_install"   "$pkgdir/usr/lib/initcpio/install/dropbear"
}
