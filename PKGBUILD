# Maintainer: The-EDev <farook@the-e-dev.com>
pkgname=crow
pkgver=0.3+1
pkgrel=1
pkgdesc="A very fast and easy to use C++ micro web framework"
arch=(any)
url="https://crowcpp.org"
license=('custom:BSD-3-Clause')
depends=('boost>=1.64.0')
optdepends=('openssl: HTTPS support' 'zlib: HTTP compression support')
conflicts=("$pkgname-git")
changelog='changelog.md'
source=("https://github.com/CrowCpp/$pkgname/releases/download/v$pkgver/crow_all.h")
md5sums=('SKIP') #autofill using updpkgsums

package() {
  echo "$pkgdir/usr/include/crow_all.h"
  install -Dm644 "crow_all.h" "$pkgdir/usr/include/crow_all.h"
}
