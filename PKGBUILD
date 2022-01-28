# Contributor: itsme <mymail@ishere.ru>

pkgname=randrctl
pkgdesc="Lightweight profile based screen manager for X"
pkgver=1.8.2
pkgrel=2
arch=('any')
url="http://github.com/edio/randrctl"
license=('GPL3')
makedepends=('python-pip' 'git')
depends=('python' 'xorg-xrandr' 'python-yaml')
optdepends=('bash-completion')
install="randrctl.install"
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/edio/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('1adee72abd6ec6efffad35fb1cf3f17a072ad6ea4b4f3ae3fa359af4bf92aabd')


build() {
  cd $pkgname-$pkgver

  python setup.py build
}

package() {
  cd $pkgname-$pkgver

  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 randrctl/setup/config.yaml "$pkgdir/etc/randrctl/config.yaml"
  install -Dm644 randrctl/setup/99-randrctl.rules "$pkgdir/usr/lib/udev/rules.d/99-randrctl.rules"
}

# vim:set ts=2 sw=2 et:
