# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=pacpush
pkgver=2.3.4
pkgrel=1
pkgdesc="Utility to push an Arch host's package and AUR caches to other hosts. Previously named pacsync."
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
backup=("etc/$pkgname.conf")
depends=("python" "rsync" "sudo" "openssh" "python-requests" "python-ruamel-yaml")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
replaces=("pacsync")
conflicts=("pacsync")
md5sums=('9e4f151370fe280495fce77e77391045')

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
