# This file is part of BlackArch Linux ( https://www.blackarch.org/ ).
# See COPYING for license details.
# Maintainer : Sachin S. Kamath <mail@skamath.me>

pkgname=ntlmrecon
pkgver=0.1
pkgrel=1
groups=('blackarch' 'blackarch-scanner' 'blackarch-recon')
pkgdesc='A tool to enumerate information from NTLM authentication enabled web endpoints.'
arch=('any')
url='https://github.com/sachinkamath/ntlmrecon'
license=('MIT')
depends=('python' 'python-ordered-set' 'python-iptools' 'python-colorama' 'python-termcolor')
makedepends=('git' 'python-setuptools')
source=("git+https://github.com/sachinkamath/ntlmrecon.git")
sha512sums=('SKIP')

pkgver() {
  cd $pkgname

  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd $pkgname

  python3 setup.py build
}

package() {
  cd $pkgname

  python3 setup.py install --root="$pkgdir" --prefix=/usr -O1 --skip-build

  install -Dm 644 -t "$pkgdir/usr/share/doc/$pkgname/" README.md
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

}
