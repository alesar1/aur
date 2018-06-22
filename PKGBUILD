# Maintainer: Dan Beste <dan.ray.beste@gmail.com>
# Contributor: Yamakaky <yamakaky@yamaworld.fr>

pkgname='rust-src'
pkgver=1.27.0
pkgrel=1
pkgdesc='rustc source'
arch=('any')
url='http://rust-lang.org'
license=('Apache' 'MIT')
options=(!strip)
source=("rust-${pkgver}.tar.gz::https://github.com/rust-lang/rust/archive/${pkgver}.tar.gz")
sha256sums=('0bbca54761be5302efc6e6fdb5f4dab4e0dec24458ca7c13538b7259885f9457')

prepare() {
  cd "rust-${pkgver}"

  find . -type d -exec chmod 755 {} \;
  find . -type f -exec chmod 644 {} \;
}

package() {
  cd "rust-${pkgver}"

  install -d -m 755 "${pkgdir}/usr/src/rust/"

  cp -p -r * "${pkgdir}/usr/src/rust/"
}

# vim: ts=2 sw=2 et:
