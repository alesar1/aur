# Maintainer: Steffen Hansen <steffengrundsoe@gmail.com>
pkgname=quickemu
pkgver=2.3.0
pkgrel=1
pkgdesc="Quickly create and run optimised Windows, macOS and Linux desktop virtual machines."
arch=(any)
url="https://github.com/wimpysworld/quickemu"
license=('MIT')
depends=('qemu' 'coreutils' 'grep' 'jq' 'procps' 'python3' 'cdrtools' 'usbutils' 'util-linux' 'sed' 'spice-gtk' 'swtpm' 'wget' 'xorg-xrandr' 'zsync' 'edk2-ovmf')
provides=("$pkgname")
conflicts=("$pkgname")
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/wimpysworld/quickemu/archive/refs/tags/$pkgver.tar.gz")
md5sums=('0623d228f23fa847259c1b5132d0a6c0')

package() {
  cd "$pkgname-$pkgver"

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 quickemu "$pkgdir/usr/bin/quickemu"
  install -Dm755 macrecovery "$pkgdir/usr/bin/macrecovery"
  install -Dm755 quickget "$pkgdir/usr/bin/quickget"
}
