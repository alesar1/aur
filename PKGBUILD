# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
_pkgname=httpx-gssapi
pkgname=python-httpx-gssapi
pkgver=0.1.3
pkgrel=1
pkgdesc="GSSAPI (HTTP Negotiate) authentication for Python httpx"
url="https://github.com/pythongssapi/httpx-gssapi"
arch=(any)
license=(custom:ISC)
depends=(python-gssapi python-httpx)
makedepends=(git python-setuptools)
_commit=c7f7d3b74dd2607f6c6850dd5f9592451cfdcc0e
source=("git+https://github.com/pythongssapi/httpx-gssapi#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --tags | sed "s/^v//; s/-/.r/; s/-/./"
}

build() {
  cd $_pkgname
  python setup.py build
}

package() {
  cd $_pkgname
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ts=2:sw=2:et
