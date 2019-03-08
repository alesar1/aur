# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=pssh-lilydjwg-git
pkgver=2.3.1.r27.ga2f936b
pkgrel=1
pkgdesc='Parallel SSH Tools'
arch=('any')
license=('custom')
url='https://github.com/lilydjwg/pssh/'
depends=('python')
makedepends=('git' 'python-setuptools')
conflicts=('python-pssh')
source=("git+https://github.com/lilydjwg/pssh/")
sha512sums=('SKIP')

pkgver() {
  cd pssh
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
  )
}

build() {
  cd pssh
  python setup.py build
}

package() {
  cd pssh
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  install -Dm644 COPYING -t "$pkgdir"/usr/share/licenses/$pkgname
}
