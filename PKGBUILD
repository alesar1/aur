# Maintainer: Bert Peters <bert@bertptrs.nl>
# Contributor: Dan Beste <dan.ray.beste@gmail.com>
# Contributor: Yamakaky <yamakaky@yamaworld.fr>

pkgname=rust-src
pkgver=1.42.0
pkgrel=1
pkgdesc='Systems programming language focused on safety, speed and concurrency (source code)'
arch=('any')
url='http://rust-lang.org'
license=('Apache' 'MIT')
options=(!strip)
source=("rust-${pkgver}.tar.gz::https://github.com/rust-lang/rust/archive/${pkgver}.tar.gz")
sha256sums=('e8a8713a25a9476f482b64fa5036b964bd81f13e61ac3c2e130bdb48b082ded2')

package() {
  cd "rust-${pkgver}"

  install -d -m 755 "${pkgdir}/usr/src/rust/"
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE-*

  cp -p -r * "${pkgdir}/usr/src/rust/"
}

# vim: ts=2 sw=2 et:
